//@since v1.0.2

//-- template onCreated functions
Template.baBoSidebar.onCreated(function () { 
});

//-- template onDestroyed functions
Template.baBoSidebar.onDestroyed(function () {
});

//-- template onRendered functions
Template.baBoSidebar.onRendered(function () {
});

//-- template helpers
Template.baBoSidebar.helpers({ 
});

//-- template events
Template.baBoSidebar.events({ 
  'click a.showSales': function(e){
    e.preventDefault();
    var year = moment().year();
    var bookId = this._id;
    Session.set('year', year);
    Router.go('ba.bo.sales', {_id: bookId});
  },
  //@since v0.8.3
  'click a.showBook': function(e){
    e.preventDefault();
    var bookId = this._id;
    Router.go('ba.bo.show', {_id: bookId});
  },
  'click a.editBook': function(e){
    e.preventDefault();
    var bookId = this._id;
    Router.go('ba.bo.edit', {_id: bookId});
  },
  'click a.showStock': function(e){
    e.preventDefault();
    var bookId = this._id;
    Router.go('ba.bo.stock', {_id: bookId});
  } 
});