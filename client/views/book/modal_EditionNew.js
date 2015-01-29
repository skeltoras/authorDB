//-- template created functions
Template.modalEditionNew.created = function(){ 
};

//-- template destroyed functions
Template.modalEditionNew.destroyed = function(){
};

//-- template rendered functions
Template.modalEditionNew.rendered = function(){
};

//-- template helpers
Template.modalEditionNew.helpers({
});

//-- template events
Template.modalEditionNew.events({ 
  // save form on submit
  'submit #formEditionNew': function(e) {
    e.preventDefault();
    
    var bookId = this._id;
    var editionData = [];
    
    editionData = {
      editionId: Random.id(),
      editionNr: $(e.target).find('[name=editionNr]').val(),
      editionText: $(e.target).find('[name=editionText]').val(),
      editionCount: $(e.target).find('[name=editionCount]').val(),
      releaseDate: $(e.target).find('[name=releaseDate]').val()
    };
    
    //console.log(editionData);
    
    Meteor.call('updateBookEdition', bookId, editionData, function(error, result) {
    });
    
    $('#editionNew').modal('toggle');
  },
  // close form on reset
  'reset #editionNew': function(e) {
    e.preventDefault();

    $('#editionNew').modal('toggle');
  }
});