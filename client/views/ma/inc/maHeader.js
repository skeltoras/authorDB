//since v0.11.0

//-- template created functions
Template.maHeader.created = function(){
};

//-- template destroyed functions
Template.maHeader.destroyed = function(){
};

//-- template rendered functions
Template.maHeader.rendered = function(){
  $(document).ready(function(){
    $(".header.acp").sticky({topSpacing:0});
  });
};

//-- template helpers                            
Template.maHeader.helpers({
});

//-- template events
Template.maHeader.events({
});