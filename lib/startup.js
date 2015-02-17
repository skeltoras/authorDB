Meteor.startup(function () {
  if(Meteor.isClient) {
    //@since v0.3
    SimpleSchema.debug = true
  }
  
  if(Meteor.isServer){
    //@since v0.7.9
    setCounter('billingNo', 0); //debug
  }
}); 