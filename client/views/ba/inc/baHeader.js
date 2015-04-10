//since v0.11.0

//-- template created functions
Template.baHeader.created = function(){
};

//-- template destroyed functions
Template.baHeader.destroyed = function(){
};

//-- template rendered functions
Template.baHeader.rendered = function(){
  $(document).ready(function(){
    $(".header.ba").sticky({topSpacing:0});
  });
};

//-- template helpers                            
Template.baHeader.helpers({
});

//-- template events
Template.baHeader.events({
});