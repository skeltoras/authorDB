//since 0.2.0
if (Meteor.users.find().count() === 0) {
  userId = Accounts.createUser({
    username: 'Skeltoras',
    email: 'dev@skeltoras.de',
    password: 'test'
  });
};