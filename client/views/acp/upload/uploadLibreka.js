//-- template created functions
Template.uploadLibreka.created = function(){ 
};

//-- template destroyed functions
Template.uploadLibreka.destroyed = function(){
};

//-- template rendered functions
Template.uploadLibreka.rendered = function(){
};

//-- template helpers
Template.uploadLibreka.helpers({
});

//-- template events
Template.uploadLibreka.events({
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
        //console.log(data[i].TITEL); //debug
        Meteor.call('insertSalesLibrekaUpload', data[i], function(error, result){
          if (error)
          return throwError(error.reason);
        });
      }
    }
    Router.go('/acp');
  }
});