if (Meteor.isClient){

  Template.wtListBfAccounts.helpers({
		accountDetails: function () { Meteor.call('getBillForwardAcounts', function(err,response) {
		  if(err) {
			  console.log("Error:" + err.reason);
			  return;
		  }
		  if(response)
		  {
		    console.log(response.data.results);
		    //Session.set('accountDetails', response.data.results[0].profile);
		  }
	  });
		}
  });
  
	Template.wtListBfAccounts.events({});
	
	Template.wtListBfAccounts.onRendered({

	});
}
