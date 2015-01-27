//-- template created functions
Template.devUpload.created = function(){ 
};

//-- template destroyed functions
Template.devUpload.destroyed = function(){
};

//-- template rendered functions
Template.devUpload.rendered = function(){
};

//-- template helpers
Template.devUpload.helpers({
});

//-- template events
Template.devUpload.events({
  'change input[type=file]': function(event, template){
    event.preventDefault();
    var input = template.find('input[type=file]').files;
    var file = input[0];
    if (file['type']!='.csv')
    {
      console.log('Error. Falscher Dateityp!');
      //document.getElementById("files").value = '';
    }
    console.log(file);
  },
  'submit form': function(event, template){
    event.preventDefault();
    var input = template.find('input[type=file]').files;
    var file = input[0];
    
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event){
      var csv = event.target.result;
      var data = $.csv.toObjects(csv);
      var i;
      for (i = 0; i < data.length; ++i) {
        Meteor.call('insertUpload', data[i], function(error, result){
          if (error)
          return throwError(error.reason);
        });
      }
    }
  }
});