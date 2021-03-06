Books = new Mongo.Collection('books');

var Schema = {};

Schema.Books = new SimpleSchema({
  //@since 0.3.0
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
  bookPrice: {
    type: String,
    label: "Verkaufspreis",
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
  },
  //@since 0.7.0
  bookISBN10: {
    type: String,
    label: "ISBN10",
    optional: true
  },
  bookType: {
    type: String,
    label: "Einband",
    optional: true
  },
  bookGroup: {
    type: String,
    label: "Produktgruppe",
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
  //@since v0.7.3
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
  //@since v0.7.5
  editionData: {          
    type: [Object],
    optional: true,
    minCount: 1,
  },
  'editionData.$.editionId': {
    type: String,
    optional: true
  },
  'editionData.$.editionNr': {
    type: String,
    optional: true
  },
  'editionData.$.editionText': {
    type: String,
    optional: true
  },
  'editionData.$.editionCount': {
    type: String,
    optional: true
  },
  'editionData.$.releaseDate': {
    type: String,
    optional: true
  },
  //@since 0.8.0
  bookPriceMwSt: {
    type: String,
    label: "MwSt",
    optional: true
  },
  //@since 0.8.0
  bookProductionPrice: {
    type: String,
    label: "Einzelstückpreis",
    optional: true
  },
  //@since v0.11.5
  bookImage: {
    type: String,
    label: "Buchcover",
    optional: true
  }
});

Books.attachSchema(Schema.Books);

Books.initEasySearch(['bookTitle', 'bookISBN', 'bookEAN', 'bookArtNrI3']);