//-- template created functions
Template.salesUpload.created = function(){ 
};

//-- template destroyed functions
Template.salesUpload.destroyed = function(){
};

//-- template rendered functions
Template.salesUpload.rendered = function(){
};

//-- template helpers
Template.salesUpload.helpers({
  listFirstQuarter: function(){    
    var count = 0;
    var i = 1;
    var months = [];
    var monthItem = [];
    while (count < 3) months.push(moment().month(count++).format("MMMM"));
    months.forEach(function(month){
      monthItem += ['<div class="checkbox"><label><input id="' + i + '" name="months" value="' + i + '" type="checkbox">' + month + '</label></div>'];
      i++; 
    }); 
    return monthItem;
  },
  listSecondQuarter: function(){    
    var count = 3;
    var i = 4;
    var months = [];
    var monthItem = [];
    while (count < 6) months.push(moment().month(count++).format("MMMM"));
    months.forEach(function(month){
      monthItem += ['<div class="checkbox"><label><input id="' + i + '" name="months" value="' + i + '" type="checkbox">' + month + '</label></div>'];
      i++; 
    }); 
    return monthItem;
  },
  listThirdQuarter: function(){    
    var count = 6;
    var i = 7;
    var months = [];
    var monthItem = [];
    while (count < 9) months.push(moment().month(count++).format("MMMM"));
    months.forEach(function(month){
      monthItem += ['<div class="checkbox"><label><input id="' + i + '" name="months" value="' + i + '" type="checkbox">' + month + '</label></div>'];
      i++; 
    }); 
    return monthItem;
  },
  listFourthQuarter: function(){    
    var count = 9;
    var i = 10;
    var months = [];
    var monthItem = [];
    while (count < 12) months.push(moment().month(count++).format("MMMM"));
    months.forEach(function(month){
      monthItem += ['<div class="checkbox"><label><input id="' + i + '" name="months" value="' + i + '" type="checkbox">' + month + '</label></div>'];
      i++; 
    }); 
    return monthItem;
  }
});

//-- template events
Template.salesUpload.events({
  'change #brockhausFiles': function(e, tpl){
    e.preventDefault();
    var input = tpl.find('#brockhausFiles').files;
    var files = input.files;
    var file = input[0];
    //var test = e.find('#fileBrockhaus');
    //console.log(test);
    console.log(file);  
  },
  'submit form': function(event, template){
    event.preventDefault();
    var input = template.find('input[type=file]').files;
    var file = input[0];
    
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event){
      var csv = event.target.result;
      var data = $.csv.toObjects(csv);
      var i;
      for (i = 0; i < data.length; ++i) {
        Meteor.call('insertUpload', data[i], function(error, result){
          if (error)
          return throwError(error.reason);
        });
      }
    }
  }
});