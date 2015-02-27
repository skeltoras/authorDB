//@since v0.10.4

//-- template created functions
Template.todosSidebar.created = function(){
  Session.set('currVersion', version);
};

//-- template destroyed functions
Template.todosSidebar.destroyed = function(){
};

//-- template rendered functions
Template.todosSidebar.rendered = function(){
};

//-- template helpers                            
Template.todosSidebar.helpers({
  listVersions: function() {
    return Versions.find({},{sort: {v: -1}}).fetch();
  }
});

//-- template events
Template.todosSidebar.events({
  'click .getVersionData': function(e) {
    e.preventDefault();
    Session.set('currVersion', e.currentTarget.id);
  }
});