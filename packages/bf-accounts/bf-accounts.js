// Write your package code here!

var model = new WtBillForward.Account();

BillForward.Account.create(model)
.then(function(account) {
  console.log(account.toString());
})
.catch(console.error);