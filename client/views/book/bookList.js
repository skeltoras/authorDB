//-- template created functions
Template.bookList.created = function(){ 
};

//-- template destroyed functions
Template.bookList.destroyed = function(){
};

//-- template rendered functions
Template.bookList.rendered = function(){
};

//-- template helpers
Template.bookList.helpers({
});

//-- template helpers
Template.booksAllList.helpers({
  // list of all books sorted by submit-date @since 0.1.0
  books: function() {
    return Books.find({}, {sort: {submitted: -1}});
  }
});

//-- template events
Template.bookList.events({  
});