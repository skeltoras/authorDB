//@since v 0.11.0

//-- template created functions
Template.adList.created = function(){ 
};

//-- template destroyed functions
Template.adList.destroyed = function(){
};

//-- template rendered functions
Template.adList.rendered = function(){
};

//-- template helpers
Template.adList.helpers({
});

//-- template helpers
Template.adList.helpers({
  // list of all books sorted by submit-date @since 0.1.0
  authors: function() {
    return Authors.find({}, {sort: {lastName: 1, displayName: 1}});
  }
});

//-- template events
Template.adList.events({  
});