//-- template created functions
Template.modalEditionEdit.created = function(){ 
};

//-- template destroyed functions
Template.modalEditionEdit.destroyed = function(){
};

//-- template rendered functions
Template.modalEditionEdit.rendered = function(){
};

//-- template helpers
Template.modalEditionEdit.helpers({
});

//-- template events
Template.modalEditionEdit.events({ 
  // save form on submit
  'submit #editionEdit': function(e) {
    e.preventDefault();

    var bookId = this._id;
    var affiliateData = [];
    var authorData = [];
    var sessionChanges = Session.get('changesContent');
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

    if(sessionChanges) {
      changes = {
        date: new Date().getTime(),
        content: 'Buch geändert. <br>' + sessionChanges
      };
    }
    
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
      updatedAt: new Date().getTime()
    };
    
    Meteor.call('updateBook', book, bookId, changes, function(error, result) {
    });
    
    Session.set('changesContent', '');
    
    Router.go('book.show', {_id: bookId});
  }
});