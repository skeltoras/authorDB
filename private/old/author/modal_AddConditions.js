//-- template created functions
Template.modalAddConditions.created = function(){
  Session.set('modalAddConditions', false); 
};

//-- template destroyed functions
Template.modalAddConditions.destroyed = function(){
};

//-- template rendered functions
Template.modalAddConditions.rendered = function(){
};

//-- template helpers
Template.modalAddConditions.helpers({
  checkType: function() {
    var visible = Session.get('modalAddConditions');
    if(visible == true) {
      var bookId = Session.get('bookId');
      var licence = false;
      Meteor.call('getSingleBookData', bookId, function(error, result) {
        bookType = result.bookGroup;
        if(bookType == 'E-Book'){
          licence = true;  
        }
        return licence;  
      });
    }
  }
});

//-- template events
Template.modalAddConditions.events({ 
  // save form on submit
  'submit #formAddConditions': function(e) {
    e.preventDefault();
        
    var authorId = Session.get('authorId');
    var bookId = Session.get('bookId');
    var feeIsGross = false;
    var feeIsNet = false;
    var feeIsOther = false;
    var isBilling = false;
    var isList = false;
    var isIgnore = false;  
    var author = Authors.findOne({_id: authorId});
    var authorName = author.firstName + ' ' + author.lastName;
    var bookTitle = Books.findOne({_id: bookId}).bookTitle;  
    
    if($(e.target).find('[name=feeIsGross]').is(':checked')) {
      feeIsGross = true;   
    }
    if($(e.target).find('[name=feeIsNet]').is(':checked')) {
      feeIsNet = true;   
    }
    if($(e.target).find('[name=feeIsOther]').is(':checked')) {
      feeIsOther = true;   
    }
    if($(e.target).find('[name=isBilling]').is(':checked')) {
      isBilling = true;   
    }
    if($(e.target).find('[name=isList]').is(':checked')) {
      isList = true;   
    }
    if($(e.target).find('[name=isIgnore]').is(':checked')) {
      isIgnore = true;   
    }
    
    affiliateData = [{
      authorId: authorId,
      authorName: authorName
    }];
    
    bookData = [{
      bookId: bookId,
      bookTitle: bookTitle
    }];
    
    changes = [{
      date: new Date().getTime(),
      content: 'Neue Konditionen erstellt.'
    }];
    
    var condition = {
      affiliateData: affiliateData,
      bookData: bookData, 
      feeInPercent: $(e.target).find('[name=feeInPercent]').val(),
      feePerEx: $(e.target).find('[name=feePerEx]').val(),
      feeIsGross: feeIsGross,
      feeIsNet: feeIsNet,
      feeIsOther: feeIsOther,
      isBilling: isBilling,
      isList: isList,
      isIgnore: isIgnore,
      feeFixed: $(e.target).find('[name=feeFixed]').val(),
      feeBegin: $(e.target).find('[name=feeBegin]').val(),
      freeCopiesFirst: $(e.target).find('[name=freeCopiesFirst]').val(),
      freeCopiesNext: $(e.target).find('[name=freeCopiesNext]').val(),
      feeEbookPercent: $(e.target).find('[name=feeEbookPercent]').val(),
      feeLicencePercent: $(e.target).find('[name=feeLicencePercent]').val(),
      changes: changes,
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    };    
    
    //console.log(condition);
    Meteor.call('newCondition', condition, function(error, result) {
      //if (error)
        //return throwError(error.reason);
    });
    Session.set('modalAddConditions', false);
    $('#addConditions').modal('toggle');
  },
  // close form on reset
  'reset #formAddConditions': function(e) {
    e.preventDefault();
    Session.set('modalAddConditions', false);
    $('#addConditions').modal('toggle');
  }
});