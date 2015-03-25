//@since v0.9.1

//-- template created functions
Template.userShowSidebar.created = function(){ 
};

//-- template destroyed functions
Template.userShowSidebar.destroyed = function(){
};

//-- template rendered functions
Template.userShowSidebar.rendered = function(){
};

//-- template helpers
Template.userShowSidebar.helpers({
});

//-- template events
Template.userShowSidebar.events({  
  'click a.newUser': function(e){
    e.preventDefault();
    Router.go('user.new');
  },
  'click a.listRoles': function(e){
    e.preventDefault();
    Router.go('roles.list');
  },
  'click a.newRole': function(e){
    e.preventDefault();
    Router.go('role.new');
  }
});