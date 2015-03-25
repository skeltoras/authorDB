//@since v0.11.0

//-- template onCreated functions
Template.globalHeader.onCreated(function () {
});

//-- template onDestroyed functions
Template.globalHeader.onDestroyed(function () {
});

//-- template onRendered functions
Template.globalHeader.onRendered(function () {
  $(document).ready(function(){
    $(".header.global").sticky({topSpacing:0});
  });
});

//-- template helpers
Template.globalHeader.helpers({
});

//-- template events
Template.globalHeader.events({
});