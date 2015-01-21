Meteor.startup(function () {
  if(Meteor.isClient) {
    //@since v0.3
    SimpleSchema.debug = true
  }
  
  if(Meteor.isServer){
  }
});