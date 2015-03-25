// - Select2 list for template bookNew
Template.listAffiliates.helpers({
  //@since v0.8.0
  listAffiliates: function(){
    var listItems = Authors.find({}, {sort: {lastName: 1}});
    var listItem = [];
    listItems.forEach(function(author){
      var authorId = author._id;
      var authorName = author.firstName + ' ' + author.lastName;
      listItem += ['<option value="' + authorId + '">' + authorName + '</option>']; 
    }); 
    return listItem;
  }
});

// - Select2 list for template bookNew
Template.editAffiliates.helpers({
  //@since v0.8.0
  editAffiliates: function(){
    var listItems = Authors.find({}, {sort: {lastName: 1}});
    var listItem = [];
    var getBookData = Books.findOne({_id: this._id}).affiliateData;
    var getBookAuthors = [];
    
    if(getBookData){
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
    } else {
      listItems.forEach(function(author){
        var authorId = author._id;
        var authorName = author.firstName + ' ' + author.lastName;
        listItem += ['<option value="' + authorId + '">' + authorName + '</option>']; 
      });
    }
     
    return listItem;
  }
});

// - Select2 list for template bookNew
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

// - Select2 list for template bookNew
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

/*
// - Select2 list for template bookNew
Template.listAuthorsBookNew.helpers({
  listAuthorsBookNew: function(){
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

// - Select2 list for template bookEdit
Template.listAuthorsBookEdit.helpers({
  listAuthorsBookEdit: function(){
    listItems = Authors.find({}, {sort: {lastName: 1}});
    getBookData = Books.findOne({_id: this._id}).authorData;
    var getBookAuthors = [];
    var listItem = [];
      
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

Template.listAuthorListSel2.helpers({  
  listAuthorListSel2: function(){
    listItems = Authors.find({}, {sort: {lastName: 1}});
    listItem = [];
    //listItem += ['<option value="empty">--- Autor wählen ---</option>'];
    listItems.forEach(function(author){
      listItem += ['<option value="' + author._id + '">' + author.firstName + ' ' + author.lastName + '</option>']; 
    }); 
    return listItem;
  }
});

Template.editAuthorList.helpers({
});

Template.editAuthorListSel2.helpers({  
  editAuthorListSel2: function(){
    listItems = Authors.find({}, {sort: {lastName: 1}});
    checkCurrent = Contracts.findOne({_id: this._id}).authors;
    function isInArray(value, array) {
      return array.indexOf(value) > -1;
    }
    listItem = [];
    //listItem += ['<option value="empty">--- Autor wählen ---</option>'];
    listItems.forEach(function(author){
      authorName = author.firstName + ' ' + author.lastName;
      if(isInArray(authorName, checkCurrent)){
        listItem += ['<option value="' + authorName + '" selected>' + authorName + '</option>'];
      } else {
        listItem += ['<option value="' + authorName + '">' + authorName + '</option>']; 
      } 
    }); 
    return listItem;
  }
});
*/