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
  }
});

//-- template events
Template.dashboard.events({
});