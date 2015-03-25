//@since v0.11.1

//-- template onCreated functions
Template.userShow.onCreated(function () { 
  var self = this;
  self.autorun(function () {
    var userId = Session.get('userId');
    self.subscribe('getSingleUser', userId);
  });  
});

//-- template onDestroyed functions
Template.userShow.onDestroyed(function () {
});

//-- template onRendered functions
Template.userShow.onRendered(function () {
});

//-- template helpers
Template.userShow.helpers({
});

//-- template events
Template.userShow.events({  
});