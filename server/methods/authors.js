Meteor.methods({
  newAuthor: function(author) {
    var authorNewId = Authors.insert(author);
    return authorNewId;
  },
  insertUpload: function(data) {    
    var author = _.extend(data, {
      vatBool: false,
      isAutor: false,
      isActive: false  
    });  
    Authors.insert(data);
  },
  'addBillingId': function() {
    var billingNo = incrementCounter('billingNo');
    return billingNo;
  },
  //@since v0.8.2
  updateAuthor: function(author, authorId, changes) {
    if(changes){
      Authors.update(authorId, {$set: author, $addToSet: {changes: changes} });
    } else {
      Authors.update(authorId, {$set: author});
    }    
  },
})