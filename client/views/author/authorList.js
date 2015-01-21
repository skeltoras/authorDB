//-- template created functions
Template.authorList.created = function(){ 
};

//-- template destroyed functions
Template.authorList.destroyed = function(){
};

//-- template rendered functions
Template.authorList.rendered = function(){
};

//-- template helpers
Template.authorList.helpers({
  // list of all authors sorted by submit-date @since 0.1.0
  authors: function() {
    return Authors.find({}, {sort: {submitted: -1}});
  },
  authorId: function() {
    return this._id;
  }
});

//-- template events
Template.authorList.events({
});