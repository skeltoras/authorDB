//-- template created functions
Template.bookStock.created = function(){ 
};

//-- template destroyed functions
Template.bookStock.destroyed = function(){
};

//-- template rendered functions
Template.bookStock.rendered = function(){
};

//-- template helpers
Template.bookStock.helpers({
  listEntries: function(){
    return Entries.find({bookId: this._id}, {sort:{entryYear: -1, submitted: -1}}).fetch();
  },
  sumEntries: function() {
    var entrySum = 0;
    var data = Entries.find({bookId: this._id}, {sort:{entryYear: 1}}).map(function(entry) {
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
Template.bookStock.events({  
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