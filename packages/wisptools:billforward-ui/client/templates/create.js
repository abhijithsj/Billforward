Template.mdAddress.helpers({
displayAdd2: function (add2) {
return (add2 || Session.get('mdAddressDisplayAdd2'));
},
displayAdd3: function (add3) {
return (add3 || Session.get('mdAddressDisplayAdd3'));
}
});
Template.mdAddress.events({
'click .add2ndLine': function () {
Session.set('mdAddressDisplayAdd2', true);
},
'click .add3rdLine': function () {
Session.set('mdAddressDisplayAdd3', true);
}
});
Template.mdAddress.onRendered(function () {
Session.set('mdAddressDisplayAdd2', false);
Session.set('mdAddressDisplayAdd3', false);
});

Template.wtCreateAccount.events({

'submit form': function (event) {
	var firstName = document.querySelectorAll("[name='firstName").value;
	alert(firstName);
	event.preventDefault();
	return false;
	}
});