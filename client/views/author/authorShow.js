//-- template created functions
Template.authorShow.created = function(){
};

//-- template destroyed functions
Template.authorShow.destroyed = function(){
};

//-- template rendered functions
Template.authorShow.rendered = function(){
};

//-- template helpers
Template.authorShow.helpers({ 
  setSessionData: function() {
    Session.set('authorId', this._id);
  },
  getAffiliate: function() {
    var authorId = this._id;
    var bookList = Books.find({'affiliateData.authorId': authorId}).fetch();
    var getData = [];
    var i = 0;
    if(bookList){
      bookList.forEach(function(book){
        var condition = Conditions.findOne({'affiliateData.authorId': authorId, 'bookData.bookId': book._id});        
        var checkCondition = [];
        var data = [];       
        if(condition){
          checkCondition = { hasCondition: true };
          data = _.extend(book, checkCondition);
          getData[i] = data;        
        } else {
          checkCondition = { hasCondition: false };
          data = _.extend(book, checkCondition);
          getData[i] = data;
        }
        i++; 
      });
      return getData;
    }  
  },
  getAuthor: function() {
    var authorName = this.firstName + ' ' + this.lastName;
    return Books.find({'authorData.authorName': authorName}).fetch();
  }
});

//-- template events
Template.authorShow.events({ 
  'click .addCondition': function(e) {
    e.preventDefault();
    var bookId = e.currentTarget.id;
    Session.set('bookId', bookId); 
    $('#addConditions').modal('toggle');
  },
  //@since v0.7.9
  'click #abrechnen': function(e) {
    e.preventDefault();
    var bookId = e.currentTarget.id;
    Session.set('bookId', bookId); 
    $('#selectYear').modal('toggle');
  } 
});