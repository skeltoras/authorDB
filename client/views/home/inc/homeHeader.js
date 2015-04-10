//@since v0.11.0

//-- template onCreated functions
Template.homeHeader.onCreated(function () {
});

//-- template onDestroyed functions
Template.homeHeader.onDestroyed(function () {
});

//-- template onRendered functions
Template.homeHeader.onRendered(function () {
  $(document).ready(function(){
    $(".header.home").sticky({topSpacing:0});
  });
});

//-- template helpers
Template.homeHeader.helpers({
});

//-- template events
Template.homeHeader.events({
});