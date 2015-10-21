if (Meteor.isClient){

Template.wtBillForwardAddress.helpers({
displayAdd2: function (add2, add3) {
return (add2 || add3 || Session.get('mdAddressDisplayAdd2'));
},
displayAdd3: function (add3) {
return (add3 || Session.get('mdAddressDisplayAdd3'));
}
});
Template.wtBillForwardAddress.events({
'click .add2ndLine': function () {
Session.set('mdAddressDisplayAdd2', true);
},
'click .add3rdLine': function () {
Session.set('mdAddressDisplayAdd3', true);
}
});
Template.wtBillForwardAddress.onRendered(function () {
Session.set('mdAddressDisplayAdd2', false);
Session.set('mdAddressDisplayAdd3', false);
});

}
