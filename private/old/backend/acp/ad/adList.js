//@since v0.11.1

//-- template onCreated functions
Template.adList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe("allAddresses");
  });  
});

//-- template onDestroyed functions
Template.adList.onDestroyed(function () {
});

//-- template onRendered functions
Template.adList.onRendered(function () {
});


//-- template helpers
Template.adList.helpers({
});

//-- template events
Template.adList.events({  
});

//-- template helpers
Template.adAllList.helpers({
  // list of all contacts sorted by submit-date @since 0.1.0
  authors: function() {
    return Authors.find({});
  }
});