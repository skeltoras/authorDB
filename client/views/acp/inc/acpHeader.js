//since v0.11.0

//-- template created functions
Template.acpHeader.created = function(){
};

//-- template destroyed functions
Template.acpHeader.destroyed = function(){
};

//-- template rendered functions
Template.acpHeader.rendered = function(){
  $(document).ready(function(){
    $(".topnav").sticky({topSpacing:0});
  });
};

//-- template helpers                            
Template.acpHeader.helpers({
});

//-- template events
Template.acpHeader.events({
});