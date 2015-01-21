Contracts = new Mongo.Collection('contracts');

var contractSchema = {};

contractSchema.Contract = new SimpleSchema({
  bookId: {
    type: String,
    optional: true
  },  
  bookTitle: {
    type: String,
    label: "Buchtitel",
    autoform: {
      type: "select",
      options: function () {
        return Books.find().map(function (c) {
          return {label: c.bookTitle, value: c.bookTitle};
        });
      }
    }
  },
  bookSubtitle: {
    type: String,
    label: "Untertitel",
    optional: true
  },
  bookSeries: {
    type: String,
    label: "Reihe",
    optional: true
  },
  authors: {
    type: [String],
    minCount: 1,
    autoform: {
      type: "select2",
      options: function () {
        return Authors.find().map(function (c) {
          return {label: c.firstName + ' ' + c.lastName, value: c.firstName + ' ' + c.lastName};
        });
      }
    }
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
  authorReading: {
    type: Boolean,
    label: "Autorenlesungen"
  },
  notes: {
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
  }
});

Contracts.attachSchema(contractSchema.Contract);

Contracts.initEasySearch(['bookTitle', 'authors']);

Contracts.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;}
});

Meteor.methods({
  newContract: function(contract) {
    Contracts.insert(contract);
  },
  updateContract: function(contract, contractId, changes) {
    if(changes){
      Contracts.update(contractId, {$set: contract, $addToSet: {changes: changes} });
    } else {
      Contracts.update(contractId, {$set: contract});
    }    
  }
})