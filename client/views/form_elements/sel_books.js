Template.listBookList.helpers({
});

Template.listBookListSel2.helpers({  
  listBookListSel2: function(){
    listItems = Books.find({}, {sort: {bookTitle: 1}});
    listItem = [];
    listItem += ['<option value="empty" class="empty-grey">Buch wählen</option>'];
    listItems.forEach(function(book){
      listItem += ['<option value="' + book.bookTitle + '">' + book.bookTitle + '</option>']; 
    }); 
    return listItem;
  }
});

Template.editBookList.helpers({
});

Template.editBookListSel2.helpers({  
  editBookListSel2: function(){
    listItems = Books.find({}, {sort: {bookTitle: 1}});
    checkCurrent = Contracts.findOne({_id: this._id}).bookTitle;
    listItem = [];
    //listItem += ['<option value="empty" class="empty-grey">Buch wählen</option>'];
    listItems.forEach(function(book){
      if(book.bookTitle == checkCurrent){
        listItem += ['<option value="' + book.bookTitle + '" selected>' + book.bookTitle + '</option>'];
      } else {
        listItem += ['<option value="' + book.bookTitle + '">' + book.bookTitle + '</option>']; 
      }
    }); 
    return listItem;
  }
});