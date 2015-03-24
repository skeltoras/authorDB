Meteor.publish('getBillingsList', function() {
  return Billings.find();
});