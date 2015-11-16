Future = Npm.require('fibers/future');

WtBillForwardAPI.config = {
  urlRoot:     Meteor.settings.billforward.urlRoot,
  accessToken: Meteor.settings.billforward.accessToken,
  "requestLogging": true,
  "responseLogging": false,
  "errorLogging": true
}

WtBillForwardAPI.accounts = {
  create:function(new_account){ 

    console.log(new_account);
    var myFuture = new Future();
    Meteor.http.call("POST",WtBillForwardAPI.config.urlRoot, { headers: {"Authorization" : "Bearer "+WtBillForwardAPI.config.accessToken, "Content-Type": "application/json"},data: new_account}, 
            function(error,result)
            {
              if(error){console.log(error);}
              //console.log(result);
              console.log(result.statusCode);
              if(result.statusCode == 200)
              {
                // Users.insert(new_account);
                //console.log(result);
                myFuture.return(result);
              }
            });
    return myFuture.wait();
  },
  getAll:function(){
    var myFuture = new Future();
    Meteor.http.call("GET",WtBillForwardAPI.config.urlRoot, { headers: {"Authorization" : "Bearer "+WtBillForwardAPI.config.accessToken}}, 
            function(error,result)
            {
              if(error){console.log(error);}
              //console.log(result);
              //console.log(result.statusCode);
              if(result.statusCode == 200)
              {
                //console.log(result);
                myFuture.return(result);
              }
            });
    return myFuture.wait();
  },
  getSingleAccount:function(accountId){
    var myFuture = new Future();
    Meteor.http.call("GET",WtBillForwardAPI.config.urlRoot+"/"+accountId, { headers: {"Authorization" : "Bearer "+WtBillForwardAPI.config.accessToken}}, 
            function(error,result)
            {
              if(error){console.log(error);}
              //console.log(result);
              //console.log(result.statusCode);
              if(result.statusCode == 200)
              {
                //console.log(result);
                myFuture.return(result);
              }
            });
    return myFuture.wait();
  },
  
  update:function(){console.log("update");}
}

WtBillForwardAPI.accounts.getAll();

/*
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
      var myFuture = new Future();
      Meteor.http.call("GET",WtBillForwardAPI.config.urlRoot, { headers: {"Authorization" : "Bearer "+WtBillForwardAPI.config.accessToken, "Content-Type": "application/json"},data: new_account}, 
              function(error,result)
              {
                if(error){console.log(error);}
                //console.log(result);
                console.log(result.statusCode);
                if(result.statusCode == 200)
                {
                  // Users.insert(new_account);
                  //console.log(result);
                  myFuture.return(result);
                }
              });
              return myFuture.wait();
        },

    update:function(){console.log("update");}
  }

}
*/
