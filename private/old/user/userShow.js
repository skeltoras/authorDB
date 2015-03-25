//-- template created functions
Template.userShow.created = function(){
};

//-- template destroyed functions
Template.userShow.destroyed = function(){
};

//-- template rendered functions
Template.userShow.rendered = function(){
};

//-- template helpers
Template.userShow.helpers({ 
  setStats: function(){
    var bookId = Session.set('bookId', this._id);
    Meteor.call('salesPerYear', this._id);
  }
});

//-- template events
Template.userShow.events({  
});