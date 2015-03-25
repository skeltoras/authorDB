//@since v0.11.0

//-- template onCreated functions
Template.adBillShow.onCreated(function () {
  var self = this;
  var authorId = Session.get('authorId');
  var year = Session.get('billingYear');         
  self.autorun(function () {
    self.subscribe('singleBilling', authorId, year);
  });
});

//-- template onDestroyed functions
Template.adBillShow.onDestroyed(function () {
});

//-- template onRendered functions
Template.adBillShow.onRendered(function () {
});

//-- template helpers
Template.adBillShow.helpers({
  getYear: function() {
    var year = Session.get('billingYear');
    return year;
  }
});

//-- template events
Template.adBillShow.events({
});