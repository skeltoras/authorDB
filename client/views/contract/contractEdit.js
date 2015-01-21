//-- template created functions
Template.contractEdit.created = function(){ 
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
Template.contractEdit.destroyed = function(){
};

//-- template rendered functions
Template.contractEdit.rendered = function(){
  $(document).ready(function() { $("#authors").select2(); });
  $("[name='authorReading']").bootstrapSwitch();
  var boxes = this.findAll('.form-control');
  boxes.forEach(function(box){
    Session.set(box.name, box.value);
  });
};

//-- template helpers
Template.contractEdit.helpers({
});

//-- template events
Template.contractEdit.events({
  'change .form-control': function(e) {   
    var sessionChangesAdd = [];
    var sessionChanges = Session.get('changesContent');
    var getName = e.currentTarget.name;
    var getLabel = e.currentTarget.labels[0].innerText;
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
          sessionChangesAdd = sessionChanges + 'Bei <i>' + getLabel + '</i> den Wert' + getOldValue + ' gelöscht<br>';
        }  
      } else {
        sessionChangesAdd = sessionChanges + 'Bei <i>' + getLabel + '</i> ' + getNewValue + ' hinzugefügt<br>';  
      }
    }
    Session.set('changesContent', sessionChangesAdd);
  },
  'click .checkFee': function(e) {   
    var sessionChangesAdd = [];
    var sessionChanges = Session.get('changesContent');
    var getName = e.currentTarget.name;
    var getLabel = e.currentTarget.labels[0].innerText;
    var isChecked = e.currentTarget.checked;
    if(isChecked) {
      if(getName=="feeIsGross"){
        document.getElementById("feeIsNet").checked = false;
      } else if(getName=="feeIsNet"){
        document.getElementById("feeIsGross").checked = false;
      }
      sessionChangesAdd = sessionChanges + '<i>' + getLabel + '</i> auf Ja gesetzt<br>';
    } else {
      sessionChangesAdd = sessionChanges + '<i>' + getLabel + '</i> auf Nein gesetzt<br>';
    }
    Session.set('changesContent', sessionChangesAdd);      
  },  
  // save form on submit
  'submit form': function(e) {
    e.preventDefault();
    
    var contractId = this._id;
    var authors = [];
    var feeIsGross = false;
    var feeIsNet = false;
    var feeIsOther = false;
    var authorReading = false;
    var sessionChanges = Session.get('changesContent');
    var changes = [];
    
    $('#authors :selected').each(function(i, selected){
      authors[i] = $(selected).text();
    });

    if($(e.target).find('[name=feeIsGross]').is(':checked')) {
      feeIsGross = true;   
    } else {
      feeIsGross = false;
    }
    if($(e.target).find('[name=feeIsNet]').is(':checked')) {
      feeIsNet = true;   
    } else {
      feeIsNet = false;
    }
    if($(e.target).find('[name=feeIsOther]').is(':checked')) {
      feeIsOther = true;   
    } else {
      feeIsOther = false;
    }
    if($(e.target).find('[name=authorReading]').is(':checked')) {
      authorReading = true;   
    } else {
      authorReading = false;
    }
    
    if(sessionChanges) {
      changes = {
        date: new Date().getTime(),
        content: 'Vertrag geändert. <br>' + sessionChanges
      };
    }
    
    var contract = {
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
      updatedAt: new Date().getTime()
    };
    console.log(contract);

    Meteor.call('updateContract', contract, contractId, changes, function(error, result) {
      //if (error)
        //return throwError(error.reason);
    });    
    Session.set('changesContent', '');
  }  
});