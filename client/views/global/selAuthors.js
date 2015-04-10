//@since v0.11.0

/** listAuthors - Select2 list for template boNew **/

//-- template onCreated functions
Template.listAuthors.onCreated(function () {
});

//-- template onDestroyed functions
Template.listAuthors.onDestroyed(function () {
});

//-- template onRendered functions
Template.listAuthors.onRendered(function () {
  $("#authors").select2();
});

//-- template helpers
Template.listAuthors.helpers({
  //@since v0.8.0
  listAuthors: function(){
    listItems = Authors.find({}, {sort: {lastName: 1}});
    listItem = [];
    listItems.forEach(function(author){
      var authorId = author._id;
      var authorName = author.firstName + ' ' + author.lastName;
      listItem += ['<option value="' + authorId + '">' + authorName + '</option>']; 
    }); 
    return listItem;
  }
});

//-- template events
Template.listAuthors.events({
});


/** editAuthors - Select2 list for template boEdit **/ 

//-- template onCreated functions
Template.editAuthors.onCreated(function () {
});

//-- template onDestroyed functions
Template.editAuthors.onDestroyed(function () {
});

//-- template onRendered functions
Template.editAuthors.onRendered(function () {
  $("#authors").select2();
});

//-- template helpers 
Template.editAuthors.helpers({
  //@since v0.8.0
  editAuthors: function(){
    var listItems = Authors.find({}, {sort: {lastName: 1}});
    var listItem = [];
    var getBookData = Books.findOne({_id: this._id}).authorData;
    var getBookAuthors = [];
    
    listItems.forEach(function(author){
      var authorId = author._id;
      var authorName = author.firstName + ' ' + author.lastName;
      var testFor = false;
      
      for (var i in getBookData) {
        if (getBookData.hasOwnProperty(i)) {
          getBookAuthors = getBookData[i].authorName;          
          if(authorName == getBookAuthors){
            listItem += ['<option value="' + authorId + '" selected>' + authorName + '</option>'];
            testFor = true;
            break;
          }
        }
      }      
      if(!testFor) {
        listItem += ['<option value="' + authorId + '">' + authorName + '</option>'];  
      }
    }); 
    return listItem;
  }
});

//-- template events
Template.editAuthors.events({
});