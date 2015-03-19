//@since v0.11.0

//-- template onCreated functions
Template.boEdit.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var bookId = Session.get('bookId');
    self.subscribe('singleBook', bookId);
    self.subscribe('getAllAddresses');
  });
  Session.set('changesContent', '');
  sessionChanges = [];
  $(document).ready(function() {
    $("input, select, textarea").each(function() {
      var theValue = $(this).val();
      $(this).data("value", theValue);
    });        
  }); 
});

//-- template onDestroyed functions
Template.boEdit.onDestroyed(function () {
});

//-- template onRendered functions
Template.boEdit.onRendered(function () {
  var boxes = this.findAll('.form-control');
  boxes.forEach(function(box){
    Session.set(box.name, box.value);
  });
});

//-- template helpers
Template.boEdit.helpers({
});

//-- template events
Template.boEdit.events({ 
  // set logdata
  'change .form-control': function(e) {   
    var sessionChangesAdd = [];
    var sessionChanges = Session.get('changesContent');
    var getName = e.currentTarget.name;
    var getType = e.currentTarget.type;
    if(getType=='textarea'){
      var getLabel = getName;
    } else {
      var getLabel = e.currentTarget.labels[0].innerText;
    }
    var getOldValue = Session.get(getName);
    var getNewValue = e.currentTarget.value;
    
    if(e.added){
      sessionChangesAdd = sessionChanges + 'Bei <i>' + getLabel + '</i> ' + e.added.text + ' hinzugefügt<br>';  
    } else if(e.removed) {
      sessionChangesAdd = sessionChanges + 'Bei <i>' + getLabel + '</i> ' + e.removed.text + ' entfernt<br>';
    } else {
      if(getOldValue){
        if(getNewValue) {
          sessionChangesAdd = sessionChanges + '<i>' + getLabel + '</i> von ' + getOldValue + ' auf ' + getNewValue + ' geändert<br>';
        } else {
          sessionChangesAdd = sessionChanges + 'Bei <i>' + getLabel + '</i> den Wert ' + getOldValue + ' gelöscht<br>';
        }  
      } else {
        sessionChangesAdd = sessionChanges + 'Bei <i>' + getLabel + '</i> ' + getNewValue + ' hinzugefügt<br>';  
      }
    }
    Session.set('changesContent', sessionChangesAdd);
  },
  // save form on submit
  'submit #formBookEdit': function(e) {
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
    
    var bookPriceMwSt = $('#mwst :selected').val();
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
      bookNotes: $(e.target).find('[name=bookNotes]').val(),
      updatedAt: new Date().getTime()
    };
    
    Meteor.call('updateBook', book, bookId, changes, function(error, result) {
    });
    
    Session.set('changesContent', '');
    
    Router.go('acp.bo.show', {_id: bookId});
  },
  'click #back': function(e) {
    e.preventDefault();
    var bookId = this._id;    
    Router.go('acp.bo.show', {_id: bookId});
  },
  'click .deleteEdition': function(e) {
    e.preventDefault();
    var bookId = Session.get('bookId');
    var editionId = e.currentTarget.id;
    Meteor.call('removeBookEdition', bookId, editionId, function(error, result) {
    });
  }  
});