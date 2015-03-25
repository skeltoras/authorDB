// - Select2 list for template bookNew
Template.listBookGroups.helpers({
  //@since v0.8.0
  listBookGroups: function(){
    var listItems = [];
    listItems.push('Buch', 'Hörbuch', 'E-Book');
    var listItem = [];
    listItems.forEach(function(item){
      listItem += ['<option value="' + item + '">' + item + '</option>']; 
    }); 
    return listItem;
  }
});

// - Select2 list for template bookNew
Template.editBookGroups.helpers({
  //@since v0.8.0
  editBookGroups: function(){
    var listItems = [];
    listItems.push('Buch', 'Hörbuch', 'E-Book');
    var listItem = [];
    var getBookData = Books.findOne({_id: this._id}).bookGroup;
    
    listItems.forEach(function(item){
      if(item==getBookData){
        listItem += ['<option value="' + item + '" selected>' + item + '</option>'];
      } else {
        listItem += ['<option value="' + item + '">' + item + '</option>'];
      }
    }); 
    return listItem;
  }
});