// --------------------------------------------------------------------------------------------------------------------
//
// cloudformation.js - class for AWS CloudFormation
//
// Copyright (c) 2011, 2012 AppsAttic Ltd - http://www.appsattic.com/
// Written by Andrew Chilton <chilts@appsattic.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------
// requires

// built-ins
var util = require('util');

// dependencies
var _ = require('underscore');

// our own
var awssum = require('awssum');
var amazon = require('awssum-amazon');
var operations = require('./config.js');

// --------------------------------------------------------------------------------------------------------------------
// package variables

var MARK = 'cloudformation: ';

// From: http://docs.amazonwebservices.com/general/latest/gr/rande.html
var endPoint = {};
endPoint[amazon.US_EAST_1]      = "cloudformation.us-east-1.amazonaws.com";
endPoint[amazon.US_WEST_1]      = "cloudformation.us-west-1.amazonaws.com";
endPoint[amazon.US_WEST_2]      = "cloudformation.us-west-2.amazonaws.com";
endPoint[amazon.EU_WEST_1]      = "cloudformation.eu-west-1.amazonaws.com";
endPoint[amazon.AP_SOUTHEAST_1] = "cloudformation.ap-southeast-1.amazonaws.com";
endPoint[amazon.AP_SOUTHEAST_2] = "cloudformation.ap-southeast-2.amazonaws.com";
endPoint[amazon.AP_NORTHEAST_1] = "cloudformation.ap-northeast-1.amazonaws.com";
endPoint[amazon.SA_EAST_1]      = "cloudformation.sa-east-1.amazonaws.com";
endPoint[amazon.US_GOV_WEST_1]  = "cloudformation.us-gov-west-1.amazonaws.com";

var version = '2010-05-15';

// --------------------------------------------------------------------------------------------------------------------
// constructor

var CloudFormation = function(opts) {
    var self = this;

    // call the superclass for initialisation
    CloudFormation.super_.call(this, opts);

    // check the region is valid
    if ( ! endPoint[opts.region] ) {
        throw MARK + "invalid region '" + opts.region + "'";
    }

    return self;
};

// inherit from Amazon
util.inherits(CloudFormation, amazon.AmazonSignatureV4);

// --------------------------------------------------------------------------------------------------------------------
// methods we need to implement from awssum.js/amazon.js

CloudFormation.prototype.method = function() {
    return 'POST';
};

CloudFormation.prototype.host = function() {
    return endPoint[this.region()];
};

CloudFormation.prototype.version = function() {
    return version;
};

// ----------------------------------------------------------------------------
// AWS Signature v4

CloudFormation.prototype.scope = function() {
    return 'cloudformation';
};

CloudFormation.prototype.serviceName = function() {
    return 'cloudformation';
};

CloudFormation.prototype.needsTarget = function() {
    return false;
};

// This service uses the AWS Signature v4.
// Hopefully, it fulfills : http://docs.amazonwebservices.com/cloudsearch/latest/developerguide/requestauth.html
CloudFormation.prototype.contentType = function() {
    return 'application/x-amz-json-1.0';
};

// --------------------------------------------------------------------------------------------------------------------
// operations on the service

_.each(operations, function(operation, operationName) {
    CloudFormation.prototype[operationName] = awssum.makeOperation(operation);
});

// --------------------------------------------------------------------------------------------------------------------
// exports

exports.US_EAST_1      = amazon.US_EAST_1;
exports.US_WEST_1      = amazon.US_WEST_1;
exports.US_WEST_2      = amazon.US_WEST_2;
exports.EU_WEST_1      = amazon.EU_WEST_1;
exports.AP_SOUTHEAST_1 = amazon.AP_SOUTHEAST_1;
exports.AP_SOUTHEAST_2 = amazon.AP_SOUTHEAST_2;
exports.AP_NORTHEAST_1 = amazon.AP_NORTHEAST_1;
exports.SA_EAST_1      = amazon.SA_EAST_1;
exports.US_GOV_WEST    = amazon.US_GOV_WEST;

exports.CloudFormation = CloudFormation;

// --------------------------------------------------------------------------------------------------------------------
