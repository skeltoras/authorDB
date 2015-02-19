//@since v0.9.4

//-- template created functions
Template.authorBillingPrint.created = function(){
};

//-- template destroyed functions
Template.authorBillingPrint.destroyed = function(){
};

//-- template rendered functions
Template.authorBillingPrint.rendered = function(){
};

//-- template helpers
Template.authorBillingPrint.helpers({
  getYear: function() {
    var year = Session.get('billingYear');
    return year;
  },
});

//-- template events
Template.authorBillingPrint.events({
});