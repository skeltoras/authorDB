Books = new Mongo.Collection('books');

var Schema = {};

Schema.Books = new SimpleSchema({
  bookISBN10: {
    type: String,
    label: "ISBN10",
    optional: true
  },
  bookISBN: {
    type: String,
    label: "ISBN",
    optional: true
  },
  bookEAN: {
    type: String,
    label: "EAN",
    optional: true
  },
  bookArtNrI3: {
    type: String,
    label: "Artikelnummer",
    optional: true
  },
  bookArtNrBH: {
    type: String,
    label: "ArtNr. Brockhaus",
    optional: true
  },
  bookRealAuthor: {
    type: String,
    label: "Autore (real)",
    optional: true
  },
  bookRealEditor: {
    type: String,
    label: "Herausgeber (real)",
    optional: true
  },   
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
    label: "Verkaufspreis",
    optional: true
  },
  bookType: {
    type: String,
    label: "Einband",
    optional: true
  },
  bookHeigh: {
    type: String,
    label: "Höhe",
    optional: true
  },
  bookWidth: {
    type: String,
    label: "Breite",
    optional: true
  },
  bookWeight: {
    type: String,
    label: "Gewicht",
    optional: true
  },
  bookPublished: {
    type: Date,
    label: "Erscheinungsdatum",
    optional: true
  },
  bookStatus: {
    type: String,
    label: "Lieferbarkeit",
    optional: true
  },
  bookPages: {
    type: String,
    label: "Seiten",
    optional: true
  },
  bookNotes: {
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