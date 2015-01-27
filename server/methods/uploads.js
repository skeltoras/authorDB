Meteor.methods({
  insertBookUpload: function(data) {
      
    var book = {
      bookISBN: data.ISBN13,
      bookISBN10: data.ISBN10,
      bookEAN: data.EAN13,
      bookArtNrI3: data.BestNr,
      bookRealAuthor: data.Autoren,
      bookRealEditor: data.Herausgeber,
      bookTitle: data.Titel,
      bookSubtitle: data.Untertitel,
      bookType: data.Produktform + ' | ' + data.Einband,
      bookHeigh: data.Produkthöhe,
      bookWidth: data.Produktbreite,
      bookWeight: data.Produktgewicht,
      bookStatus: data.Lieferbarkeit,
      bookPages: data.Seiten,
      bookPrice: data.EUR,
      bookNotes: 'Preis: ' + data.EUR + ', Auflage: ' + data.Auflagennr + ' ' + data.Auflagentyp + ' ' + data.Auflagentext + ' Erscheinungsdatum: ' + data.Erscheinungsdatum,
      changes: [{date: new Date().getTime(), content: 'Buch importiert'}],
      submitted: new Date().getTime()
    };
    
    //console.log(book);    
    Books.insert(book);
  }
})