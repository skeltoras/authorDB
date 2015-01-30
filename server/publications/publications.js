Meteor.publish('books', function() {
  return Books.find();
});

Meteor.publish('authors', function() {
  return Authors.find();
});

Meteor.publish('sales', function() {
  return Sales.find();
});

Meteor.publish('stock', function() {
  return Stock.find();
});

//@since 0.7.0
Meteor.publish('salesperyear', function() {
  return SalesPerYear.find();
});