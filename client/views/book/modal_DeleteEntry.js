//-- template created functions
Template.modalDeleteEntry.created = function(){
  Session.set('modalDeleteEntry', false); 
};

//-- template destroyed functions
Template.modalDeleteEntry.destroyed = function(){
};

//-- template rendered functions
Template.modalDeleteEntry.rendered = function(){
};

//-- template helpers
Template.modalDeleteEntry.helpers({
});

//-- template events
Template.modalDeleteEntry.events({ 
  // save form on submit
  'submit #formDeleteEntry': function(e) {
    e.preventDefault();
    
    var entryId = Session.get('entryId');
    
    Meteor.call('deleteBookEntries', entryId, function(error, result) {
    });
        
    Session.set('modalDeleteEntry', false);
    $('#deleteEntry').modal('toggle');
  },
  // close form on reset
  'reset #formDeleteEntry': function(e) {
    e.preventDefault();
    Session.set('modalDeleteEntry', false);
    $('#deleteEntry').modal('toggle');
  }
});