//-- template created functions
Template.modalAddEntry.created = function(){
  Session.set('modalAddEntry', false); 
};

//-- template destroyed functions
Template.modalAddEntry.destroyed = function(){
};

//-- template rendered functions
Template.modalAddEntry.rendered = function(){
};

//-- template helpers
Template.modalAddEntry.helpers({
});

//-- template events
Template.modalAddEntry.events({ 
  // save form on submit
  'submit #formAddEntry': function(e) {
    e.preventDefault();
    
    var bookId = this._id;
    var entryData = [];
    
    entryData = {
      bookId: bookId,
      entryText: $(e.target).find('[name=entryText]').val(),
      entryNum: $(e.target).find('[name=entryNum]').val(),
      entryVal: $(e.target).find('[name=entryVal]').val(),
      entryYear: $(e.target).find('[name=entryYear]').val(),
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    };
    
    Meteor.call('addBookEntries', entryData, function(error, result) {
    });
        
    Session.set('modalAddEntry', false);
    $('#addEntry').modal('toggle');
  },
  // close form on reset
  'reset #formAddEntry': function(e) {
    e.preventDefault();
    Session.set('modalAddEntry', false);
    $('#addEntry').modal('toggle');
  }
});