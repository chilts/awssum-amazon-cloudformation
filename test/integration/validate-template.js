// --------------------------------------------------------------------------------------------------------------------
//
// integration/validate-template.js
//
// Written by Andrew Chilton <andychilton@gmail.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------
// requires

var fs = require('fs');
var test = require('tape');

var amazonCloudFormation = require('../../awssum-amazon-cloudformation.js');
var CloudFormation = amazonCloudFormation.CloudFormation;

// --------------------------------------------------------------------------------------------------------------------

var env = process.env;
var cf;
try {
    cf = new CloudFormation({
        'accessKeyId'     : env.ACCESS_KEY_ID,
        'secretAccessKey' : env.SECRET_ACCESS_KEY,
        'region'          : amazonCloudFormation.US_EAST_1
    });
}
catch(e) {
    // env vars aren't set, so skip these integration tests
    console.log(e);
    process.exit();
}

// --------------------------------------------------------------------------------------------------------------------
// Amazon:CloudFormation operations

test('CloudFormation.ValidateTemplate', function(t) {
    var args = {
        TemplateBody : fs.readFileSync(__dirname + '/template.json', { encoding : 'utf8' })
    };

    cf.ValidateTemplate(args, function(err, data) {
        t.equal(err, null, 'CloudFormation:ValidateTemplate : Error should be null');
        t.ok(data, 'CloudFormation:ValidateTemplate : data ok');
        t.equal(data.StatusCode, 200, 'CloudFormation:ValidateTemplate : statusCode is 200')

        var result = data.Body.ValidateTemplateResponse.ValidateTemplateResult;
        t.equal(result.Description, 'the description of the template', 'CloudFormation:ValidateTemplate : description mirrored back');
        t.end();
    });
});

test('CloudFormation.ValidateTemplate - empty template', function(t) {
    var args = {
        TemplateBody : fs.readFileSync(__dirname + '/template-empty.json', { encoding : 'utf8' })
    };

    cf.ValidateTemplate(args, function(err, data) {
        t.ok(err, 'CloudFormation:ValidateTemplate - empty template : error returned');

        t.equal(data, null, 'CloudFormation:ValidateTemplate - empty template : no data')

        var error = err.Body.ErrorResponse.Error;
        t.equal(
            error.Type,
            'Sender',
            'CloudFormation:ValidateTemplate - empty template : type is sender');
        t.equal(
            error.Code,
            'ValidationError',
            'CloudFormation:ValidateTemplate - empty template : code set correctly'
        );
        t.equal(
            error.Message,
            'Template format error: Every template must contain a Resources member.',
            'CloudFormation:ValidateTemplate - empty template : message set correctly'
        );
        t.end();
    });
});

// --------------------------------------------------------------------------------------------------------------------
