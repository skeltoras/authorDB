Books = new Mongo.Collection('books');

var Schema = {};

Schema.Books = new SimpleSchema({
  bookTitle: {
    type: String,
    label: "Buchtitel"
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
  authorData: {
    type: [Object],
    optional: true,
    minCount: 1,
  },
  'authorData.$.authorId': {
    type: String,
    optional: true
  },
  'authorData.$.authorName': {
    type: String,
    optional: true
  },
  bookPrice: {
    type: String,
    label: "Verkaufspreis"
  },
  bookISBN: {
    type: String,
    label: "ISBN"
  },
  bookEAN: {
    type: String,
    label: "EAN"
  },
  bookArtNrI3: {
    type: String,
    label: "Artikelnummer"
  },
  bookArtNrBH: {
    type: String,
    label: "ArtNr. Brockhaus",
    optional: true
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

Books.attachSchema(Schema.Books);

Books.initEasySearch(['bookTitle', 'bookISBN', 'bookEAN', 'bookArtNrI3']);

Books.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;}, // debug
});

Meteor.methods({
  newBook: function (book) {
    Books.insert(book);
  }
})