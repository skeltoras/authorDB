Meteor.publish('allBooks', function() {
  return Books.find({}, {sort: {bookTitle: 1}});
});

Meteor.publish('singleBook', function(bookId) {
  return Books.find({_id: bookId});
});

Meteor.publish('getAllAddresses', function() {
  return Authors.find({}, {sort: {lastName: 1}})
});

Meteor.publish('getEntriesPerBook', function(bookId) {
  return Entries.find({bookId: bookId}, {sort:{entryYear: -1, submitted: -1}});
});

Meteor.publish('getSalesPerYearPerBook', function(bookId) {
  return SalesPerYear.find({bookId: bookId});
});




