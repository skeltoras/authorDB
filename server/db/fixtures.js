// default user entries
if (Meteor.users.find().count() === 0) {
  userId = Accounts.createUser({
    username: 'Schkeldi',
    email: 'dev@skeltoras.de',
    password: 'test',
    profile: {
      first_name: 'John',
      last_name: 'Doe',
      company: 'ABC',
    }
  });
};