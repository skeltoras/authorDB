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
  },
  updateBookEdition: function(bookId, editionData) {
    Books.update(bookId, {$addToSet: {editionData: editionData} });  
  },
  removeBookEdition: function(bookId, editionId) {
    Books.update(bookId, {$pull: {editionData: {editionId: editionId}} });    
  }
})