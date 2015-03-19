//@since v0.10.4

//-- template helpers                            
Template.version.helpers({
  getVersion: function(){
    return version;
  }
});

//-- template helpers                            
Template.versionDetail.helpers({
  getVersion: function(){
    return versionDetail;
  },
  getMeteorVersion: function() {
    return versionMeteor;
  }
});