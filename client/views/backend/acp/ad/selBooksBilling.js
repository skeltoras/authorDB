//@since 0.8.5
Template.listBooksBilling.helpers({
  listBooksBilling: function() {
    if(Session.get('modalAddBilling')==true){
      var authorId = Session.get('authorId');
      var listItems = Books.find({'affiliateData.authorId': authorId}).fetch();
      var listItem = [];
      listItems.forEach(function(book){
        listItem += ['<option value="' + book._id + '">' + book.bookTitle + '</option>'];
      }); 
      return listItem;
    }  
  }
});