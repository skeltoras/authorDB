//@since 0.9.1

//-- template created functions
Template.userList.created = function(){ 
};

//-- template destroyed functions
Template.userList.destroyed = function(){
};

//-- template rendered functions
Template.userList.rendered = function(){
};

//-- template helpers
Template.userList.helpers({
  getUsers: function() {
    var test = Meteor.users.find().fetch();
    console.log(test);
    return test;
  }
});

//-- template events
Template.userList.events({  
});