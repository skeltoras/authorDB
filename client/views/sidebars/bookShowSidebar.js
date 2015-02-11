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
  'click a.showSales': function(e){
    e.preventDefault();
    var year = moment().year();
    var bookId = Session.get('bookId');
    Session.set('year', year);
    Router.go('sales.show', {_id: bookId});
  },
  //@since v0.8.3
  'click a.showBook': function(e){
    e.preventDefault();
    var bookId = Session.get('bookId');
    Router.go('book.show', {_id: bookId});
  },
  'click a.editBook': function(e){
    e.preventDefault();
    var bookId = Session.get('bookId');
    Router.go('book.edit', {_id: bookId});
  },
  'click a.showStock': function(e){
    e.preventDefault();
    var bookId = Session.get('bookId');
    Router.go('book.stock', {_id: bookId});
  },
});