Meteor.startup(function () {
  if(Meteor.isServer){
    //@since v0.7.9
    setCounter('billingNo', 0); //debug
  }
}); 