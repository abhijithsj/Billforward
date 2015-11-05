// Write your package code here!
// WtBillForward = {};

// Add the database connection
if (Meteor.isServer) {

  config = {
					  urlRoot:     Meteor.settings.billforward.urlRoot,
					  accessToken: Meteor.settings.billforward.accessToken,
					  "requestLogging": true,
					  "responseLogging": false,
					  "errorLogging": true
					};
						  
  Meteor.methods({
  
  "createBillForwardAcount": function(new_account){
      //console.log('Test 4');
      var response = WtBillForwardAPI.accounts.create(new_account);
      return response;
    }
  });						  

}

