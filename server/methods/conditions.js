Meteor.methods({
  newCondition: function(condition) {
    Conditions.insert(condition);
  },
  updateCondition: function(condition, bookId, changes) {
    if(changes){
      Conditions.update({'bookData.bookId': bookId}, {$set: condition, $addToSet: {changes: changes} });
    } else {
      Conditions.update({'bookData.bookId': bookId}, {$set: condition});
    }
  },
  getSingleConditionData: function(bookId) {
    return Conditions.findOne({'bookData.bookId': bookId}); 
  }
})