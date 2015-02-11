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
    return Entries.find({bookId: this._id}, {sort:{entryYear: -1}}).fetch();
  },
  sumEntries: function() {
    var entrySum = 0;
    var data = Entries.find({bookId: this._id}, {sort:{entryYear: 1}}).map(function(entry) {
      entrySum += Number(entry.entryVal);
    });
    return entrySum;
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
});