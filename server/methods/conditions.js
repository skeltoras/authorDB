Meteor.methods({
  newCondition: function(condition) {
    Conditions.insert(condition);
  },
  getSingleConditionData: function(bookId) {
    return Conditions.findOne({'bookData.bookId': bookId}); 
  }
})