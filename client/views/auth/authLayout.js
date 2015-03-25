//@since v0.11.7

//-- template onCreated functions
Template.authLayout.onCreated(function () { 
  $('body').addClass('auth'); 
});

//-- template onDestroyed functions
Template.authLayout.onDestroyed(function () {
  $('body.auth').removeClass('auth');
});

//-- template onRendered functions
Template.authLayout.onRendered(function () {
});

//-- template helpers
Template.authLayout.helpers({
});

//-- template events
Template.authLayout.events({
});