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
  },
  debugThis: function() {
    var debug = Billings.findOne({_id: this._id});
    console.log('Debug:');
    console.log(debug);    
  }
});

//-- template events
Template.authorBilling.events({
});