Meteor.publish('salesPerYear', function(bookId) {
  self = this;
  SalesPerYear.remove({});
    var firstYear = '2013';
    var currYear = moment().year();
    var years = currYear - firstYear;
    var year = '';
    
    var pipeBH = [];
    var resultBH = '';
    var unitsBH = [];
    var volumesBH = [];
    var monthBH = [];
    var dataBH = [];    
    
    for(i=0; i<=years; i++){
      year = currYear - i; 
      // Set data  
      pipeBH = [
        { $match : { bookId: bookId, salesYear: year } },
        { $group : { _id : { sale: { "salesMonth": "$salesMonth" } }, 
            units: { $sum: "$salesUnits" }, volumes: { $sum: "$salesVolumes" }, month: { $first: "$salesMonth" }, year: { $first: "$salesYear" }, seller: { $first: "$salesSeller" }   
          }
        },
        { $sort : { month: 1 } }
      ];
      resultBH = Sales.aggregate(pipeBH);
      
      console.log(resultBH);
      
      if(resultBH != ''){
        resultBH.forEach(function(data){
          unitsBH.push(data.units);
          volumesBH.push(data.volumes);
          monthBH.push(data.month);
        });
        dataBH = {
          units: unitsBH, 
          volumes: volumesBH, 
          month: monthBH, 
          year: year
        };      
        SalesPerYear.insert(dataBH); 
    }
  }
});