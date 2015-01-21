//-- template created functions
Template.contractList.created = function(){ 
};

//-- template destroyed functions
Template.contractList.destroyed = function(){
};

//-- template rendered functions
Template.contractList.rendered = function(){
};

//-- template helpers
Template.contractAllList.helpers({
  // list of all authors sorted by submit-date @since 0.1.0
  contracts: function() {
    return Contracts.find({}, {sort: {submitted: -1}});
  }
});

//-- template events
Template.contractList.events({
});