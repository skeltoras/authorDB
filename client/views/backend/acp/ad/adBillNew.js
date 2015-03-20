//@since v0.11.0

//-- template onCreated functions
Template.adBillNew.onCreated(function () {
  var self = this;
  var authorId = Session.get('authorId');
  var year = Number(Session.get('billingYear'));         
  
  self.autorun(function () {
    self.subscribe('checkBillingsExist', authorId, year);
    self.subscribe('singleAddress', authorId);
    self.subscribe('getLastBillingsNo');
    self.subscribe('getBillData');
    self.subscribe('getBillingBookList', authorId);
  });
  
  Session.set('getSum', false);
  Session.set('getBillData', false);
  Session.set('setBillingBank', true);
  Session.set('setVatNotice', true);
  Session.set('vatBool', false);
  Session.set('modalAddBilling', false);
  Session.set('getBillingTextTemp', 'Noch kein Text vorhanden');

  Meteor.call('getSingleBillingData', authorId, year, function(error, result){
    Session.set('getSum', result);
    var getBillData = BillingsTemp.find().fetch();
    Session.set('getBillData', getBillData);     
  });  
});

//-- template onDestroyed functions
Template.adBillNew.onDestroyed(function () {
});

//-- template onRendered functions
Template.adBillNew.onRendered(function () {
  Session.get('getSum');
  Session.get('getBillData');
});

//-- template helpers
Template.adBillNew.helpers({
  checkBilling: function() {
    if(Counts.get('checkBillingsCount')>0) {
      authorId = this._id;
      var year = Session.get('billingYear');
      Router.go('acp.ad.bill.show', {_id: authorId, year: year});  
    }  
  },
  getYear: function() {
    var year = Session.get('billingYear');
    return year;
  },
  getBillingNo: function() {
    var billingNo = Billings.findOne().billingNo;
    //var billingNo = "0000"; // debug
    var base = "0000";
    if(billingNo){      
    } else {
      billingNo = "0000"; 
    }
    //var billingNo = Session.get('billingNo');
    billingNo = Number(billingNo) + 1;
    console.log(billingNo);
    //billingNo = billingNo.toString();   
    billingNo = billingNo ? base.substr(0, 4 - Math.ceil(billingNo / 10)) + billingNo : base;
    console.log(billingNo);
    return billingNo;
  },
  getDate: function() {      
    return moment().format('DD.MM.YYYY');
  },
  getBookData: function() {
    return Session.get('getBillData'); 
  },
  getSum: function() {
    return Session.get('getSum'); 
  },
  getBillingTextTemp: function() {
    return Session.get('getBillingTextTemp');   
  },
  getBankData: function() {
    return Session.get('setBillingBank');
  },
  getVatNotice: function() {
    return Session.get('setVatNotice');
  },
  //@since v0.9.5
  getVat: function() {
    var vatBool = this.vatBool;
    if(vatBool){
      var sum = Session.get('getSum');
      var vat = this.vat;
      var vatVal = this.vat + '%';
      var sumFee = sum.sumFee;  
      sumFee = sumFee.replace(',','.');
      sumFee = Number(sumFee);      
      vat = vat.replace(',','.');
      vat = Number(vat);
      
      if(vat == 19) {
        vat = 1.19;
      } else if(vat == 7) {
        vat = 1.07;  
      } else {
        vat = 1;
      }
            
      var sumFeeNew = sumFee * vat;
      var sumVat = sumFeeNew - sumFee;
      sumFeeNew = sumFeeNew.toFixed(2);
      sumFeeNew = sumFeeNew.toString();
      sumFeeNew = sumFeeNew.replace('.',',');
      sumVat = sumVat.toFixed(2);
      sumVat = sumVat.toString();
      sumVat = sumVat.replace('.',',');
      
      var sumNew = {
        sumUnits: sum.sumUnits,
        sumFee: sum.sumFee,
        vatVal: vatVal,
        sumVat: sumVat,
        sumFeeGross: sumFeeNew
      }
      Session.set('getSum', sumNew);
      Session.set('vatBool', true);
      Session.set('setVatNotice', false);
    }
  },
  checkVat: function() {
    return Session.get('vatBool'); 
  }
});

//-- template events
Template.adBillNew.events({
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
    
    // defaults
    var addressData = []
    var vatBool = false;
    var vatInfo = '';
    var bankTransferText = '';
    var vatNotice = '';
    var billing = [];
    var year = Session.get('billingYear');
    
    // address
    var author = tpl.data;
    
    var authorId = author._id;
    addressData = {
      name: author.firstName + ' ' + author.lastName,
      company: author.company,
      co: author.co,
      street: author.street,
      additional: author.additional,
      city: author.plz + ' ' + author.city,
      country: author.country 
    }
    var salutation = author.salutation; 
    
    // date / No 
    var billingNo = Session.get('billingNo');    
    var base = "000";
    billingNo = billingNo ? base.substr(0, 3 - Math.ceil(billingNo / 10)) + billingNo : base;
    billingNo = year + '-' + billingNo;
    var billingDate = moment().format('DD.MM.YYYY');
    
    // books
    var billingData = BillingsTemp.find().fetch();
    var sum = Session.get('getSum');
    var sumUnits = sum.sumUnits;
    var sumFee = sum.sumFee;
    var sumFeeGross = sum.sumFeeGross;
    
    // payment terms 
    var vatBool = author.vatBool;
    var vatNo = author.vatNo;
    if(vatBool) {
      vatInfo = 'Da Sie umsatzsteuerpflichtig sind, weisen wir den Betrag inklusive USt. aus.<br> Ihre Steuernummer: <strong>' + vatNo + '</strong>';
    }
    
    if($(e.target).find('[name=bankTransfer]').is(':checked')) {
      if(author.iban){
        bankTransferText = '[x] Wir überweisen die oben genannte Summe auf:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBAN: <strong>' + author.iban + '</strong> / BIC: <strong>' + author.bic + '</strong> / Bank: <strong>' + author.bank + '</strong>';
      } else{
        bankTransferText = 'Bitte teilen Sie uns Ihre Bankverbindung für die Überweisung mit:<br>Info3 Verlag, Autorenverwaltung, Simon Knipping<br>simon.knipping@info3.de, Fax: 069-58 46 16, Postadresse: Kirchgartenstr. 1, 60439 Frankfurt.';
      }        
    }
    
    // additional payment text
    var billingText = $(e.target).find('[name=addBillingText]').val();

    // vat notice
    if($(e.target).find('[name=vatNotice]').is(':checked')) {
      vatNotice = 'Falls Sie umsatzsteuerpflichtig sind, teilen Sie uns bitte ihre Steuernummer und den MwSt.-Satz mit, dann können wir die Steuer berücksichtigen.';   
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
      sumFeeGross: sumFeeGross,
      vatBool: vatBool,
      vatInfo: vatInfo,
      bankTransferText: bankTransferText,
      billingText: billingText,
      vatNotice: vatNotice,
      year: year
    }

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