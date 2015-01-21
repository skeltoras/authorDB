//-- template created functions
Template.bookShowSidebar.created = function(){ 
};

//-- template destroyed functions
Template.bookShowSidebar.destroyed = function(){
};

//-- template rendered functions
Template.bookShowSidebar.rendered = function(){
};

//-- template helpers
Template.bookShowSidebar.helpers({
});

//-- template events
Template.bookShowSidebar.events({  
  'click a.showStats': function(e){
    e.preventDefault();
    var year = moment().year();
    Session.set('bookId', this._id);
    Session.set('year', year);
    Router.go('stats.show', {_id: this._id});
  }
});