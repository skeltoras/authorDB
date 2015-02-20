Meteor.methods({
  //@since v0.9.5
  'addBillingId': function() {
    var billingNo = incrementCounter('billingNo');
    return billingNo;
  }
})