//@since v0.11.0

//-- template onCreated functions
Template.boShow.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var bookId = Session.get('bookId');
    self.subscribe("singleBook", bookId);
  });  
});

//-- template onDestroyed functions
Template.boShow.onDestroyed(function () {
});

//-- template onRendered functions
Template.boShow.onRendered(function () {
});

//-- template helpers
Template.boShow.helpers({ 
  setStats: function(){
    Meteor.call('salesPerYear', this._id);
  }
});

//-- template events
Template.boShow.events({ 
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