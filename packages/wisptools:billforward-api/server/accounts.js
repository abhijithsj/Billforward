WtBillForwardAPI = {

  config:{
			  urlRoot:     Meteor.settings.billforward.urlRoot,
			  accessToken: Meteor.settings.billforward.accessToken,
			  "requestLogging": true,
			  "responseLogging": false,
			  "errorLogging": true
  },
  accounts:{
      create:function(new_account){ 

            console.log(new_account);
            Meteor.http.call("GET",WtBillForwardAPI.config.urlRoot,
            {
                headers: {"Authorization" : "Bearer "+WtBillForwardAPI.config.accessToken, "Content-Type": "application/json"},
                data: new_account
            }, 
            function(error,result)
            {
                if(error){console.log(error);}
                //console.log(result);
                console.log(result.statusCode);
                if(result.statusCode == 200)
                {
                 // Users.insert(new_account);
                  //console.log(result);
                  return result;
                }
            });
      },

      update:function(){console.log("update");}
  }



}
