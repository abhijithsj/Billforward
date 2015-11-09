Router.route('/bf/account/create', {
  name: 'create',
  template: 'wtCreateBfAccount'
  
});
Router.route('/bf/account/view', {
  name: 'view',
  template: 'wtViewBfAccount'
  
});


Router.onBeforeAction(function() {
  this.next();
});
