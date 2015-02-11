Template.login.events({
  'submit form': function(event, template){
    event.preventDefault();
    var emailVar = template.find('#login-email').value;
    var passwordVar = template.find('#login-password').value;
    Meteor.loginWithPassword(emailVar, passwordVar);
    console.log("Form submitted.");
  }
});

Template.logout.events({
  'submit form': function(event, template){
    event.preventDefault();
    Meteor.logout();
  }
});