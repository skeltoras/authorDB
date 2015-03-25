//@since v0.11.0

//-- template onCreated functions
Template.modalSelectYear.onCreated(function () { 
});

//-- template onDestroyed functions
Template.modalSelectYear.onDestroyed(function () {
});

//-- template onRendered functions
Template.modalSelectYear.onRendered(function () {
});

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
    Router.go('acp.ad.bill.new', {_id: authorId});
  },
  // close form on reset
  'reset #formSelectYear': function(e) {
    e.preventDefault();
    $('#selectYear').modal('toggle');
  }
});