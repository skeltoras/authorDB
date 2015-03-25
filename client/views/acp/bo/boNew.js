//@since v0.11.0

//-- template onCreated functions
Template.boNew.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe("getAllAddresses");
  });  
});

//-- template onDestroyed functions
Template.boNew.onDestroyed(function () {
});

//-- template onRendered functions
Template.boNew.onRendered(function () {
  $(document).ready(function() { $("#affiliateData").select2(); });
  $(document).ready(function() { $("#authors").select2(); });
});

//-- template helpers
Template.boNew.helpers({
});

//-- template events
Template.boNew.events({
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
    
    var bookPriceMwSt = $('#mwst :selected').val();
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
      bookPriceMwSt: bookPriceMwSt,
      bookProductionPrice: $(e.target).find('[name=bookProductionPrice]').val(),
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
      bookImage: $(e.target).find('[name=bookImage]').val(),
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