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
    var pipeSum = [];
    var resultSum = '';
    var stats = [];
    var statsSum = [];
    
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
      
      // Set data  
      pipeSum = [
        { $match : { bookId: bookId, salesYear: year } },
        { $group : { _id : { sale: { "salesYear": "$salesYear" } }, 
            bookId: { $sum: "$bookId" },
            unit: { $sum: "$salesUnits" }, 
            volume: { $sum: "$salesVolumes" },
            volumeNet: { $sum: "$salesVolumesNet" }, 
            year: { $first: "$salesYear" }   
          }
        },
        { $sort : { month: 1 } }
      ];
      //console.log('--- Pipeline ---'); //debug server
      //console.log(pipeline); //debug server      
      resultSum = Sales.aggregate(pipeSum);
      
      //console.log('--- ResultSum ---'); //debug server
      //console.log(resultSum); //debug server
      
      if(result != ''){
        result.forEach(function(data){
          //var month = data.month;
          //for(cnt=0;cnt<month.length;cnt++){
        	 stats.push({month: data.month, units: data.unit, volumes: data.volume, volumesNet: data.volumeNet});
        	//}
          //console.log(stats);
        });
        resultSum.forEach(function(data){
          //var month = data.month;
          //for(cnt=0;cnt<month.length;cnt++){
        	 statsSum.push({units: data.unit, volumes: data.volume, volumesNet: data.volumeNet});
        	//}
          //console.log(stats);
        });
        sale = {
          bookId: bookId,
          values: stats,
          sum: statsSum, 
          year: year
        };      
        SalesPerYear.insert(sale); 
      }
    }
  }
});