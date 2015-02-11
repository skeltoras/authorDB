Conditions = new Mongo.Collection('Conditions');

var Schema = {};

Schema.Conditions = new SimpleSchema({
  //@since v0.7.7
  affiliateData: {          
    type: [Object],
    optional: true,
    minCount: 1,
  },
  'affiliateData.$.authorId': {
    type: String,
    optional: true
  },
  'affiliateData.$.authorName': {
    type: String,
    optional: true
  },
  bookData: {          
    type: [Object],
    optional: true,
    minCount: 1,
  },
  'bookData.$.bookId': {
    type: String,
    optional: true
  },
  'bookData.$.bookTitle': {
    type: String,
    optional: true
  },
  feeInPercent: {
    type: String,
    label: "Honorar in %",
    optional: true
  },
  feeIsGross: {
    type: Boolean,
    label: "vom Brutto-LP"
  },
  feeIsNet: {
    type: Boolean,
    label: "vom Netto-LP"
  },
  feeIsOther: {
    type: Boolean,
    label: "Sonstiges, siehe Notizen"
  },
  feeFixed: {
    type: String,
    label: "Fixhonorar",
    optional: true,
    max: 255
  },
  feeBegin: {
    type: String,
    label: "Honorar ab Ex.",
    optional: true,
    max: 255
  },
  feeEbookPercent: {
    type: String,
    label: "Honorar E-Book in %",
    optional: true,
    max: 255
  },
  feeLicencePercent: {
    type: String,
    label: "Honorar Linzenzerlöse in %",
    optional: true,
    max: 255
  },
  freeCopiesFirst: {
    type: String,
    label: "Freiexemplare 1. Auflage",
    optional: true,
    max: 255
  },
  freeCopiesNext: {
    type: String,
    label: "Freiexemplare weitere Auflagen",
    optional: true,
    max: 255
  },
  conditionNotes: {
    type: String,
    label: "Notizen",
    max: 1000,
    optional: true,
    autoform: {
      rows: 3
    }
  },
  changes: {
    type: [Object],
    optional: true,
  },
  'changes.$.date': {
    type: Date,
    optional: true
  },
  'changes.$.content': {
    type: String,
    optional: true
  },
  submitted: {
    type: Date
  },
  updatedAt: {
    type: Date,
    optional: true
  },
  //@since v0.8.2
  isBilling: {
    type: Boolean,
    label: "wird abgerechnet"
  },
  isList: {
    type: Boolean,
    label: "wird ausgegeben"
  },
  isIgnore: {
    type: Boolean,
    label: "wird nicht bewertet"
  }
});

Conditions.attachSchema(Schema.Conditions);