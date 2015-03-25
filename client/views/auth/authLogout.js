//@since v0.11.0

//-- template created functions
Template.authLogout.created = function(){
};

//-- template destroyed functions
Template.authLogout.destroyed = function(){
};

//-- template rendered functions
Template.authLogout.rendered = function(){
};

//-- template helpers
Template.authLogout.helpers({
});

//-- template events
Template.authLogout.events({
  'submit form': function(event, template){
    event.preventDefault();
    Meteor.logout();
  }
});