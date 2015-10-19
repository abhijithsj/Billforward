// Write your package code here!
WtBillForward = {};

// Add the database connection
if (Meteor.isServer) {
  
  WtBillForward = Npm.require('billforward');

  config = {
							  urlRoot:     Meteor.settings.billforward.urlRoot,
							  accessToken: Meteor.settings.billforward.accessToken,
							  "requestLogging": true,
							  "responseLogging": false,
							  "errorLogging": true
						  };
  WtBillForward.Client.makeDefault(config);
 // console.log(WtBillForward);
}

