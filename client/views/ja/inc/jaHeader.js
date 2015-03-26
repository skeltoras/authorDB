//since v0.11.0

//-- template created functions
Template.jaHeader.created = function(){
};

//-- template destroyed functions
Template.jaHeader.destroyed = function(){
};

//-- template rendered functions
Template.jaHeader.rendered = function(){
  $(document).ready(function(){
    $(".header.acp").sticky({topSpacing:0});
  });
};

//-- template helpers                            
Template.jaHeader.helpers({
});

//-- template events
Template.jaHeader.events({
});