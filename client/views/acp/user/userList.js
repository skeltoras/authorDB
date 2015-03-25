//@since v0.11.1

//-- template onCreated functions
Template.userList.onCreated(function () { 
  var self = this;
  self.autorun(function () {
    self.subscribe("getUserList");
  });  
});

//-- template onDestroyed functions
Template.userList.onDestroyed(function () {
});

//-- template onRendered functions
Template.userList.onRendered(function () {
});

//-- template helpers
Template.userList.helpers({
  getUsers: function() {
    return Meteor.users.find().fetch();
  }
});

//-- template events
Template.userList.events({  
});