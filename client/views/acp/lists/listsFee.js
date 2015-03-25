//@since v0.11.0

//-- template onCreated functions
Template.listsFee.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe("getBillingsList");
  });  
});

//-- template onDestroyed functions
Template.listsFee.onDestroyed(function () {
});

//-- template onRendered functions
Template.listsFee.onRendered(function () {
});

//-- template helpers
Template.listsFee.helpers({
  // list of all books sorted by submit-date @since 0.1.0
  billings: function() {
    return Billings.find({}, {sort: {billingNo: 1}});
  },
  billingsSum: function() {
    var billings = Billings.find().fetch();
    var total = 0;
    billings.forEach(function(billing){
      var net = billing.sumFee;
      var gross = billing.sumFeeGross;
      
      if(gross){
        gross = gross.replace(',','.');
        gross = Number(gross);
        total += gross;  
      } else if(net) {
        net = net.replace(',','.');
        net = Number(net);
        total += net; 
      }
    });
    total = total.toFixed(2);
    total = total.toString();
    total = total.replace('.',',');
    return total;
  },
  billingsSumNet: function() {
    var billings = Billings.find().fetch();
    var total = 0;
    billings.forEach(function(billing){
      var net = billing.sumFee;
      
      if(net) {
        net = net.replace(',','.');
        net = Number(net);
        total += net; 
      }
    });
    total = total.toFixed(2);
    total = total.toString();
    total = total.replace('.',',');
    return total;
  },
  billingsCount: function() {
    return Billings.find().count();
  }
});

//-- template events
Template.listsFee.events({  
});