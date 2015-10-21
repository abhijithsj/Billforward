if(Meteor.isClient){

Template.wtCreateBfAccount.events({

'submit form': function (event) {
	event.preventDefault();
	var firstName = document.querySelector("[name='firstName']").value;
	var lastName = document.querySelector("[name='lastName']").value;
	var email = document.querySelector("[name='email']").value;
	var phone = document.querySelector("[name='phone']").value;
	var address = document.querySelector("[name='address']").value;
	var address2 = document.querySelector("[name='address2']").value;
	var address3 = document.querySelector("[name='address3']").value;
	var companyName = document.querySelector("[name='companyName']").value;
	var taxNo = document.querySelector("[name='taxNo']").value;
	
	var new_account ={
		"profile": 
		{
			"email": email,
			"firstName"	: firstName,
			"lastName"	: lastName,
			"landline"	: "",
			"mobile"	: phone,
			"dob"		: "",
			"addresses"	: [
			  {
				"addressLine1": address,
				"addressLine2": address2,
				"addressLine3": address3,
				"city": "",
				"province": "",
				"country": "",
				"postcode": "",
				"landline": "",
				"primaryAddress": true
			  }
			],
			"companyName": companyName,
			"vatNumber": taxNo,
			"logoURL": "https://app-sandbox.billforward.net/resources/images/normal_logo.png",
			"deleted": false,
			"additionalInformation": ""
  		}
	};
	Meteor.call('WtBillForwardAPI.accounts.create',function(new_account, response) {
			alert(response);
		})
		
	//WtBillForwardAPI.accounts.create(new_account);
	//alert(firstName);
	return false;
	}
});

}
