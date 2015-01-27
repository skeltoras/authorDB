//-- template created functions
Template.uploadBrockhaus.created = function(){ 
};

//-- template destroyed functions
Template.uploadBrockhaus.destroyed = function(){
};

//-- template rendered functions
Template.uploadBrockhaus.rendered = function(){
};

//-- template helpers
Template.uploadBrockhaus.helpers({
});

//-- template events
Template.uploadBrockhaus.events({
  'change input[type=file]': function(e, tpl){
    e.preventDefault();
    
    var files = e.target.files;
    var test = [];
    for (var i = 0, ln = files.length; i < ln; i++) {
      //test[i] = Uploads.insert(files[i], function (err, fileObj) {
      //});
      //console.log(test[i].original.name);
    }
  },
  'submit form': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[type=file]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      //console.log(data); //debug
      for (var i = 0; i < data.length; ++i) {
      //for (var i = 0; i < 4; ++i) {   //Test  
        //console.log(data[i].Bezeichnung); //debug
        Meteor.call('insertSalesBrockhausUpload', data[i], function(error, result){
          if (error)
          return throwError(error.reason);
        });
      }
    }
    Router.go('/');
  }
});