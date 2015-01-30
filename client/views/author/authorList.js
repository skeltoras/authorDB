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
});

//-- template helpers
Template.authorsAllList.helpers({
  // list of all books sorted by submit-date @since 0.1.0
  authors: function() {
    return Authors.find({}, {sort: {lastName: 1}});
  }
});

//-- template events
Template.authorList.events({  
});