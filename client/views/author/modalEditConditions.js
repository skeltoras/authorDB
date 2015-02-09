//-- template created functions
Template.modalEditConditions.created = function(){
  Session.set('modalEditConditions', false); 
};

//-- template destroyed functions
Template.modalEditConditions.destroyed = function(){
};

//-- template rendered functions
Template.modalEditConditions.rendered = function(){
};

//-- template helpers
Template.modalEditConditions.helpers({
  getConditionData: function() {
    var visible = Session.get('modalEditConditions');
    if(visible == true) {
      var bookId = Session.get('bookId');
      Meteor.call('getSingleConditionData', bookId, function(error, result) {
        Session.set('getSingleConditionData', result);
      });
    }
    return Session.get('getSingleConditionData'); 
  }
});

//-- template events
Template.modalEditConditions.events({ 
  // save form on submit
  'submit #formEditConditions': function(e) {
    e.preventDefault();
        
    var authorId = Session.get('authorId');
    var bookId = Session.get('bookId');
    var feeIsGross = false;
    var feeIsNet = false;
    var feeIsOther = false;  
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
      content: 'Konditionen überarbeitet.'
    }];
    
    var condition = {
      feeInPercent: $(e.target).find('[name=feeInPercent]').val(),
      feeIsGross: feeIsGross,
      feeIsNet: feeIsNet,
      feeIsOther: feeIsOther,
      feeIsGross: feeIsGross,
      feeIsNet: feeIsNet,
      feeIsOther: feeIsOther,
      feeFixed: $(e.target).find('[name=feeFixed]').val(),
      feeBegin: $(e.target).find('[name=feeBegin]').val(),
      freeCopiesFirst: $(e.target).find('[name=freeCopiesFirst]').val(),
      freeCopiesNext: $(e.target).find('[name=freeCopiesNext]').val(),
      feeEbookPercent: $(e.target).find('[name=feeEbookPercent]').val(),
      feeLicencePercent: $(e.target).find('[name=feeLicencePercent]').val(),
      updatedAt: new Date().getTime()
    };    
    
    //console.log(condition);
    Meteor.call('updateCondition', condition, bookId, changes, function(error, result) {
      //if (error)
        //return throwError(error.reason);
    });
    Session.set('modalEditConditions', false);
    $('#editConditions').modal('toggle');
  },
  // close form on reset
  'reset #formEditConditions': function(e) {
    e.preventDefault();
    Session.set('modalEditConditions', false);
    $('#editConditions').modal('toggle');
  }
});