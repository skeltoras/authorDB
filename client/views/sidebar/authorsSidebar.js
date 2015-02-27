//@since v0.10.3

//-- template created functions
Template.authorsSidebar.created = function(){ 
};

//-- template destroyed functions
Template.authorsSidebar.destroyed = function(){
};

//-- template rendered functions
Template.authorsSidebar.rendered = function(){
};

//-- template helpers
Template.authorsSidebar.helpers({
});

//-- template events
Template.authorsSidebar.events({  
  'click a.exportAuthors': function(e){
    e.preventDefault();
    console.log('ToDo: Exportfunction'); //debug
    //var authorId = Session.get('authorId');
    //Router.go('author.edit', {_id: authorId});
  },
  'click a.selectAuthors': function(e){
    e.preventDefault(); 
    console.log('ToDo: Selectfunction'); //debug
    //var authorId = Session.get('authorId');
    //Router.go('author.edit', {_id: authorId});
  }
});