if (Meteor.isClient){

	Template.registerHelper("log", function(something) {
  	console.log(something);
	});


	Template.wtEditBfAccounts.helpers({
		accountId: function(){

			return Session.get('selectedAccount');

		},
		accountData: function(accountId){
			 console.log(accountId);
			Meteor.call("getSingleBillForwardAcount", accountId, function(err,response){
				if(err) {
						console.log("Error:" + err.reason);
						return;
					}
				if(response != 'failed')
				{
				  console.log(response);
				  Session.set('proileData', response.details);
				  return response.details;					  
				}
				else
				{
					$.growl({
							icon: 'glyphicon glyphicon-warning-sign',
							message: 'Failed to create account. Please try again'
						},{
							type: 'danger'
						});
				}

			});
		},
	  firstName:function(){
	  	if(Session.get('proileData'))
	  	{
	  		return Session.get('proileData').firstName;
	  	} 
	  },
	  lastName:function(){
	  	if(Session.get('proileData'))
	  	{
	  		return Session.get('proileData').lastName;
	  	} 
	  },
	  email:function(){
	  	if(Session.get('proileData'))
	  	{
	  		return Session.get('proileData').email;
	  	} 
	  },
	  mobile:function(){
	  	if(Session.get('proileData'))
	  	{
	  		return Session.get('proileData').mobile;
	  	} 
	  },
	  companyName:function(){
	  	if(Session.get('proileData'))
	  	{
	  		return Session.get('proileData').companyName;
	  	} 
	  },
	  vatNumber:function(){
	  	if(Session.get('proileData'))
	  	{
	  		return Session.get('proileData').vatNumber;
	  	} 
	  },
	  address1:function(){
	  	if(Session.get('proileData'))
	  	{
	  		return Session.get('proileData').addresses[0].addressLine1;
	  	} 
	  },
	  address2:function(){
	  	if(Session.get('proileData'))
	  	{
	  		return Session.get('proileData').addresses[0].addressLine2;
	  	} 
	  },
	  address3:function(){
	  	if(Session.get('proileData'))
	  	{
	  		return Session.get('proileData').addresses[0].addressLine3;
	  	} 
	  }
	});
}