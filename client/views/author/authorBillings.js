//-- template created functions
Template.authorBillings.created = function(){
  Session.set('billingNo', false);
  Session.set('hasBillingData', false);
  Session.set('getBillingData', false);
  Session.set('setBillingBank', false);
  Session.set('setVatNotice', false);
  Session.set('getBillingTextTemp', 'Noch kein Text vorhanden');
  var authorId = Session.get('authorId');
  var year = Number(Session.get('billingYear'));
  Meteor.call('getSingleBillingData', authorId, year, function(error, result){
    Session.set('hasBillingData', result);
    var getBillingData = BillingsTemp.find().fetch();
    Session.set('getBillingData', getBillingData);     
  });
};

//-- template destroyed functions
Template.authorBillings.destroyed = function(){
};

//-- template rendered functions
Template.authorBillings.rendered = function(){ 
  Session.get('billingNo');
  Session.get('hasBillingData');
  Session.get('getBillingData'); 
  Meteor.call('addBillingId', function(error, result){
    Session.set('billingNo', result);    
  });
};

//-- template helpers
Template.authorBillings.helpers({
  checkBilling: function() {
    var year = Session.get('billingYear');
    var authorId = Session.get('authorId');
    if(Billings.find({authorId: authorId, year: year}).count()>0) {
      Router.go('author.billing', {_id: authorId, year: year});  
    }  
  },
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
  },
  getBillingTextTemp: function() {
    return Session.get('getBillingTextTemp');   
  },
  getBankData: function() {
    return Session.get('setBillingBank');
  },
  getVatNotice: function() {
    return Session.get('setVatNotice');
  }
});

//-- template events
Template.authorBillings.events({
  //@since v0.8.5
  'click .addBilling': function(e) {
    e.preventDefault();
    var authorId = e.currentTarget.id;
    Session.set('authorId', authorId);
    Session.set('modalAddBilling', true); 
    $('#addBilling').modal('toggle');
  },
  //@since v0.9.4
  'click .saveBilling': function(e) {
    e.preventDefault();
    var data = BillingsTemp.find().fetch();
    console.log(data); //debug
  },
  //@since v0.9.4
  'submit #formAddBillingText': function(e, tpl) {
    e.preventDefault();
    var btn = $(e.target).find('input[type=submit]:focus');
    btn = btn[0].name;
    var bankTransferText = '';
    var vatNotice = '';
    var billing = [];
    
    // address
    var authorId = Session.get('authorId');
    var addressData = tpl.data;
    
    // date / No 
    var billingNo = Session.get('billingNo');
    var billingDate = moment().format('DD.MM.YYYY');
    
    // salutation
    var year = Session.get('billingYear');
    var salutation = 'unten aufgeführt die Verkaufszahlen der aufgelisteten Bücher für das Jahr ' + year;
    
    // books
    var billingData = BillingsTemp.find().fetch();
    var sum = Session.get('hasBillingData');
    var sumUnits = sum.sumUnits;
    var sumFee = sum.sumFee;
    
    // payment terms
    if($(e.target).find('[name=bankTransfer]').is(':checked')) {
      if(addressData.iban){
        bankTransferText = '[x] Wir überweisen die oben genannte Summe auf:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBAN: ' + addressData.iban + ' / BIC: ' + addressData.bic + ' / Bank: ' + addressData.bank;
      } else{
        bankTransferText = 'Bitte teilen Sie uns Ihre Bankverbindung für die Überweisung mit:<br>Info3 Verlag, Autorenverwaltung, Simon Knipping<br>simon.knipping@info3.de, Fax: 069-58 46 16, Postadresse: Kirchgartenstr. 1, 60439 Frankfurt.';
      }        
    }
    
    // additional payment text
    var billingText = $(e.target).find('[name=addBillingText]').val();

    // vat notice
    if($(e.target).find('[name=vatNotice]').is(':checked')) {
      vatNotice = 'Der Verlag führt die Künstlersozialabgabe ab und weist darauf hin,<br>dass Autorenhonorare vom Empfänger selbst versteuert werden müssen.';   
    }
    
    billing = {
      authorId: authorId,
      addressData: addressData,
      billingNo: billingNo,  
      billingDate: billingDate,
      salutation: salutation,
      billingData: billingData,
      sumUnits: sumUnits,
      sumFee: sumFee,
      bankTransferText: bankTransferText,
      billingText: billingText,
      vatNotice: vatNotice,
      year: year
    }
    
    console.log(billing); //debug
    
    Meteor.call('saveBilling', billing, function(error, result) {     
      console.log('result:');
      console.log(result);
    });
  },
  'change #addBillingText': function(e) {
    var text = e.currentTarget.value;
    if(text){
      Session.set('getBillingTextTemp', text);
    } else {
      Session.set('getBillingTextTemp', 'Noch kein Text vorhanden');
    }    
  },
  'click #bankTransfer': function(e) {
    var target = e.currentTarget.checked
    if(target) {
      Session.set('setBillingBank', true);  
    } else {
      Session.set('setBillingBank', false);
    }   
  },
  'click #vatNotice': function(e) {
    var target = e.currentTarget.checked
    if(target) {
      Session.set('setVatNotice', true);  
    } else {
      Session.set('setVatNotice', false); 
    }   
  }
});