Billings = new Mongo.Collection('billings');
//@since 0.8.6
BillingsTemp = new Mongo.Collection('billingstemp');

var Schema = {};

Schema.Billings = new SimpleSchema({
  //@since v0.8.5
  authorId: {
    type: String,
    label: "authorId",
    optional: true
  },
  bookId: {
    type: String,
    label: "bookId",
    optional: true
  },
  bookTitle: {
    type: String,
    label: "bookTitle",
    optional: true
  },
  bookGroup: {
    type: String,
    label: "bookGroup",
    optional: true
  },
  bookISBN: {
    type: String,
    label: "bookISBN",
    optional: true
  },
  billingsSettings: {
    type: Number,
    label: "billingsSettings",
    optional: true
  },
  billingsData: {          
    type: [Object],
    optional: true,
    minCount: 1,
  },
  'billingsData.$.text': {
    type: String,
    optional: true
  },
  'billingsData.$.units': {
    type: String,
    optional: true
  },
  'billingsData.$.fee': {
    type: String,
    optional: true
  },
  submitted: {
    type: Date
  },
  updatedAt: {
    type: Date,
    optional: true
  }
});

Billings.attachSchema(Schema.Billings);
//@since 0.8.6
BillingsTemp.attachSchema(Schema.Billings);