//@since v0.11.0

/** listAffiliates - Select2 list for template boNew **/

//-- template onCreated functions
Template.listAffiliates.onCreated(function () {
});

//-- template onDestroyed functions
Template.listAffiliates.onDestroyed(function () {
});

//-- template onRendered functions
Template.listAffiliates.onRendered(function () {
  $("#affiliateData").select2();
});

//-- template helpers
Template.listAffiliates.helpers({
  //@since v0.8.0
  listAffiliates: function(){
    var listItems = Authors.find({}, {sort: {lastName: 1}});
    var listItem = [];
    listItems.forEach(function(affiliate){
      var affiliateId = affiliate._id;
      var affiliateName = affiliate.firstName + ' ' + affiliate.lastName;
      listItem += ['<option value="' + affiliateId + '">' + affiliateName + '</option>']; 
    }); 
    return listItem;
  }
});

//-- template events
Template.listAffiliates.events({
});


/** editAffiliates - Select2 list for template boEdit **/ 

//-- template onCreated functions
Template.editAffiliates.onCreated(function () {
});

//-- template onDestroyed functions
Template.editAffiliates.onDestroyed(function () {
});

//-- template onRendered functions
Template.editAffiliates.onRendered(function () {
  $("#affiliateData").select2();
});

//-- template helpers 
Template.editAffiliates.helpers({
  //@since v0.8.0
  editAffiliates: function(){
    var listItems = Authors.find({}, {sort: {lastName: 1}});
    var listItem = [];
    var getBookData = Books.findOne({_id: this._id}).affiliateData;
    var getBookAuthors = [];
    
    if(getBookData){
      listItems.forEach(function(affiliate){
        var affiliateId = affiliate._id;
        var affiliateName = affiliate.firstName + ' ' + affiliate.lastName;
        var testFor = false;
        
        for (var i in getBookData) {
          if (getBookData.hasOwnProperty(i)) {
            getBookAuthors = getBookData[i].authorName;          
            if(affiliateName == getBookAuthors){
              listItem += ['<option value="' + affiliateId + '" selected>' + affiliateName + '</option>'];
              testFor = true;
              break;
            }
          }
        }      
        if(!testFor) {
          listItem += ['<option value="' + affiliateId + '">' + affiliateName + '</option>'];  
        }
      });
    } else {
      listItems.forEach(function(affiliate){
        var affiliateId = affiliate._id;
        var affiliateName = affiliate.firstName + ' ' + affiliate.lastName;
        listItem += ['<option value="' + affiliateId + '">' + affiliateName + '</option>']; 
      });
    }
     
    return listItem;
  }
});

//-- template events
Template.editAffiliates.events({
});