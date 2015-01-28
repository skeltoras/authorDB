Meteor.methods({
  newBook: function(book) {
    Books.insert(book);
  },
  updateBook: function(book, bookId, changes) {
    if(changes){
      Books.update(bookId, {$set: book, $addToSet: {changes: changes} });
    } else {
      Books.update(bookId, {$set: book});
    }    
  }
})