//-- template created functions
Template.chartUnits.created = function(){     
};

//-- template destroyed functions
Template.chartUnits.destroyed = function(){
  Session.set('x', false);
  Session.set('data', false);
  Session.set('data2', false);
  Meteor.clearTimeout(test);  
};

//-- template rendered functions
Template.chartUnits.rendered = function(){  
var year = Number(Session.get('year'));
    if(year){
      
      console.log(unitsSource);
      i = 0;
      test = Meteor.setInterval(function() {
        if(unitsSource){
          console.log(unitsSource);
          Meteor.clearTimeout(test);
          return unitsSource;  
        }
        console.log('nope ' + i);
        i++; 
      }, 1000);
    }
};

//-- template helpers
Template.chartUnits.helpers({
  getData: function() {
    Session.set('x', ['x', 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']);
    unitsSource = Stats.findOne({seller: 'Brockhaus', year: year}); 
  }
});

//-- template events
Template.chartUnits.events({
});

/**************************************/

//-- template created functions
Template.chartVolumes.created = function(){ 
};

//-- template destroyed functions
Template.chartVolumes.destroyed = function(){
};

//-- template rendered functions
Template.chartVolumes.rendered = function(){  
};

//-- template helpers
Template.chartVolumes.helpers({
});

//-- template events
Template.chartVolumes.events({
});

/**************************************/

//-- template created functions
Template.noData.created = function(){ 
};

//-- template destroyed functions
Template.noData.destroyed = function(){
};

//-- template rendered functions
Template.noData.rendered = function(){  
};

//-- template helpers
Template.noData.helpers({
});

//-- template events
Template.noData.events({
});