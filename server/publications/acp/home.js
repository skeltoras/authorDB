Meteor.publish('countBooks', function() {
  Counts.publish(this, 'booksCount', Books.find());
});

Meteor.publish('countAuthors', function() {
  Counts.publish(this, 'authorsCount', Authors.find());
});

Meteor.publish('getSales', function() {
  return Sales.find({salesYear: 2014});
});

Meteor.publish('getBillings', function() {
  return Billings.find().count();
});