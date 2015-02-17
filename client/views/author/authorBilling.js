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
  /*
  getBillingText: function() {
    var billingsText = [];
    var bookList = Session.get('getBillingData');
    var bookUnits = 0;
    var bookFee = 0;
    bookList.forEach(function(book){
      if(book.billingsSettings==1){
        book.billingsData.forEach(function(data){
          bookUnits = Number(bookUnits) + Number(data.units);
          bookFee = Number(bookFee) + Number(data.fee.replace( /,/,"." ));  
        });
        bookFee = bookFee.toFixed(2);
        bookFee = bookFee.toString();
        bookFee = bookFee.replace(".", ",");         
        billingsText.push({text: 'Der Betrag von ' + bookFee + ' € für ' + book.bookTitle + ' wird an ___ überwiesen'});          
      } else if(book.billingsSettings==2) {
        billingsText.push({text: 'Für ' + book.bookTitle + ' wird kein Honorar ausgezahlt.'});
      }
    });
    Session.set('billingsText', billingsText);
    console.log(billingsText);
    return billingsText;  
  }
  */
});

//-- template events
Template.authorBilling.events({
  //@since v0.8.5
  'click .addBilling': function(e) {
    e.preventDefault();
    var authorId = e.currentTarget.id;
    Session.set('authorId', authorId);
    Session.set('modalAddBilling', true); 
    $('#addBilling').modal('toggle');
  },
});