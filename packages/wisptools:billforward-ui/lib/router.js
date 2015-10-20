Router.route('/bf/account/create', {
  name: 'create',
  template: 'wtCreateBfAccount'
  
});

Router.onBeforeAction(function() {
  this.next();
});
