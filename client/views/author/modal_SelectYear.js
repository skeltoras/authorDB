//-- template created functions
Template.modalSelectYear.created = function(){
};

//-- template destroyed functions
Template.modalSelectYear.destroyed = function(){
};

//-- template rendered functions
Template.modalSelectYear.rendered = function(){
};

//-- template helpers
Template.modalSelectYear.helpers({ 
});

//-- template events
Template.modalSelectYear.events({
// save form on submit
  'submit #formSelectYear': function(e) {
    e.preventDefault();
    
    var year = $('#years :selected').text();
    Session.set('billingYear', year);
    var authorId = Session.get('authorId');    
    $('#selectYear').modal('toggle');
    Router.go('author.billing', {_id: authorId});
  },
  // close form on reset
  'reset #formSelectYear': function(e) {
    e.preventDefault();

    $('#selectYear').modal('toggle');
  }
});