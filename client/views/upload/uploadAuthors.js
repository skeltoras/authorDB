//@since v0.6.1

//-- template created functions
Template.uploadAuthors.created = function(){ 
};

//-- template destroyed functions
Template.uploadAuthors.destroyed = function(){
};

//-- template rendered functions
Template.uploadAuthors.rendered = function(){
};

//-- template helpers
Template.uploadAuthors.helpers({
});

//-- template events
Template.uploadAuthors.events({
  'submit form': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[type=file]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('insertAuthorsUpload', data[i], function(error, result){
          if (error)
          return throwError(error.reason);
        });
      }
    }
    Router.go('/');
  }
});