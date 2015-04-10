Meteor.publish('ba_getAllBooks', function() {
  return Books.find({}, {sort: {bookTitle: 1}});
});

Meteor.publish('ba_getSingleBook', function(bookId) {
  return Books.find({_id: bookId});
});

Meteor.publish('ba_getAllAddresses', function() {
  return Authors.find({}, {sort: {lastName: 1}})
});

Meteor.publish('ba_getEntriesPerBook', function(bookId) {
  return Entries.find({bookId: bookId}, {sort:{entryYear: -1, submitted: -1}});
});

Meteor.publish('ba_getSalesPerYearPerBook', function(bookId) {
  return SalesPerYear.find({bookId: bookId});
});




