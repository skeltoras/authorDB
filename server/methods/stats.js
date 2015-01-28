Meteor.methods({
  newSale: function(sale) {
    Sales.insert(sale);
  }, 
  bookGetAllSales: function(bookId) {
    Stats.remove({});
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
    
    var pipeI3 = [];
    var resultI3 = '';
    var unitsI3 = [];
    var volumesI3 = [];
    var monthI3 = [];
    var dataI3 = [];
    
    var pipeAVA = [];
    var resultAVA = '';
    var unitsAVA = [];
    var volumesAVA = [];
    var monthAVA = [];
    var dataAVA = [];
    
    var pipeSum = [];
    var resultSum = '';
    var unitsSum = [];
    var volumesSum = [];
    var monthSum = [];
    var dataSum = [];
    
    for(i=0; i<=years; i++){
      year = currYear - i; 
      // Set Brockhaus data  
      pipeBH = [
        { $match : { bookId: bookId, salesSeller: 'Brockhaus', salesYear: year } },
        { $group : { _id : { sale: { "salesMonth": "$salesMonth" } }, 
            units: { $sum: "$salesUnits" }, volumes: { $sum: "$salesVolumes" }, month: { $first: "$salesMonth" }, year: { $first: "$salesYear" }, seller: { $first: "$salesSeller" }   
          }
        },
        { $sort : { month: 1 } }
      ];
      resultBH = Sales.aggregate(pipeBH);
      
      if(resultBH != ''){
        unitsBH.push('Brockhaus');
        volumesBH.push('Brockhaus');
        resultBH.forEach(function(data){
          unitsBH.push(data.units);
          volumesBH.push(data.volumes);
          monthBH.push(data.month);
        });
        dataBH = {
          seller: 'Brockhaus',
          units: unitsBH, 
          volumes: volumesBH, 
          month: monthBH, 
          year: year
        };      
        Stats.insert(dataBH); 
      }
    
      // Set Info3 data
      pipeI3 = [
        { $match : { bookId: bookId, salesSeller: 'Info3', salesYear: year } },
        { $group : { _id : { sale: { "salesMonth": "$salesMonth" } }, 
            units: { $sum: "$salesUnits" }, volumes: { $sum: "$salesVolumes" }, month: { $first: "$salesMonth" }, year: { $first: "$salesYear" }, seller: { $first: "$salesSeller" }   
          }
        },
        { $sort : { month: 1 } }
      ];
      resultI3 = Sales.aggregate(pipeI3);
    
      if(resultI3 != ''){
        unitsI3.push('Info3');
        volumesI3.push('Info3');
        resultI3.forEach(function(data){
          unitsI3.push(data.units);
          volumesI3.push(data.volumes);
          monthI3.push(data.month);
        });
        dataI3 = {
          seller: 'Info3',
          units: unitsI3, 
          volumes: volumesI3, 
          month: monthI3, 
          year: year
        };      
        Stats.insert(dataI3);
      }
    
      // Set AVA data
      pipeAVA = [
        { $match : { bookId: bookId, salesSeller: 'AVA', salesYear: year } },
        { $group : { _id : { sale: { "salesMonth": "$salesMonth" } }, 
            units: { $sum: "$salesUnits" }, volumes: { $sum: "$salesVolumes" }, month: { $first: "$salesMonth" }, year: { $first: "$salesYear" }, seller: { $first: "$salesSeller" }   
          }
        },
        { $sort : { month: 1 } }
      ];
      resultAVA = Sales.aggregate(pipeAVA);
    
      if(resultAVA != ''){
        unitsAVA.push('AVA');
        volumesAVA.push('AVA');
        resultAVA.forEach(function(data){
          unitsAVA.push(data.units);
          volumesAVA.push(data.volumes);
          monthAVA.push(data.month);
        });
        dataAVA = {
          seller: 'AVA',
          units: unitsAVA, 
          volumes: volumesAVA, 
          month: monthAVA, 
          year: year
        };      
        Stats.insert(dataAVA);
      }
      
      // Set Sum data
      pipeSum = [
        { $match : { bookId: bookId, salesYear: year } },
        { $group : { _id : { sale: { "salesMonth": "$salesMonth" } }, 
            units: { $sum: "$salesUnits" }, volumes: { $sum: "$salesVolumes" }, month: { $first: "$salesMonth" }, year: { $first: "$salesYear" }, seller: { $first: "$salesSeller" }   
          }
        },
        { $sort : { month: 1 } }
      ];
      resultSum = Sales.aggregate(pipeSum);
      
      if(resultSum != ''){
        unitsSum.push('Summe');
        volumesSum.push('Summe');
        resultSum.forEach(function(data){
          unitsSum.push(data.units);
          volumesSum.push(data.volumes);
          monthSum.push(data.month);
        });
        dataSum = {
          seller: 'Summe',
          units: unitsSum, 
          volumes: volumesSum, 
          month: monthSum, 
          year: year
        };      
        Stats.insert(dataSum);
      }
    }
  }
});