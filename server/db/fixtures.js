//@since 0.2.0
if (Meteor.users.find().count() === 0) {
  userId = Accounts.createUser({
    username: 'Skeltoras',
    email: 'dev@skeltoras.de',
    password: 'test',
    //@since 0.9.0
    profile: {
      first_name: "Simon",
      last_name: "Knipping",
      nickname: "Skeltoras"
    },
  });
  Roles.addUsersToRoles(userId, 'admin');
};