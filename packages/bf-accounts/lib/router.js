Router.route('/create', {
  name: 'create',
  template: 'wtCreateAccount'
  
});

Router.onBeforeAction(function() {
  this.next();
});
