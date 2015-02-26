Authors = new Mongo.Collection('authors');

var Schema = {};

Schema.Author = new SimpleSchema({
  title: {
    type: String,
    label: "Anrede",
    optional: true
  },
  graduate: {
    type: String,
    label: "Titel",
    optional: true
  },
  firstName: {
    type: String,
    label: "Vorname",
    optional: true
  },
  lastName: {
    type: String,
    label: "Nachname",
    optional: true
  },
  company: {
    type: String,
    label: "Firma",
    optional: true
  },
  street: {
    type: String,
    label: "Strasse",
    optional: true
  },
  additional: {
    type: String,
    label: "Zusatz",
    optional: true
  },
  plz: {
    type: String,
    label: "PLZ",
    optional: true
  },
  city: {
    type: String,
    label: "Ort",
    optional: true
  },
  country: {
    type: String,
    label: "Land",
    optional: true
  },
  telephone: {
    type: String,
    label: "Telefon",
    optional: true
  },
  telefax: {
    type: String,
    label: "Fax",
    optional: true
  },
  mobil: {
    type: String,
    label: "Mobilnummer",
    optional: true
  },
  emailPriv: {
    type: String,
    label: "E-Mail privat",
    optional: true,
    regEx: SimpleSchema.RegEx.Email
  },
  emailOff: {
    type: String,
    label: "E-Mail Buero",
    optional: true,
    regEx: SimpleSchema.RegEx.Email
  },
  url: {
    type: String,
    label: "Website",
    optional: true
  },
  salutation: {
    type: String,
    label: "Briefanrede",
    optional: true
  },
  vatBool: {
    type: Boolean,
    label: "USt. vorhanden"
  },
  vatNo: {
    type: String,
    label: "USt. Nr.",
    optional: true
  },
  iban: {
    type: String,
    label: "IBAN",
    optional: true
  },
  bic: {
    type: String,
    label: "BIC",
    optional: true
  },
  bank: {
    type: String,
    label: "Geldinstitut",
    optional: true
  },
  notes: {
    type: String,
    label: "Notizen",
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
    type: Date,
    optional: true
  },
  updatedAt: {
    type: Date,
    optional: true
  },
  //@since v0.8.2
  isCompany: {
    type: Boolean,
    label: "Ist Firma"
  },
  //@since v0.8.5
  co: {
    type: String,
    label: "c/o",
    optional: true
  },
  //@since v0.9.5
  vat: {
    type: String,
    label: "USt. Satz",
    optional: true
  },
  //@since v0.10.0
  displayName: {
    type: String,
    label: "Anzeigename",
    optional: true
  }
});

Authors.attachSchema(Schema.Author);

Authors.initEasySearch(['firstName', 'lastName', 'company', 'displayName', 'emailPriv', 'emailOff']);