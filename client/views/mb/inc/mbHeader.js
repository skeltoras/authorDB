//since v0.11.0

//-- template created functions
Template.mbHeader.created = function(){
};

//-- template destroyed functions
Template.mbHeader.destroyed = function(){
};

//-- template rendered functions
Template.mbHeader.rendered = function(){
  $(document).ready(function(){
    $(".header.acp").sticky({topSpacing:0});
  });
};

//-- template helpers                            
Template.mbHeader.helpers({
});

//-- template events
Template.mbHeader.events({
});