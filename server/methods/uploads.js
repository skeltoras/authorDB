Meteor.methods({
  //@since v0.9.3
  insertBookUpload: function(data) {
    var bookTitle = data.Titel;     
    var bookISBN = data.ISBN13;
    
    var bookPrice = data.EUR;
    bookPrice = bookPrice.replace(",", ".");
    bookPrice = Number(bookPrice);
    bookPrice = bookPrice.toFixed(2);
    bookPrice = bookPrice.toString();
    bookPrice = bookPrice.replace(".", ",");
    
    var check = Books.find({bookTitle: bookTitle, bookISBN: bookISBN}).count();
    
    if(check > 0) {
      console.log('Buch ' + bookTitle + ' schon vorhanden'); // server console
    } else {
      var book = {
        bookTitle: bookTitle,
        bookSubtitle: data.Untertitel,
        bookPrice: bookPrice,      
        bookISBN: bookISBN,
        bookISBN10: data.ISBN10,
        bookEAN: data.EAN13,
        bookArtNrI3: data.BestNr,
        bookArtNrBH: data.BestNrBrockhaus,
        changes: [{date: new Date().getTime(), content: 'Buch importiert'}],        
        bookType: data.Produktform + ' | ' + data.Einband,
        bookGroup: data.Produktgruppe,
        bookHeigh: data.Produkthöhe,
        bookWidth: data.Produktbreite,
        bookWeight: data.Produktgewicht,
        bookStatus: data.Lieferbarkeit,
        bookPages: data.Seiten,
        bookNotes: 'Autor: ' + data.Autoren + ', Hg: ' + data.Herausgeber + ', Auflage: ' + data.Auflagennr + ' ' + data.Auflagentyp + ' ' + data.Auflagentext + ', Erscheinungsdatum: ' + data.Erscheinungsdatum,
        bookPriceMwSt: data.MwSt,
        bookProductionPrice: data.Einzelpreis,
        submitted: new Date().getTime(),
        updatedAt: new Date().getTime()      
      };    
      Books.insert(book);
    }
  },
  //@since v0.7.3
  insertAuthorsUpload: function(data) {   
    var firstName = data.Vorname;
    var lastName = data.Name;
    
    var user = Meteor.users.findOne(this.userId);
    var check = Authors.find({firstName: firstName, lastName: lastName}).count();
    
    if(check > 0) {
      console.log('Autor ' + firstName * ' ' + lastName + ' schon vorhanden'); // server console
    } else {    
      var author = {
        title: data.Anrede,
        graduate: data.Titel,
        firstName: data.Vorname,      
        lastName: data.Name,
        emailPriv: data.Mail,
        vatBool: false,
        isAutor: true,
        isCompany: false,
        inFeeList: false,
        inAddressList: true,
        inMarketingList: true,
        inLicenseList: false,      
        changes: [{date: new Date().getTime(), content: 'Kontakt importiert', user: user.profile.nickname}],
        submitted: new Date().getTime(),
        updatedAt: new Date().getTime()
      };  
      Authors.insert(author);
    }
  },  
  //@since v0.6.2
  insertSalesInfo3Upload: function(data) {   
    var checkId = data.ARTNR;    
    var bookId = false;
    bookId = Books.findOne({bookArtNrI3: checkId})._id;
    
    if(bookId){
      var bookPrice = Books.findOne({bookArtNrI3: checkId}).bookPrice;     
      var year = Number(data.Jahr);
      var month = Number(data.Monat);
      var units = Number(data.Absatz);
      var volumesNet = Number(data.Umsatz.replace( /,/,"." ));
      var lp = Number(bookPrice.replace( /,/,"." ));
      var salesVolumes = units * lp;          
      var sale = {
        bookId: bookId,
        salesYear: year,
        salesMonth: month,
        salesUnits: units,
        salesVolumesNet: volumesNet,
        salesVolumes: salesVolumes,
        salesSeller: 'Info3',
        salesType: 'Privat',
        submitted:  new Date().getTime()
      };      
      Sales.insert(sale);
    } else {
      console.log('Buch mit ARTNR ' + checkId + ' nicht vorhanden'); // server console
    }
  },
  //@since v0.6.2
  insertSalesBrockhausUpload: function(data) {    
    var checkId = data.BestNr;    
    var bookId = Books.findOne({bookArtNrBH: checkId})._id;    
    if(bookId){
      var year = Number(data.Jahr);
      var month = Number(data.Monat);
      var units = Number(data.Absatz);
      var volumesNet = Number(data.UmsatzNetto.replace( /,/,"." ));
      var lp = Number(data.LP.replace( /,/,"." ));
      var ab = Number(data.AB);
      var eb = Number(data.EB);          
      var diffReal = ab - eb;
      var diffUnits = units;
      var stockDiff = 0;
      var salesVolumes = units * lp;      
      if(diffReal != diffUnits) {
        stockDiff = diffReal;
      }          
      var sale = {
        bookId: bookId,
        salesYear: year,
        salesMonth: month,
        salesUnits: units,
        salesVolumesNet: volumesNet,
        salesVolumes: salesVolumes,
        salesSeller: 'Brockhaus',
        salesType: 'Handel',
        submitted:  new Date().getTime()
      };      
      var stock = {  
        bookId: bookId,
        stockYear: year,
        stockMonth: month,
        stockAB: ab,
        stockEB: eb,
        stockUnits: diffReal,
        stockDiff: stockDiff,
        stockSeller: 'Brockhaus',
        submitted:  new Date().getTime()
      }
      //console.log(checkId);
      Sales.insert(sale);
      Stock.insert(stock);
    }
  },
  //@since v0.6.2
  insertSalesAVAUpload: function(data) {   
    var checkId = data.ISBN;    
    var bookId = Books.findOne({bookISBN: checkId})._id;
    if(bookId){
      var bookPrice = Books.findOne({bookISBN: checkId}).bookPrice;     
      var year = Number(data.Jahr);
      var month = Number(data.Monat);
      var units = Number(data.Saldo);
      var volumesNet = Number(data.Umsatz.replace( /,/,"." ));
      var lp = Number(bookPrice.replace( /,/,"." ));
      var salesVolumes = units * lp;          
      var sale = {
        bookId: bookId,
        salesYear: year,
        salesMonth: month,
        salesUnits: units,
        salesVolumesNet: volumesNet,
        salesVolumes: salesVolumes,
        salesSeller: 'AVA',
        salesType: 'Handel',
        submitted:  new Date().getTime()
      };      
      Sales.insert(sale);
    }
  },
  //@since v0.8.0
  insertSalesLibrekaUpload: function(data) {   
    var checkId = data.ISBN;    
    var bookId = Books.findOne({bookEAN: checkId})._id;
    if(bookId){
      var bookPrice = Books.findOne({bookEAN: checkId}).bookPrice;     
      var year = Number(data.Jahr);
      var month = Number(data.Monat);
      var units = Number(data.Einheiten);
      var volumesNet = Number(data.Erlös.replace( /,/,"." ));
      var lp = Number(bookPrice.replace( /,/,"." ));
      var salesVolumes = units * lp;          
      var sale = {
        bookId: bookId,
        salesYear: year,
        salesMonth: month,
        salesUnits: units,
        salesVolumesNet: volumesNet,
        salesVolumes: salesVolumes,
        salesSeller: 'Libreka',
        salesType: 'Privat',
        submitted:  new Date().getTime()
      };      
      Sales.insert(sale);
    }
  },
})