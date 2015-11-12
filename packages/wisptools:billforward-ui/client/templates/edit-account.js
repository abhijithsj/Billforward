if (Meteor.isClient){

	Template.wtEditBfAccounts.helpers({
		accountId: function(){
			return Session.get('selectedAccount');

		},
		accountDetails: function(){
			return WtBillForwardAccounts.collection.accounts.find({'details.id': accountId});
		}, 
	  firstName:function(){
	    return accountDetails.firstName;
	  }
	});
}