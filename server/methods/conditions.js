Meteor.methods({
  newCondition: function(condition) {
    Conditions.insert(condition);
  }
})