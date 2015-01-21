//-- template created functions
Template.contractNew.created = function(){ 
};

//-- template destroyed functions
Template.contractNew.destroyed = function(){
};

//-- template rendered functions
Template.contractNew.rendered = function(){
  $(document).ready(function() { $("#authors").select2(); });
  $(document).ready(function() { $("#bookTitle").select2(); });
  $("[name='authorReading']").bootstrapSwitch();
};

//-- template helpers
Template.contractNew.helpers({
});

//-- template events
Template.contractNew.events({
  // paste subtitle and series from selected book
  'change #bookTitle': function() {
    var e = document.getElementById("bookTitle");
    var eValue = e.options[e.selectedIndex].value;
    if(eValue != 'empty') {
      // bookId
      var eBookId = Books.findOne({bookTitle: eValue})._id;
      if(eBookId){
        document.getElementById("bookId").value = eBookId; 
      } else {
        document.getElementById("bookId").value = '';
      }
      // bookSubtitle
      var eBookSubtitle = Books.findOne({bookTitle: eValue}).bookSubtitle;
      if(eBookSubtitle){
        document.getElementById("bookSubtitle").value = eBookSubtitle; 
      } else {
        document.getElementById("bookSubtitle").value = '';
      }
      // bookSeries
      var ebookSeries = Books.findOne({bookTitle: eValue}).bookSeries;
      if(ebookSeries){
        document.getElementById("bookSeries").value = ebookSeries; 
      } else {
        document.getElementById("bookSeries").value = '';
      }
    } else {
      document.getElementById("bookSubtitle").value = '';
      document.getElementById("bookSeries").value = '';
    }         
  },
  // save form on submit
  'submit form': function(e) {
    e.preventDefault();
    
    var authors = [];
    var feeIsGross = false;
    var feeIsNet = false;
    var feeIsOther = false;
    var authorReading = false;
    var changes = [];
    
    $('#authors :selected').each(function(i, selected){
      authors[i] = $(selected).text();
    });

    if($(e.target).find('[name=feeIsGross]').is(':checked')) {
      feeIsGross = true;   
    }
    if($(e.target).find('[name=feeIsNet]').is(':checked')) {
      feeIsNet = true;   
    }
    if($(e.target).find('[name=feeIsOther]').is(':checked')) {
      feeIsOther = true;   
    }
    if($(e.target).find('[name=authorReading]').is(':checked')) {
      authorReading = true;   
    }
    
    changes = [{
      date: new Date().getTime(),
      content: 'Neuer Vertrag erstellt.'
    }];
    
    var contract = {
      bookTitle: $(e.target).find('[name=bookTitle]').val(),
      bookId: $(e.target).find('[name=bookId]').val(), 
      bookSubtitle: $(e.target).find('[name=bookSubtitle]').val(),
      bookSeries: $(e.target).find('[name=bookSeries]').val(),
      authors: authors,
      feeInPercent: $(e.target).find('[name=feeInPercent]').val(),
      feeIsGross: feeIsGross,
      feeIsNet: feeIsNet,
      feeIsOther: feeIsOther,
      feeFixed: $(e.target).find('[name=feeFixed]').val(),
      feeBegin: $(e.target).find('[name=feeBegin]').val(),
      freeCopiesFirst: $(e.target).find('[name=freeCopiesFirst]').val(),
      freeCopiesNext: $(e.target).find('[name=freeCopiesNext]').val(),
      feeEbookPercent: $(e.target).find('[name=feeEbookPercent]').val(),
      feeLicencePercent: $(e.target).find('[name=feeLicencePercent]').val(),
      authorReading: authorReading,
      notes: $(e.target).find('[name=notes]').val(),
      changes: changes,
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    };    
    
    Meteor.call('newContract', contract, function(error, result) {
      //if (error)
        //return throwError(error.reason);
    });
  }
  
});