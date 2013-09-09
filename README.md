# awssum-amazon-cloudformation #

This is an ```AwsSum``` plugin!

You'll need to add [awssum-amazon-cloudformation](https://github.com/awssum/awssum-amazon-cloudformation/) to your package.json
dependencies. Both [awssum](https://github.com/awssum/awssum/) and
[awssum-amazon](https://github.com/awssum/awssum-amazon/) are pulled in as peer dependencies.

## Example ##

```
var fmt = require('fmt');
var amazonCloudFormation = require('awssum-amazon-cloudformation');

var cf = new amazonCloudFormation.CloudFormation({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazonCloudFormation.US_EAST_1
});

cf.ListStacks(function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
```

## Operations ##

### CreateStack ###

Docs: [CreateStack on AWS](http://docs.amazonwebservices.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html)

### DeleteStack ###

Docs: [DeleteStack on AWS](http://docs.amazonwebservices.com/AWSCloudFormation/latest/APIReference/API_DeleteStack.html)

### DescribeStackEvents ###

Docs: [DescribeStackEvents on AWS](http://docs.amazonwebservices.com/AWSCloudFormation/latest/APIReference/API_DescribeStackEvents.html)

### DescribeStackResource ###

Docs: [DescribeStackResource on AWS](http://docs.amazonwebservices.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResource.html)

### DescribeStackResources ###

Docs: [DescribeStackResources on AWS](http://docs.amazonwebservices.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResources.html)

### DescribeStacks ###

Docs: [DescribeStacks on AWS](http://docs.amazonwebservices.com/AWSCloudFormation/latest/APIReference/API_DescribeStacks.html)

### EstimateTemplateCost ###

Docs: [EstimateTemplateCost on AWS](http://docs.amazonwebservices.com/AWSCloudFormation/latest/APIReference/API_EstimateTemplateCost.html)

### GetTemplate ###

Docs: [GetTemplate on AWS](http://docs.amazonwebservices.com/AWSCloudFormation/latest/APIReference/API_GetTemplate.html)

### ListStackResources ###

Docs: [ListStackResources on AWS](http://docs.amazonwebservices.com/AWSCloudFormation/latest/APIReference/API_ListStackResources.html)

### ListStacks ###

Docs: [ListStacks on AWS](http://docs.amazonwebservices.com/AWSCloudFormation/latest/APIReference/API_ListStacks.html)

### UpdateStack ###

Docs: [UpdateStack on AWS](http://docs.amazonwebservices.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html)

### ValidateTemplate ###

Docs: [ValidateTemplate on AWS](http://docs.amazonwebservices.com/AWSCloudFormation/latest/APIReference/API_ValidateTemplate.html)

# Author #

Written by [Andrew Chilton](http://chilts.org/) - [Blog](http://chilts.org/blog/) -
[Twitter](https://twitter.com/andychilton).

# License #

* [Copyright 2011-2013 Apps Attic Ltd.  All rights reserved.](http://appsattic.mit-license.org/2011/)
* [Copyright 2013 Andrew Chilton.  All rights reserved.](http://chilts.mit-license.org/2013/)

(Ends)
