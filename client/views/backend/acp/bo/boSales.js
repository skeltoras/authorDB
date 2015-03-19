//@since v0.11.0

//-- template onCreated functions
Template.boSales.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var bookId = Session.get('bookId');
    self.subscribe('singleBook', bookId);
    self.subscribe('getSalesPerYearPerBook', bookId);
  }); 
});

//-- template onDestroyed functions
Template.boSales.onDestroyed(function () {
});

//-- template onRendered functions
Template.boSales.onRendered(function () {
});

//-- template helpers
Template.boSales.helpers({
  salesPerYear: function(){
    return SalesPerYear.find();
  }
});

//-- template events
Template.boSales.events({
});