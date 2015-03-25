//@since v0.11.0

//-- template created functions
Template.authLogin.created = function(){
};

//-- template destroyed functions
Template.authLogin.destroyed = function(){
};

//-- template rendered functions
Template.authLogin.rendered = function(){
};

//-- template helpers
Template.authLogin.helpers({
});

//-- template events
Template.authLogin.events({
  'submit form': function(event, template){
    event.preventDefault();
    var emailVar = template.find('#login-email').value;
    var passwordVar = template.find('#login-password').value;
    Meteor.loginWithPassword(emailVar, passwordVar);
    Router.go('/');
  }
});