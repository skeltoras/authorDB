Entries = new Mongo.Collection('entries');

var Schema = {};

Schema.Entries = new SimpleSchema({
  //@ since v0.8.3
  bookId: {
    type: String,
    label: "bookId"
  },
  entryText: {
    type: String,
    label: "Buchungstext",
    optional: true
  },
  entryNum: {
    type: String,
    label: "Buchungsnummer",
    optional: true
  },
  entryVal: {
    type: String,
    label: "Betrag",
    optional: true
  },
  entryYear: {
    type: String,
    label: "Jahr",
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

Entries.attachSchema(Schema.Entries);