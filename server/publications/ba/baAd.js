Meteor.publish('ba_getAllAuthors', function() {
  return Authors.find({}, {sort: {isAutor: -1, lastName: 1, displayName: 1}});
});

Meteor.publish('ba_getSingleAddress', function(authorId) {
  return Authors.find({_id: authorId});
});

Meteor.publish('ba_getSingleAddressAffiliate', function(authorId) {
  return Books.find({'affiliateData.authorId': authorId});
});

Meteor.publish('ba_getSingleAddressAuthor', function(authorId) {
  return Books.find({'authorData.authorId': authorId});
});

Meteor.publish('checkBillingsExist', function(authorId, year) {
  Counts.publish(this, 'checkBillingsCount', Billings.find({authorId: authorId, year: year}));
});

Meteor.publish('getLastBillingsNo', function() {
  return Billings.find({}, {sort: {submitted: -1}, limit: 1, fields: {billingNo: 1, submitted: 1}});
});

Meteor.publish('getBillData', function() {
  return BillingsTemp.find();
});

Meteor.publish('getBillingBookList', function(authorId) {
  return Books.find({'affiliateData.authorId': authorId});
});

Meteor.publish('singleBilling', function(authorId, year) {
  return Billings.find({authorId: authorId, year: year});
});
