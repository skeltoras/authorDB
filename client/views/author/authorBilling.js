//-- template created functions
Template.authorBilling.created = function(){
  Session.set('billingNo', false);
  Session.set('hasBillingData', false);
  Session.set('getBillingData', false);
  var authorId = Session.get('authorId');
  var year = Number(Session.get('billingYear'));
  Meteor.call('getSingleBillingData', authorId, year, function(error, result){
    Session.set('hasBillingData', result);
    var getBillingData = Billings.find().fetch();
    Session.set('getBillingData', getBillingData);     
  });
};

//-- template destroyed functions
Template.authorBilling.destroyed = function(){
};

//-- template rendered functions
Template.authorBilling.rendered = function(){ 
  Session.get('billingNo');
  Session.get('hasBillingData');
  Session.get('getBillingData'); 
  Meteor.call('addBillingId', function(error, result){
    Session.set('billingNo', result);    
  });
};

//-- template helpers
Template.authorBilling.helpers({
  getYear: function() {
    var year = Session.get('billingYear');
    return year;
  },
  getAuthorData: function() {
    var authorId = Session.get('authorId');    
    return Authors.findOne({_id: authorId});   
  },
  getBillingNo: function() {      
    return Session.get('billingNo');
  },
  getDate: function() {      
    return moment().format('DD.MM.YYYY');
  },
  getBookData: function() {
    return Session.get('getBillingData'); 
  },
  getSum: function() {
    return Session.get('hasBillingData'); 
  }
});

//-- template events
Template.authorBilling.events({
});