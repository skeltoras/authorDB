Meteor.methods({
  getSingleBillingData: function(authorId, year) {
    var bookList = Conditions.find({'affiliateData.authorId': authorId}).fetch();
    BillingsTemp.remove({});
    var sum = {
      sumUnits: 0,
      sumFee: 0
    };
    var sumUnits = 0;
    var sumFee = 0; 
    
    //-- get conditions
    bookList.forEach(function(book){
      //srt vars to default
      var feeMwSt = false;
      var feeHasFixed = false;
      var feeHasFixedEx = false;
      var isBilling = false;
      var isList = false;
      var isIgnore = false;
      var feeFixed = 0;
      var feeInPercent = 0;
      var feePerEx = 0;
      var feeEbookPercent = 0;
      var feeLicencePercent = 0;
      var bookId = '';
      var bookInfo = [];
      var bookPriceMwSt = 0;
      var bookTitle = '';
      var bookGroup = '';
      var bookISBN = '';
      var bookPrice = '';
      var salesInfo = [];
      var units = 0;
      var volumes = 0;
      var bookPriceCounting = 0;
      var authorFee = 0;
      var billingsData = [];
      
      // get MwStInfo
      if(book.feeIsNet) {
        feeMwSt = true;
      }
      // get fixed fee
      if(book.feeFixed) {
        feeHasFixed = true;
        feeFixed = book.feeFixed;
      }      
      // get fixed fee per ex.
      if(book.feePerEx) {
        feeHasFixedEx = true;
        feePerEx = book.feePerEx;
      }
      // get percent fee
      if(book.feeInPercent) {
        feeInPercent = book.feeInPercent;
      }
      // get percent fee for ebook
      if(book.feeEbookPercent) {
        feeEbookPercent = book.feeEbookPercent;
      }
      // get percent fee for licences
      if(book.feeLicencePercent) {
        feeLicencePercent = book.feeLicencePercent;
      } 
      
      //-- get book data     
      bookId = book.bookData[0].bookId;
      bookInfo = Books.findOne({_id: bookId});      
      // get MwSt
      if(bookInfo.bookPriceMwSt == 19) {
        bookPriceMwSt = 1.19;
      } else if(bookInfo.bookPriceMwSt == 7) {
        bookPriceMwSt = 1.07;  
      } else if(bookInfo.bookPriceMwSt == 0) {
        bookPriceMwSt = 1;
      } else {
        bookPriceMwSt = 1.07;
      }
      
      bookTitle = bookInfo.bookTitle;
      bookGroup = bookInfo.bookGroup;
      bookISBN = bookInfo.bookISBN;
      bookPrice = Number(bookInfo.bookPrice.replace( /,/,"." ));
      
      //-- get sales data
      salesInfo = Sales.find({bookId: bookId, salesYear: year}).fetch();
      salesInfo.forEach(function(sale){
        units = units + sale.salesUnits;
        volumes = volumes + sale.salesVolumesNet;  
      })     
      
      if(feeMwSt){
        bookPriceCounting = bookPrice / bookPriceMwSt;
        bookPriceCounting = bookPriceCounting.toFixed(2);
      } else {
        bookPriceCounting = bookPrice;
      }
      
      if(bookGroup=='E-Book'){
        authorFee = ((volumes * units) * feeEbookPercent) / 100;  
      } else if(feeHasFixedEx){
        feePerEx = Number(feePerEx.replace( /,/,"." ));        
        authorFee = units * feePerEx; 
      } else {
        authorFee = ((bookPriceCounting * units) * feeInPercent) / 100; 
      }           
      authorFee = authorFee.toFixed(2);
      sumUnits = sumUnits + units;        
      // get billingSettings
      if(book.isBilling) {
        billingsSettings = 1;
        sumFee = sumFee + Number(authorFee);
        text = 'Verkäufe ' + year;
      } else if(book.isList){
        billingsSettings = 2;
        text = 'Verkäufe ' + year + ' (wird nicht berechnet)';
        authorFee = 0;
      }      
      authorFee = authorFee.toString();
      authorFee = authorFee.replace(".", ",");
      
      billingsData = [{
        text: text,
        units: units,
        fee: authorFee
      }];
          
      billing = {
        authorId: authorId,
        bookId: bookId,
        bookTitle: bookTitle,
        bookGroup: bookGroup,
        bookISBN: bookISBN,
        billingsData: billingsData,
        billingsSettings: billingsSettings,
        submitted: new Date().getTime(),
        updatedAt: new Date().getTime()
      }
      // get MwStInfo
      if(book.isIgnore) {
        isIgnore = true;
      } else {
        BillingsTemp.insert(billing);
      }      
    });
    sumFee = sumFee.toFixed(2);
    sumFee = sumFee.toString();
    sumFee = sumFee.replace(".", ",");
    
    sum = {
      sumUnits: sumUnits,
      sumFee: sumFee
    }
    return sum;  
  },
  updateBillings: function(bookId, billingData) {
    return BillingsTemp.update({bookId: bookId}, {$addToSet: {billingsData: billingData} });
  }
})