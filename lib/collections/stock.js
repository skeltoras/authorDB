Stock = new Mongo.Collection('stock');

var Schema = {};

Schema.Stock = new SimpleSchema({
  bookId: {
    type: String,
    label: "bookId"
  },
  stockYear: {
    type: Number,
    label: "stockYear"
  },
  stockMonth: {
    type: Number,
    label: "stockMonth"
  },
  stockAB: {
    type: Number,
    label: "stockAB"
  },
  stockEB: {
    type: Number,
    label: "stockEB"
  },
  stockUnits: {
    type: Number,
    label: "stockUnits"
  },
  stockDiff: {
    type: Number,
    label: "stockDiff"
  },
  stockSeller: {
    type: String,
    label: "stockSeller"
  },
  submitted: {
    type: Date
  },
  updatedAt: {
    type: Date,
    optional: true
  }
});

Stock.attachSchema(Schema.Stock);