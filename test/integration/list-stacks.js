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

test('CloudFormation.ListStacks', function(t) {
    cf.ListStacks(function(err, data) {
        t.equal(err, null, 'CloudFormation:ListStacks : Error should be null');
        t.ok(data, 'CloudFormation:ListStacks : data ok');
        t.end();
    });
});

// --------------------------------------------------------------------------------------------------------------------
