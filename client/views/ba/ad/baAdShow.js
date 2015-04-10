//@since v0.11.0

//-- template onCreated functions
Template.baAdShow.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var authorId = Session.get('authorId');
    self.subscribe('ba_getSingleAddress', authorId);
    self.subscribe('ba_getSingleAddressAffiliate', authorId);
    self.subscribe('ba_getSingleAddressAuthor', authorId);
  });  
});

//-- template onDestroyed functions
Template.baAdShow.onDestroyed(function () {
});

//-- template onRendered functions
Template.baAdShow.onRendered(function () {
});

//-- template helpers
Template.baAdShow.helpers({
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
    var authorId = this._id;
    return Books.find({'authorData.authorId': authorId}).fetch();
  }
});

//-- template events
Template.baAdShow.events({ 
  'click .addCondition': function(e) {
    e.preventDefault();
    var bookId = e.currentTarget.id;
    Session.set('bookId', bookId);
    Session.set('modalAddConditions', true); 
    $('#addConditions').modal('toggle');
  },
  //@since v0.7.9
  'click #abrechnen': function(e) {
    e.preventDefault(); 
    $('#selectYear').modal('toggle');
  },
  //@since v0.8.0
  'click .editCondition': function(e) {
    e.preventDefault();
    var bookId = e.currentTarget.id;
    Session.set('bookId', bookId);
    Session.set('modalEditConditions', true); 
    $('#editConditions').modal('toggle');
  }, 
});