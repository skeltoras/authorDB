//-- template created functions
Template.authorEdit.created = function(){
  Session.set('changesContent', '');
  sessionChanges = [];
  $(document).ready(function() {
    $("input, select, textarea").each(function() {
      var theValue = $(this).val();
      $(this).data("value", theValue);
    });        
  });
};

//-- template destroyed functions
Template.authorEdit.destroyed = function(){
};

//-- template rendered functions
Template.authorEdit.rendered = function(){
  var boxes = this.findAll('.form-control');
  boxes.forEach(function(box){
    Session.set(box.name, box.value);
  });
};

//-- template helpers
Template.authorEdit.helpers({
});

//-- template events
Template.authorEdit.events({
  // set logdata
  'change .form-control': function(e) {   
    var sessionChangesAdd = [];
    var sessionChanges = Session.get('changesContent');
    var getName = e.currentTarget.name;
    var getType = e.currentTarget.type;
    if(getType=='textarea'){
      var getLabel = getName;
    } else {
      var getLabel = e.currentTarget.labels[0].innerText;
    }
    var getOldValue = Session.get(getName);
    var getNewValue = e.currentTarget.value;
    
    if(e.added){
      sessionChangesAdd = sessionChanges + 'Bei <i>' + getLabel + '</i> ' + e.added.text + ' hinzugefügt<br>';  
    } else if(e.removed) {
      sessionChangesAdd = sessionChanges + 'Bei <i>' + getLabel + '</i> ' + e.removed.text + ' entfernt<br>';
    } else {
      if(getOldValue){
        if(getNewValue) {
          sessionChangesAdd = sessionChanges + '<i>' + getLabel + '</i> von ' + getOldValue + ' auf ' + getNewValue + ' geändert<br>';
        } else {
          sessionChangesAdd = sessionChanges + 'Bei <i>' + getLabel + '</i> den Wert ' + getOldValue + ' gelöscht<br>';
        }  
      } else {
        sessionChangesAdd = sessionChanges + 'Bei <i>' + getLabel + '</i> ' + getNewValue + ' hinzugefügt<br>';  
      }
    }
    Session.set('changesContent', sessionChangesAdd);
  },
  // save form on submit
  'submit form': function(e) {
    e.preventDefault();

    var authorId = this._id;
    var sessionChanges = Session.get('changesContent');
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
    
    if(sessionChanges) {
      changes = {
        date: new Date().getTime(),
        content: 'Kontakt geändert. <br>' + sessionChanges
      };
    }
    
    var author = {
      title: $(e.target).find('[name=title]').val(),
      graduate: $(e.target).find('[name=graduate]').val(),
      firstName: $(e.target).find('[name=firstName]').val(), 
      lastName: $(e.target).find('[name=lastName]').val(), 
      salutation: $(e.target).find('[name=salutation]').val(),
      isAutor: isAutor, 
      isCompany: isCompany,
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
      notes: $(e.target).find('[name=notes]').val(),
      updatedAt: new Date().getTime()
    };
    
    Meteor.call('updateAuthor', author, authorId, changes, function(error, result) {
      //if (error)
        //return throwError(error.reason);
    });
    
    Session.set('changesContent', '');
    
    Router.go('author.show', {_id: authorId});
  },
  'click #back': function(e) {
    e.preventDefault();
    var authorId = this._id;    
    Router.go('author.show', {_id: authorId});
  }  
});