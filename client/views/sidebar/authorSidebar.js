//@since v0.10.0

//-- template created functions
Template.authorSidebar.created = function(){ 
};

//-- template destroyed functions
Template.authorSidebar.destroyed = function(){
};

//-- template rendered functions
Template.authorSidebar.rendered = function(){
};

//-- template helpers
Template.authorSidebar.helpers({
});

//-- template events
Template.authorSidebar.events({  
  'click a.editAuthor': function(e){
    e.preventDefault();
    var authorId = Session.get('authorId');
    Router.go('author.edit', {_id: authorId});
  },
  'click a.billAuthor': function(e){
    e.preventDefault(); 
    $('#selectYear').modal('toggle');
  },
  'click a.changelogAuthor': function(e){
    e.preventDefault();
    //ToDo: show author changelog
    console.log('ToDo: show author changelog'); //debug  
  },
  //@since v0.10.2
  'click a.showAuthor': function(e){
    e.preventDefault();
    var authorId = Session.get('authorId');
    Router.go('author.show', {_id: authorId});  
  },
  'click a.deleteAuthor': function(e){
    e.preventDefault();
    $('#confirmDelete').modal('toggle');  
  }
});

//-- template events
Template.modalConfirmDelete.events({
  // save form on submit
  'submit #formConfirmDelete': function(e) {
    e.preventDefault();
    
    var authorId = Session.get('authorId');    
    Authors.remove({_id: authorId});
    $('#confirmDelete').modal('toggle');
    Router.go('authors.list');
  },
  // close form on reset
  'reset #formConfirmDelete': function(e) {
    e.preventDefault();
    $('#confirmDelete').modal('toggle');
  }
});