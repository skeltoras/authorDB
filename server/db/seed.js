/*
if (Books.find().count() === 0) {
  for (i = 0; i <= 10; i++) {
    author = Fake.user({fields: ['name', 'surname', 'fullname']});
    nextauthor = Fake.user({fields: ['name', 'surname', 'fullname']});
    bookTitle = Fake.word();
    bookSubtitle = Fake.sentence(2);
    bookSeries = Fake.sentence(1);
    bookPrice = Fake.fromArray(['19,95', '12', '24,80', '18', '16,50']);
    bookISBN = Fake.fromArray(['978-3-95779-030-9', '978-3-95779-031-6', '978-3-95779-032-3', '978-3-95779-033-0', '978-3-95779-034-7']);
    bookEAN = Fake.fromArray(['9783957790309', '9783957790316', '9783957790323', '9783957790330', '9783957790347']);
    bookArtNrI3 = Fake.fromArray(['7001', '7002', '7003', '7004', '7005']);
    bookArtNrBH = Fake.fromArray(['000002', '000003', '000008', '000012', '000028']);
    submitted = new Date().getTime();
    
    authorId = Authors.insert({
      title: 'Herr',
      firstName: author.name,
      lastName: author.surname,
      vatBool: false,
      isAutor: true,
      changes: [{date: 'Thu Dec 25 2014 14:47:56 GMT+0100 (Mitteleuropäische Zeit)', content: 'Buch angelegt'}],
      submitted: submitted
    });
    
    author2Id = Authors.insert({
      title: 'Frau',
      firstName: nextauthor.name,
      lastName: nextauthor.surname,
      vatBool: false,
      isAutor: true,
      changes: [{date: 'Thu Dec 25 2014 14:47:56 GMT+0100 (Mitteleuropäische Zeit)', content: 'Buch angelegt'}],
      submitted: submitted        
    });
    
    bookId = Books.insert({
      bookTitle: bookTitle,
      bookSubtitle: bookSubtitle,
      bookSeries: bookSeries,
      authorData: [{authorId: authorId, authorName: author.fullname}, {authorId: author2Id, authorName: nextauthor.fullname}],
      bookPrice: bookPrice, 
      bookISBN: bookISBN,
      bookEAN: bookEAN,
      bookArtNrI3: bookArtNrI3,
      bookArtNrBH: bookArtNrBH,
      changes: [{date: 'Thu Dec 25 2014 14:47:56 GMT+0100 (Mitteleuropäische Zeit)', content: 'Buch angelegt'}],
      submitted: 'Thu Dec 25 2014 14:47:56 GMT+0100 (Mitteleuropäische Zeit)'
    });
    
    month1a = 0;
    for (cnt = 0; cnt < 12; cnt++) {
      month1a++;
      salesUnits = _.random(0, 400);
      salesVolumes = salesUnits + Fake.fromArray([55, 80, 97, 122, 300, 520, 800]);
      salesType = Fake.fromArray(['privat', 'Handel']);
      
      salesId = Sales.insert({
        bookId: bookId,
        salesYear: 2014,
        salesMonth: month1a,
        salesUnits: salesUnits,
        salesVolumes: salesVolumes,
        salesSeller: 'Brockhaus',
        salesType: salesType,
        submitted: submitted
      });
    };
    
    month1b = 0;
    for (cnt = 0; cnt < 1; cnt++) {
      month1b++;
      salesUnits = _.random(0, 400);
      salesVolumes = salesUnits + Fake.fromArray([55, 80, 97, 122, 300, 520, 800]);
      salesType = Fake.fromArray(['privat', 'Handel']);
      
      salesId = Sales.insert({
        bookId: bookId,
        salesYear: 2015,
        salesMonth: month1b,
        salesUnits: salesUnits,
        salesVolumes: salesVolumes,
        salesSeller: 'Brockhaus',
        salesType: salesType,
        submitted: submitted
      });
    };
    
    month1c = 0;
    for (cnt = 0; cnt < 12; cnt++) {
      month1c++;
      salesUnits = _.random(0, 400);
      salesVolumes = salesUnits + Fake.fromArray([55, 80, 97, 122, 300, 520, 800]);
      salesType = Fake.fromArray(['privat', 'Handel']);
      
      salesId = Sales.insert({
        bookId: bookId,
        salesYear: 2013,
        salesMonth: month1c,
        salesUnits: salesUnits,
        salesVolumes: salesVolumes,
        salesSeller: 'Brockhaus',
        salesType: salesType,
        submitted: submitted
      });
    };
    
    month2 = 0;
    for (cnt2 = 0; cnt2 < 12; cnt2++) {
      month2++;
      salesUnits = _.random(0, 300);
      salesVolumes = salesUnits + Fake.fromArray([55, 80, 97, 122, 300, 520]);
      salesType = Fake.fromArray(['privat', 'Handel']);
      
      salesId = Sales.insert({
        bookId: bookId,
        salesYear: 2014,
        salesMonth: month2,
        salesUnits: salesUnits,
        salesVolumes: salesVolumes,
        salesSeller: 'Info3',
        salesType: salesType,
        submitted: submitted
      });
    };
    
    month3 = 0;
    for (cnt3 = 0; cnt3 < 12; cnt3++) {
      month3++;
      salesUnits = _.random(0, 300);
      salesVolumes = salesUnits + Fake.fromArray([55, 80, 97, 122, 300]);
      salesType = Fake.fromArray(['privat', 'Handel']);
      
      salesId = Sales.insert({
        bookId: bookId,
        salesYear: 2014,
        salesMonth: month3,
        salesUnits: salesUnits,
        salesVolumes: salesVolumes,
        salesSeller: 'AVA',
        salesType: salesType,
        submitted: submitted
      });
    };
    
    contractId = Contracts.insert({
      bookTitle: bookTitle,
      bookId: bookId,
      bookSubtitle: bookSubtitle,
      bookSeries: bookSeries,
      authors: [author.fullname, nextauthor.fullname],
      feeIsGross: false,
      feeIsNet: true,
      feeIsOther: false,
      authorReading: true,
      changes: [{date: 'Thu Dec 25 2014 14:47:56 GMT+0100 (Mitteleuropäische Zeit)', content: 'Neuer Vetrag wurde erstellt'}],
      submitted: 'Thu Dec 25 2014 14:47:56 GMT+0100 (Mitteleuropäische Zeit)'
    });
  }
}
*/