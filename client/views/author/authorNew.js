//-- template created functions
Template.authorNew.created = function(){
};

//-- template destroyed functions
Template.authorNew.destroyed = function(){
};

//-- template rendered functions
Template.authorNew.rendered = function(){
};

//-- template helpers
Template.authorNew.helpers({
});

//-- template events
Template.authorNew.events({
  // save form on submit
  'submit form': function(e) {
    e.preventDefault();

    var changes = [];
    var isAutor = false;
    var isCompany = false;
    var vatBool = false;
    
    if($(e.target).find('[name=isAutor]').is(':checked')) {
      isAutor = true;   
    }
    if($(e.target).find('[name=isCompany]').is(':checked')) {
      isCompany = true;   
    }
    if($(e.target).find('[name=vatBool]').is(':checked')) {
      vatBool = true;   
    }
    
    changes = [{
      date: new Date().getTime(),
      content: 'Kontakt angelegt.'
    }];
    
    var author = {
      title: $(e.target).find('[name=title]').val(),
      graduate: $(e.target).find('[name=graduate]').val(),
      firstName: $(e.target).find('[name=firstName]').val(), 
      lastName: $(e.target).find('[name=lastName]').val(), 
      salutation: $(e.target).find('[name=salutation]').val(),
      isAutor: isAutor, 
      isCompany: isCompany,
      company: $(e.target).find('[name=company]').val(),
      street: $(e.target).find('[name=street]').val(),
      additional: $(e.target).find('[name=additional]').val(),
      plz: $(e.target).find('[name=plz]').val(),
      city: $(e.target).find('[name=city]').val(),
      country: $(e.target).find('[name=country]').val(),
      telephone: $(e.target).find('[name=telephone]').val(),
      telefax: $(e.target).find('[name=telefax]').val(),
      mobil: $(e.target).find('[name=mobil]').val(),
      emailPriv: $(e.target).find('[name=emailPriv]').val(),
      emailOff: $(e.target).find('[name=emailOff]').val(),
      url: $(e.target).find('[name=url]').val(),
      iban: $(e.target).find('[name=iban]').val(),
      bic: $(e.target).find('[name=bic]').val(),
      bank: $(e.target).find('[name=bank]').val(),
      vatBool: vatBool,
      vat: $(e.target).find('[name=vat]').val(),
      notes: $(e.target).find('[name=notes]').val(),
      changes: changes,
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    };
    
    Meteor.call('newAuthor', author, function(error, result) {
      if (result) {
        var authorId = result;
        Router.go('author.show', {_id: authorId});
      } else {
        Router.go('author.list');
      }      
    });
    
    
  }  
});