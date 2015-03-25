Meteor.publish('getUserList', function() {
  return Meteor.users.find();
});

Meteor.publish('getSingleUser', function(userId) {
  return Meteor.users.find({_id: userId});
});