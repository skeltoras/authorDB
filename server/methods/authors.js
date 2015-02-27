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
  //@since v0.8.2
  updateAuthor: function(author, authorId, changes) {
    if(changes){
      var user = Meteor.users.findOne(this.userId);
      changes.user = user.profile.nickname;
      Authors.update(authorId, {$set: author, $addToSet: {changes: changes} });
    } else {
      Authors.update(authorId, {$set: author});
    }    
  },
})