Authors = new Mongo.Collection('authors');

var Schema = {};

Schema.Author = new SimpleSchema({
  title: {
    type: String,
    label: "Anrede",
    max: 255,
    optional: true
  },
  graduate: {
    type: String,
    label: "Titel",
    max: 255,
    optional: true
  },
  firstName: {
    type: String,
    label: "Vorname",
    max: 255
  },
  lastName: {
    type: String,
    label: "Nachname",
    max: 255
  },
  company: {
    type: String,
    label: "Firma",
    max: 255,
    optional: true
  },
  street: {
    type: String,
    label: "Strasse",
    max: 255,
    optional: true
  },
  additional: {
    type: String,
    label: "Zusatz od. c/o",
    max: 255,
    optional: true
  },
  plz: {
    type: String,
    label: "PLZ",
    max: 255,
    optional: true
  },
  city: {
    type: String,
    label: "Ort",
    max: 255,
    optional: true
  },
  country: {
    type: String,
    label: "Land",
    max: 255,
    optional: true
  },
  telephone: {
    type: String,
    label: "Telefon",
    max: 255,
    optional: true
  },
  telefax: {
    type: String,
    label: "Fax",
    max: 255,
    optional: true
  },
  mobil: {
    type: String,
    label: "Mobilnummer",
    max: 255,
    optional: true
  },
  emailPriv: {
    type: String,
    label: "E-Mail privat",
    max: 255,
    optional: true,
    regEx: SimpleSchema.RegEx.Email
  },
  emailOff: {
    type: String,
    label: "E-Mail Buero",
    max: 255,
    optional: true,
    regEx: SimpleSchema.RegEx.Email
  },
  url: {
    type: String,
    label: "Website",
    max: 255,
    optional: true
  },
  salutation: {
    type: String,
    label: "Briefanrede",
    max: 255,
    optional: true
  },
  fixedFee: {
    type: Number,
    label: "Festhonorar",
    max: 255,
    optional: true
  },
  fixedDiscount: {
    type: Number,
    label: "Festrabatt",
    max: 255,
    optional: true
  },
  vatBool: {
    type: Boolean,
    label: "USt. vorhanden"
  },
  vat: {
    type: String,
    label: "USt.",
    max: 255,
    optional: true
  },
  iban: {
    type: String,
    label: "IBAN",
    max: 255,
    optional: true
  },
  bic: {
    type: String,
    label: "BIC",
    max: 255,
    optional: true
  },
  bank: {
    type: String,
    label: "Geldinstitut",
    max: 255,
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
  isAutor: {
    type: Boolean,
    label: "Ist Autor"
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

Authors.attachSchema(Schema.Author);

Authors.initEasySearch(['firstName', 'lastName']);