//@since v0.9.4

//-- template created functions
Template.authorBilling.created = function(){
};

//-- template destroyed functions
Template.authorBilling.destroyed = function(){
};

//-- template rendered functions
Template.authorBilling.rendered = function(){
};

//-- template helpers
Template.authorBilling.helpers({
  getYear: function() {
    var year = Session.get('billingYear');
    return year;
  }
});

//-- template events
Template.authorBilling.events({
});