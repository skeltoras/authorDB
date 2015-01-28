//-- template created functions
Template.bookNew.created = function(){
};

//-- template destroyed functions
Template.bookNew.destroyed = function(){
};

//-- template rendered functions
Template.bookNew.rendered = function(){
  $(document).ready(function() { $("#affiliateData").select2(); });
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

    var affiliateData = [];
    var authorData = [];
    var changes = [];
    
    $('#affiliateData :selected').each(function(i, selected){
      affiliateData[i] = {
        authorId: $(selected).val(),
        authorName: $(selected).text()
      };
    });
    
    $('#authors :selected').each(function(i, selected){
      authorData[i] = {
        authorId: $(selected).val(),
        authorName: $(selected).text()
      };
    });
    
    var bookGroup = $('#bookGroup :selected').text();

    changes = [{
      date: new Date().getTime(),
      content: 'Buch angelegt.'
    }];
    
    var book = {
      affiliateData: affiliateData,
      bookTitle: $(e.target).find('[name=bookTitle]').val(),
      bookSubtitle: $(e.target).find('[name=bookSubtitle]').val(),
      bookSeries: $(e.target).find('[name=bookSeries]').val(),
      authorData: authorData,
      bookPrice: $(e.target).find('[name=bookPrice]').val(),
      bookISBN: $(e.target).find('[name=bookISBN]').val(),
      bookEAN: $(e.target).find('[name=bookEAN]').val(),
      bookISBN10: $(e.target).find('[name=bookISBN10]').val(),
      bookArtNrI3: $(e.target).find('[name=bookArtNrI3]').val(),
      bookArtNrBH: $(e.target).find('[name=bookArtNrBH]').val(),
      bookType: $(e.target).find('[name=bookType]').val(),
      bookGroup: bookGroup,
      bookPages: $(e.target).find('[name=bookPages]').val(),
      bookHeigh: $(e.target).find('[name=bookHeigh]').val(),
      bookWidth: $(e.target).find('[name=bookWidth]').val(),
      bookWeight: $(e.target).find('[name=bookWeight]').val(),
      bookNotes: $(e.target).find('[name=bookNotes]').val(),
      changes: changes,
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    };
    
    Meteor.call('newBook', book, function(error, result) {
    });
    
    Router.go('books.list');
  }  
});