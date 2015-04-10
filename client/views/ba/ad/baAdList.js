//@since v1.0.2

//-- template onCreated functions
Template.baAdList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe("ba_getAllAuthors");
  });  
});

//-- template onDestroyed functions
Template.baAdList.onDestroyed(function () {
});

//-- template onRendered functions
Template.baAdList.onRendered(function () {
});


//-- template helpers
Template.baAdList.helpers({
});

//-- template events
Template.baAdList.events({  
});

//-- template helpers
Template.baAdAllList.helpers({
  // list of all contacts sorted by submit-date @since 0.1.0
  authors: function() {
    return Authors.find({});
  }
});