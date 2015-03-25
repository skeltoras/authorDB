//@since v0.11.1

//-- template onCreated functions
Template.userSidebar.onCreated(function () { 
});

//-- template onDestroyed functions
Template.userSidebar.onDestroyed(function () {
});

//-- template onRendered functions
Template.userSidebar.onRendered(function () {
});

//-- template helpers
Template.userSidebar.helpers({
});

//-- template events
Template.userSidebar.events({
  'click a.#': function(e){
    e.preventDefault();
    //Router.go('acp.bo.sales', {_id: bookId});
  }  
});