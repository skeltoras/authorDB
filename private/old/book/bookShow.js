//-- template created functions
Template.bookShow.created = function(){
};

//-- template destroyed functions
Template.bookShow.destroyed = function(){
};

//-- template rendered functions
Template.bookShow.rendered = function(){
};

//-- template helpers
Template.bookShow.helpers({ 
  setStats: function(){
    var bookId = Session.set('bookId', this._id);
    Meteor.call('salesPerYear', this._id);
  }
});

//-- template events
Template.bookShow.events({  
});