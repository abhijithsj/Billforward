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
      var account_details = response.data.results[0].profile;
      var res = WtBillForwardAccounts.collection.accounts.insert({details:account_details});
      if (res) {
       return response;
      } else {
        return "failed";
      }
    },
  "getBillForwardAcounts": function(){
  
      var account_details = WtBillForwardAPI.accounts.getAll();
      return account_details;
    },
  "getSingleBillForwardAcount": function(accountId){
  
      var account_details = WtBillForwardAPI.accounts.getSingleAccount(accountId);
      return account_details;
    }
  });						  

}

