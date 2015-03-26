//since v0.11.0

//-- template created functions
Template.ucpHeader.created = function(){
};

//-- template destroyed functions
Template.ucpHeader.destroyed = function(){
};

//-- template rendered functions
Template.ucpHeader.rendered = function(){
  $(document).ready(function(){
    $(".header.acp").sticky({topSpacing:0});
  });
};

//-- template helpers                            
Template.ucpHeader.helpers({
});

//-- template events
Template.ucpHeader.events({
});