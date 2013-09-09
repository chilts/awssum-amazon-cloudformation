// --------------------------------------------------------------------------------------------------------------------
//
// require.js
//
// Written by Andrew Chilton <andychilton@gmail.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------
// requires

var fs = require('fs');
var test = require('tape');

// --------------------------------------------------------------------------------------------------------------------

test('CloudFormation.ListStacks', function(t) {
    var amazonCloudFormation = require('../awssum-amazon-cloudformation.js');
    var CloudFormation = amazonCloudFormation.CloudFormation;

    t.ok(amazonCloudFormation, 'module required ok');
    t.ok(CloudFormation, 'constructor exists');

    t.end();
});

// --------------------------------------------------------------------------------------------------------------------
