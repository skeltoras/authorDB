//@since v1.0.2

//-- template onCreated functions
Template.baBoList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe("ba_getAllBooks");
  });  
});

//-- template onDestroyed functions
Template.baBoList.onDestroyed(function () {
});

//-- template onRendered functions
Template.baBoList.onRendered(function () {
});

//-- template helpers
Template.baBoList.helpers({
});

//-- template helpers
Template.baBoAllList.helpers({
  // list of all books sorted by submit-date @since 0.1.0
  books: function() {
    return Books.find({}, {sort: {bookTitle: 1}});
  }
});

//-- template events
Template.baBoList.events({  
});