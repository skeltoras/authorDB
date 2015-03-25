//-- template created functions
Template.salesShow.created = function(){
};

//-- template destroyed functions
Template.salesShow.destroyed = function(){
};

//-- template rendered functions
Template.salesShow.rendered = function(){
};

//-- template helpers
Template.salesShow.helpers({
  salesPerYear: function(){
    return SalesPerYear.find({bookId: this._id});
  },
  getId: function() {
    return this._id;
  }
});

//-- template events
Template.salesShow.events({
});