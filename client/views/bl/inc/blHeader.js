//since v0.11.0

//-- template created functions
Template.blHeader.created = function(){
};

//-- template destroyed functions
Template.blHeader.destroyed = function(){
};

//-- template rendered functions
Template.blHeader.rendered = function(){
  $(document).ready(function(){
    $(".header.acp").sticky({topSpacing:0});
  });
};

//-- template helpers                            
Template.blHeader.helpers({
});

//-- template events
Template.blHeader.events({
});