Meteor.methods({
  getSingleBillingData: function(authorId, year) {
    var bookList = Conditions.find({'affiliateData.authorId': authorId}).fetch();
    Billings.remove({});
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
      var feeFixed = 0;
      var feeInPercent = 0;
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
      var bookPriceCounting = 0;
      var authorFee = 0;
      
      // get MwStInfo
      if(book.feeIsNet) {
        feeMwSt = true;
      }
      // get fixed fee
      if(book.feeFixed) {
        feeHasFixed = true;
        feeFixed = book.feeFixed;
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
      if(bookInfo.bookPriceMwSt == 1) {
        bookPriceMwSt = 1.19;
      } else if(bookInfo.bookPriceMwSt == 2) {
        bookPriceMwSt = 1.07;  
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
      })     
      
      sumUnits = sumUnits + units;
      
      if(feeMwSt){
        bookPriceCounting = bookPrice / bookPriceMwSt;
        bookPriceCounting = bookPriceCounting.toFixed(2);
      } else {
        bookPriceCounting = bookPrice;
      }
      
      if(bookGroup=='E-Book'){
        authorFee = ((bookPriceCounting * units) * feeEbookPercent) / 100;  
      } else{
        authorFee = ((bookPriceCounting * units) * feeInPercent) / 100; 
      }           
      authorFee = authorFee.toFixed(2);
      sumFee = sumFee + Number(authorFee);
      authorFee = authorFee.toString();
      authorFee = authorFee.replace(".", ",");
      
      billingsData = {
        authorId: authorId,
        bookTitle: bookTitle,
        bookGroup: bookGroup,
        bookISBN: bookISBN,
        units: units,
        authorFee: authorFee
      }
      Billings.insert(billingsData);
    });
    sumFee = sumFee.toFixed(2);
    sumFee = sumFee.toString();
    sumFee = sumFee.replace(".", ",");
    
    sum = {
      sumUnits: sumUnits,
      sumFee: sumFee
    }
    return sum;  
  }
})