// - Select2 list for template bookNew
Template.listMwSt.helpers({
  //@since v0.8.4
  listMwSt: function(){
    listItem = [];
    listItem.push(
      //'<option data-placeholder="true">MwSt wählen</option>',    
      '<option value="0">0%</option>',  
      '<option value="7">7%</option>',  
      '<option value="19">19%</option>'  
    );
    return listItem;
  } 
});

// - Select2 list for template bookEdit
Template.editMwSt.helpers({
  //@since v0.8.4
  editMwSt: function(){
    var listItem = [];
    var listItems = [];
    listItems.push(0, 7, 19);
    var getBookData = Books.findOne({_id: this._id}).bookPriceMwSt;
    if(getBookData){
      listItems.forEach(function(mwst){
        if(mwst==getBookData){
          listItem += ['<option value="' + mwst + '" selected>' + mwst + '%</option>'];
        } else {
          listItem += ['<option value="' + mwst + '">' + mwst + '%</option>'];
        }
      });
    } else {
      listItem.push(
        //'<option data-placeholder="true">MwSt wählen</option>',    
        '<option value="0">0%</option>',  
        '<option value="7">7%</option>',  
        '<option value="19">19%</option>'  
      );
    } 
    return listItem;
  }
});