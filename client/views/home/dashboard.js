//-- template created functions
Template.dashboard.created = function(){
};

//-- template destroyed functions
Template.dashboard.destroyed = function(){
};

//-- template rendered functions
Template.dashboard.rendered = function(){ 
};

//-- template helpers
Template.dashboard.helpers({
});

//-- template helpers
Template.dashboardAdmin.helpers({
  //@since 0.9.0
  getBooks: function(){
    return Books.find().count();
  },
  getAuthors: function() {
    return Authors.find().count();
  },
  //@since 0.9.2
  getSalesI3: function(){
    var sum = 0;
    Sales.find({salesSeller: 'Info3', salesYear: 2014}).map(function(doc){
      sum += doc.salesUnits;
    });
    return sum;
  },
  getSalesLibreka: function(){
    var sum = 0;
    Sales.find({salesSeller: 'Libreka', salesYear: 2014}).map(function(doc){
      sum += doc.salesUnits;
    });
    return sum;
  },
  getSalesBH: function(){
    var sum = 0;
    Sales.find({salesSeller: 'Brockhaus', salesYear: 2014}).map(function(doc){
      sum += doc.salesUnits;
    });
    return sum;
  },
  getSalesAVA: function(){
    var sum = 0;
    Sales.find({salesSeller: 'AVA', salesYear: 2014}).map(function(doc){
      sum += doc.salesUnits;
    });
    return sum;
  },
});

//-- template events
Template.dashboard.events({
});