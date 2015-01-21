Meteor.methods({
  newAuthor: function(author) {
    Authors.insert(author);
  },
  insertUpload: function(data) {    
    var author = _.extend(data, {
      vatBool: false,
      isAutor: false,
      isActive: false  
    });  
    Authors.insert(data);
  }
})