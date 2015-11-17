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
  "getSingleBillForwardAcount1": function(accountId){
  
      var account_details = WtBillForwardAPI.accounts.getSingleAccount(accountId);
      return account_details;
    },
  "getSingleBillForwardAcount": function(accountId){
      accountId =String(accountId);
      console.log(accountId);
      console.log(typeof(accountId));
      console.log("test");
      var single_account_details = WtBillForwardAccounts.collection.accounts.findOne({'details.accountID':accountId});
      console.log(single_account_details);
      return single_account_details;

    }
  });						  

}

