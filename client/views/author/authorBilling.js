//-- template created functions
Template.authorBilling.created = function(){
  Session.set('billingNo', false);
};

//-- template destroyed functions
Template.authorBilling.destroyed = function(){
};

//-- template rendered functions
Template.authorBilling.rendered = function(){ 
  var test = Session.get('billingNo');
};

//-- template helpers
Template.authorBilling.helpers({
  getYear: function() {
    var year = Session.get('billingYear');
    return year;
  },
  getAuthorData: function() {
    var authorId = Session.get('authorId');
    var billingNo = Meteor.call('addBillingId', function(error, result){
      Session.set('billingNo', result);
      console.log(result);    
    });
    var test = Authors.findOne({_id: authorId});
    console.log(test); 
    return test;   
  }
});

//-- template events
Template.authorBilling.events({
});