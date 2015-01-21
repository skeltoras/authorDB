//-- template created functions
Template.bookNew.created = function(){
};

//-- template destroyed functions
Template.bookNew.destroyed = function(){
};

//-- template rendered functions
Template.bookNew.rendered = function(){
  $(document).ready(function() { $("#authors").select2(); });
};

//-- template helpers
Template.bookNew.helpers({
});

//-- template events
Template.bookNew.events({
  // save form on submit
  'submit form': function(e) {
    e.preventDefault();

    var authorData = [];
    var changes = [];
    
    $('#authors :selected').each(function(i, selected){
      authorData[i] = {
        authorId: $(selected).val(),
        authorName: $(selected).text()
      };
    });

    changes = [{
      date: new Date().getTime(),
      content: 'Buch angelegt.'
    }];
    
    var book = {
      bookTitle: $(e.target).find('[name=bookTitle]').val(),
      bookSubtitle: $(e.target).find('[name=bookSubtitle]').val(),
      bookSeries: $(e.target).find('[name=bookSeries]').val(),
      authorData: authorData,
      bookPrice: $(e.target).find('[name=bookPrice]').val(),
      bookISBN: $(e.target).find('[name=bookISBN]').val(),
      bookEAN: $(e.target).find('[name=bookEAN]').val(),
      bookArtNrI3: $(e.target).find('[name=bookArtNrI3]').val(),
      bookArtNrBH: $(e.target).find('[name=bookArtNrBH]').val(),
      notes: $(e.target).find('[name=notes]').val(),
      changes: changes,
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    };
    
    Meteor.call('newBook', book, function(error, result) {
      //if (error)
        //return throwError(error.reason);
    });
  }  
});