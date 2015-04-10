//-- template created functions
Template.modalEditEntry.created = function(){
  Session.set('modalEditEntry', false); 
};

//-- template destroyed functions
Template.modalEditEntry.destroyed = function(){
};

//-- template rendered functions
Template.modalEditEntry.rendered = function(){
};

//-- template helpers
Template.modalEditEntry.helpers({
  getEntryData: function() {
    var visible = Session.get('modalEditEntry');
    if(visible == true) {
      var entryId = Session.get('entryId');
      Meteor.call('getSingleEntryData', entryId, function(error, result) {
        Session.set('getSingleEntryData', result);
      });
    }
    return Session.get('getSingleEntryData'); 
  }
});

//-- template events
Template.modalEditEntry.events({ 
  // save form on submit
  'submit #formEditEntry': function(e) {
    e.preventDefault();
    
    var entryId = Session.get('entryId');
    var bookId = Session.get('bookId');
    var entryData = [];
    
    entryData = {
      bookId: bookId,
      entryText: $(e.target).find('[name=entryText]').val(),
      entryNum: $(e.target).find('[name=entryNum]').val(),
      entryVal: $(e.target).find('[name=entryVal]').val(),
      entryYear: $(e.target).find('[name=entryYear]').val(),
      updatedAt: new Date().getTime()
    };
    
    Meteor.call('editBookEntries', entryData, entryId, function(error, result) {
    });
        
    Session.set('modalEditEntry', false);
    $('#editEntry').modal('toggle');
  },
  // close form on reset
  'reset #formEditEntry': function(e) {
    e.preventDefault();
    Session.set('modalEditEntry', false);
    $('#editEntry').modal('toggle');
  }
});