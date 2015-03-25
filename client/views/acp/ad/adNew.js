//@since v0.11.1

//-- template onCreated functions
Template.adNew.onCreated(function () { 
});

//-- template onDestroyed functions
Template.adNew.onDestroyed(function () {
});

//-- template onRendered functions
Template.adNew.onRendered(function () {
  $("[name='isAutor']").bootstrapSwitch();
  $("[name='isCompany']").bootstrapSwitch();
  $("[name='vatBool']").bootstrapSwitch();
  $("[name='inFeeList']").bootstrapSwitch();
  $("[name='inLicenseList']").bootstrapSwitch();
  $("[name='inAddressList']").bootstrapSwitch();
  $("[name='inMarketingList']").bootstrapSwitch();
});

//-- template helpers                            
Template.adNew.helpers({
});

//-- template events
Template.adNew.events({
  // save form on submit
  'submit form': function(e) {
    e.preventDefault();

    var changes = [];
    var isAutor = false;
    var isCompany = false;
    var inFeeList = false;
    var inLicenseList = false;
    var inAddressList = false;
    var inMarketingList = false;
    var vatBool = false;
    
    if($(e.target).find('[name=isAutor]').is(':checked')) {
      isAutor = true;   
    }
    if($(e.target).find('[name=isCompany]').is(':checked')) {
      isCompany = true;   
    }
    if($(e.target).find('[name=inFeeList]').is(':checked')) {
      inFeeList = true;   
    }
    if($(e.target).find('[name=inLicenseList]').is(':checked')) {
      inLicenseList = true;   
    }
    if($(e.target).find('[name=inAddressList]').is(':checked')) {
      inAddressList = true;   
    }
    if($(e.target).find('[name=inMarketingList]').is(':checked')) {
      inMarketingList = true;   
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
      displayName: $(e.target).find('[name=displayName]').val(),  
      salutation: $(e.target).find('[name=salutation]').val(),
      isAutor: isAutor, 
      isCompany: isCompany,
      inFeeList: inFeeList,
      inLicenseList: inLicenseList,
      inAddressList: inAddressList,
      inMarketingList: inMarketingList,
      company: $(e.target).find('[name=company]').val(),
      co: $(e.target).find('[name=co]').val(),
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
      vatNo: $(e.target).find('[name=vatNo]').val(),
      authorImage: $(e.target).find('[name=authorImage]').val(),
      authorBio: $(e.target).find('[name=authorBio]').val(),
      notes: $(e.target).find('[name=notes]').val(),
      changes: changes,
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    };
    
    Meteor.call('newAuthor', author, function(error, result) {
      if (result) {
        var authorId = result;
        Router.go('acp.ad.show', {_id: authorId});
      } else {
        Router.go('acp.ad.list');
      }      
    });
    
    
  }  
});