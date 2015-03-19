//@since v0.11.0

//-- template onCreated functions
Template.boStock.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var bookId = Session.get('bookId');
    self.subscribe('singleBook', bookId);
    self.subscribe('getEntriesPerBook', bookId);
  }); 
});

//-- template onDestroyed functions
Template.boStock.onDestroyed(function () {
});

//-- template onRendered functions
Template.boStock.onRendered(function () {
});

//-- template helpers
Template.boStock.helpers({
  listEntries: function(){                                                                            
    return Entries.find().fetch();
  },
  sumEntries: function() {
    var entrySum = 0;
    var data = Entries.find().map(function(entry) {
      entrySum += Number(entry.entryVal);
    });
    Session.set('bookEntrySum', entrySum);
    return entrySum;
  },
  bookValue: function(){
    var sum = Session.get('bookEntrySum');
    if(sum){
      sum = Number(sum);
      var bookPrice = Books.findOne({_id: this._id}).bookProductionPrice;
      bookPrice = Number(bookPrice.replace( /,/,"." ));
      var bookValue = sum * bookPrice;
      return bookValue;
    }
  }
});

//-- template events
Template.boStock.events({  
  //@since v0.8.3
  'click .addEntry': function(e) {
    e.preventDefault();
    var bookId = e.currentTarget.id;
    Session.set('bookId', bookId);
    Session.set('modalAddEntry', true); 
    $('#addEntry').modal('toggle');
  },
  //@since v0.8.4
  'click .editEntry': function(e) {
    e.preventDefault();
    var entryId = e.currentTarget.id;
    Session.set('entryId', entryId);   
    Session.set('modalEditEntry', true); 
    $('#editEntry').modal('toggle');
  },
  'click .deleteEntry': function(e) {
    e.preventDefault();
    var entryId = e.currentTarget.id;
    Session.set('entryId', entryId);   
    Session.set('modalDeleteEntry', true); 
    $('#deleteEntry').modal('toggle');
  },
});