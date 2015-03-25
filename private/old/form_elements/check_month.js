//-- template created functions
Template.listMonthList.created = function(){ 
};

//-- template destroyed functions
Template.listMonthList.destroyed = function(){
};

//-- template rendered functions
Template.listMonthList.rendered = function(){
};

//-- template helpers
Template.listMonthList.helpers({
  listMonthList: function(){
    var count = 0;
    var i = 0;
    var months = [];
    var monthItem = [];
    while (count < 12) months.push(moment().month(count++).format("MMMM"));
    months.forEach(function(month){
      monthItem += ['<label for="' + i + '" class="checkbox-inline"><input id="' + i + '" type="checkbox" value="' + i + '" name="decks"/>' + month + '</label>']; 
    }); 
    return monthItem;
  }
});

//-- template events
Template.listMonthList.events({
});