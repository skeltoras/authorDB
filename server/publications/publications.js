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

//@since 0.7.8
Meteor.publish('conditions', function() {
  return Conditions.find();
});

//@since 0.7.9
Meteor.publish('billings', function() {
  return Billings.find();
});

//@since 0.8.3
Meteor.publish('entries', function() {
  return Entries.find();
});