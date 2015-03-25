//@since v0.11.0

//-- template onCreated functions
Template.boList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe("allBooks");
  });  
});

//-- template onDestroyed functions
Template.boList.onDestroyed(function () {
});

//-- template onRendered functions
Template.boList.onRendered(function () {
});

//-- template helpers
Template.boList.helpers({
});

//-- template helpers
Template.boAllList.helpers({
  // list of all books sorted by submit-date @since 0.1.0
  books: function() {
    return Books.find({}, {sort: {bookTitle: 1}});
  }
});

//-- template events
Template.boList.events({  
});