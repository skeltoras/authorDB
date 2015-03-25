//@since v0.11.0

//-- template onCreated functions
Template.boSidebar.onCreated(function () { 
});

//-- template onDestroyed functions
Template.boSidebar.onDestroyed(function () {
});

//-- template onRendered functions
Template.boSidebar.onRendered(function () {
});

//-- template helpers
Template.boSidebar.helpers({ 
});

//-- template events
Template.boSidebar.events({ 
  'click a.showSales': function(e){
    e.preventDefault();
    var year = moment().year();
    var bookId = this._id;
    Session.set('year', year);
    Router.go('acp.bo.sales', {_id: bookId});
  },
  //@since v0.8.3
  'click a.showBook': function(e){
    e.preventDefault();
    var bookId = this._id;
    Router.go('acp.bo.show', {_id: bookId});
  },
  'click a.editBook': function(e){
    e.preventDefault();
    var bookId = this._id;
    Router.go('acp.bo.edit', {_id: bookId});
  },
  'click a.showStock': function(e){
    e.preventDefault();
    var bookId = this._id;
    Router.go('acp.bo.stock', {_id: bookId});
  } 
});