//since v0.11.0

//-- template created functions
Template.biHeader.created = function(){
};

//-- template destroyed functions
Template.biHeader.destroyed = function(){
};

//-- template rendered functions
Template.biHeader.rendered = function(){
  $(document).ready(function(){
    $(".header.acp").sticky({topSpacing:0});
  });
};

//-- template helpers                            
Template.biHeader.helpers({
});

//-- template events
Template.biHeader.events({
});