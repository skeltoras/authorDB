Meteor.methods({
  salesPerYear: function(bookId) {    
    SalesPerYear.remove({});
    //console.log('bookId: ' + bookId); //debug server
    
    var firstYear = '2013';
    var currYear = moment().year();
    var years = currYear - firstYear;
    var year = '';
    
    var pipeline = [];
    var result = '';
    var stats = [];
    
    for(i=0; i<=years; i++){
      year = currYear - i; 
      // Set data  
      pipeline = [
        { $match : { bookId: bookId, salesYear: year } },
        { $group : { _id : { sale: { "salesMonth": "$salesMonth" } }, 
            bookId: { $sum: "$bookId" },
            unit: { $sum: "$salesUnits" }, 
            volume: { $sum: "$salesVolumes" },
            volumeNet: { $sum: "$salesVolumesNet" }, 
            month: { $first: "$salesMonth" }, 
            year: { $first: "$salesYear" }   
          }
        },
        { $sort : { month: 1 } }
      ];
      //console.log('--- Pipeline ---'); //debug server
      //console.log(pipeline); //debug server
      
      result = Sales.aggregate(pipeline);
      
      //console.log('--- Result ---'); //debug server
      //console.log(result); //debug server
      
      if(result != ''){
        result.forEach(function(data){
          //var month = data.month;
          //for(cnt=0;cnt<month.length;cnt++){
        	 stats.push({month: data.month, units: data.unit, volumes: data.volume, volumesNet: data.volumeNet});
        	//}
          //console.log(stats);
        });
        sale = {
          bookId: bookId,
          values: stats,
          year: year
        };      
        SalesPerYear.insert(sale); 
      }
    }
  }
});