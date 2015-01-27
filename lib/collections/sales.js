Sales = new Mongo.Collection('sales');

var Schema = {};

Schema.Sales = new SimpleSchema({
  bookId: {
    type: String,
    label: "bookId"
  },
  salesYear: {
    type: Number,
    label: "salesYear"
  },
  salesMonth: {
    type: Number,
    label: "salesMonth"
  },
  salesUnits: {
    type: Number,
    label: "salesUnits"
  },
  salesVolumesNet: {
    type: Number,
    decimal: true,
    label: "salesVolumesNet"
  },
  salesVolumes: {
    type: Number,
    decimal: true,
    label: "salesVolumes"
  },
  salesSeller: {
    type: String,
    label: "salesSeller"
  },
  salesType: {
    type: String,
    label: "salesType"
  },
  submitted: {
    type: Date
  },
  updatedAt: {
    type: Date,
    optional: true
  }
});

Sales.attachSchema(Schema.Sales);

Sales.allow({
  insert: function(){return true;}
});