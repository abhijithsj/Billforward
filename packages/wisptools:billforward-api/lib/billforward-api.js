// Write your package code here!
WtBillForwardAPI = {};

// Add the database connection
if (Meteor.isServer) {


var WtBillForwardAPI = {

  "config":{
			  urlRoot:     Meteor.settings.billforward.urlRoot,
			  accessToken: Meteor.settings.billforward.accessToken,
			  "requestLogging": true,
			  "responseLogging": false,
			  "errorLogging": true
  },
  "accounts":{
    create:function(){ console.log("hi");},
    update:function(){console.log("update");}
  }
}

WtBillForwardAPI.accounts.create();







var new_account ={
  "profile": {
    "email": "bill.me@gent.ly",
    "firstName": "Billiam",
    "lastName": "Forward",
    "landline": "02000000000",
    "mobile": "",
    "dob": "1970-01-01T00:00:00Z",
    "addresses": [
      {
        "addressLine1": "address line 1",
        "addressLine2": "address line 2",
        "addressLine3": "address line 3",
        "city": "London",
        "province": "London",
        "country": "United Kingdom",
        "postcode": "SW1 1AS",
        "landline": "02000000000",
        "primaryAddress": true
      }
    ],
    "companyName": "BillCorp",
    "vatNumber": "",
    "logoURL": "https://app-sandbox.billforward.net/resources/images/normal_logo.png",
    "deleted": false,
    "additionalInformation": ""
  }
};

Meteor.http.call("GET",WtBillForwardAPI.config.urlRoot,{
    headers: {"Authorization" : "Bearer "+WtBillForwardAPI.config.accessToken, "Content-Type": "application/json"},
    data: new_account
}, function(error,result){
    if(error){console.log(error);}
    console.log(result);
});

//console.log(WtBillForwardAPI);
}


