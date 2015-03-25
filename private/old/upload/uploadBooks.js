//-- template created functions
Template.uploadBooks.created = function(){ 
};

//-- template destroyed functions
Template.uploadBooks.destroyed = function(){
};

//-- template rendered functions
Template.uploadBooks.rendered = function(){
};

//-- template helpers
Template.uploadBooks.helpers({
});

//-- template events
Template.uploadBooks.events({
  'change input[type=file]': function(e, tpl){
    e.preventDefault();
    
    var files = e.target.files;
    var test = [];
    //for (var i = 0, ln = files.length; i < ln; i++) {
    //  test[i] = Uploads.insert(files[i], function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
    //  });
    //  console.log(test[i].original.name);
    //}
    //var input = tpl.find('input[type=file]').files;
    //var file = input[0];
    //console.log(file);
  },
  'submit form': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[type=file]').files;
    var file = input[0];
    //console.log(file);
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      //console.log(data);
      for (var i = 0; i < data.length; ++i) {
      //for (var i = 0; i < 10; ++i) {   //Test
        Meteor.call('insertBookUpload', data[i], function(error, result){
          if (error)
          return throwError(error.reason);
        });
      }
    }
    Router.go('/');
  }
});