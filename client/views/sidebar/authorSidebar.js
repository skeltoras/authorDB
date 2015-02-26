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
  }
});