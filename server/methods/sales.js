Meteor.methods({
  salesPerYear: function(bookId) {    
    SalesPerYear.remove({});
    
    var firstYear = '2013';
    var currYear = moment().year();
    var years = currYear - firstYear;
    var year = '';
    
    for(i=0; i<=years; i++){
      var pipeline = [];
      var result = '';
      var pipeSum = [];
      var resultSum = '';
      var stats = [];
      var statsSum = [];
      year = currYear - i; 
      // Set data  
      pipeline = [
        { $match : { bookId: bookId, salesYear: year } },
        { $group : { _id : { sale: { "salesMonth": "$salesMonth" } }, 
            bookId: { $first: "$bookId" },
            unit: { $sum: "$salesUnits" }, 
            volume: { $sum: "$salesVolumes" },
            volumeNet: { $sum: "$salesVolumesNet" }, 
            month: { $first: "$salesMonth" }, 
            year: { $first: "$salesYear" }   
          }
        },
        { $sort : { month: 1 } }
      ];     
      result = Sales.aggregate(pipeline);
      
      // Set data  
      pipeSum = [
        { $match : { bookId: bookId, salesYear: year } },
        { $group : { _id : { sale: { "salesYear": "$salesYear" } }, 
            bookId: { $first: "$bookId" },
            unit: { $sum: "$salesUnits" }, 
            volume: { $sum: "$salesVolumes" },
            volumeNet: { $sum: "$salesVolumesNet" }, 
            year: { $first: "$salesYear" }   
          }
        },
        { $sort : { month: 1 } }
      ];    
      resultSum = Sales.aggregate(pipeSum);
      
      if(result != ''){
        result.forEach(function(data){
        	 stats.push({month: data.month, units: data.unit, volumes: data.volume, volumesNet: data.volumeNet});
        });
        resultSum.forEach(function(data){
        	 statsSum.push({units: data.unit, volumes: data.volume, volumesNet: data.volumeNet});
        });
        sale = {
          bookId: bookId,
          values: stats,
          sum: statsSum, 
          year: year
        };      
        var returnSale = SalesPerYear.insert(sale);
      }
    }
  },
  salesOneYear: function(bookId, year) {
    var pipeline = [];
    var result = '';
    var stats = [];
    var statsSum = [];    
    // Set data  
    pipeline = [
      { $match : { bookId: bookId, salesYear: year } },
      { $group : { _id : { sale: { "salesYear": "$salesYear" } },
          unit: { $sum: "$salesUnits" }, 
          volume: { $sum: "$salesVolumes" },
          volumeNet: { $sum: "$salesVolumesNet" },
          bookId: { $first: "$bookId" } 
        }
      },
      { $sort : { bookId: 1 } }
    ];         
    result = Sales.aggregate(pipeline);    
    
    if(result != ''){
      stats.push({units: result.unit, volumes: result.volume, volumesNet: result.volumeNet});
      sale = {
        bookId: bookId,
        values: stats
      };      
      SalesPerYear.insert(sale);
    }
    return SalesPerYear.find().fetch();
  },
  emptySales: function(){
    SalesPerYear.remove({});
  }
});
