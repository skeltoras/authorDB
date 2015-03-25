//@since 0.2.0
if (Meteor.users.find().count() === 0) {
  //@ since v0.11.7
  headAdmin = Accounts.createUser({
    username: 'Skeltoras',
    email: 'simon.knipping@info3.de',
    password: 'Sephi666',
    profile: {
      first_name: "Simon",
      last_name: "Knipping",
      nickname: "Skeltoras"
    },
  });
  Roles.addUsersToRoles(headAdmin, ['admin', 'i3book', 'i3magazin', 'authorbook', 'authormagazin']);
  
  secondAdmin = Accounts.createUser({
    username: 'Felix',
    email: 'felix.hau@info3.de',
    password: 'cameron1970',
    profile: {
      first_name: "Felix",
      last_name: "Hau",
      nickname: "Felix"
    },
  });
  Roles.addUsersToRoles(secondAdmin, ['admin', 'i3book', 'i3magazin', 'authorbook', 'authormagazin']);
  
  testAdmin = Accounts.createUser({
    username: 'Test',
    email: 'dev@info3.de',
    password: 'test',
    profile: {
      first_name: "Test",
      last_name: "Admin",
      nickname: "Test"
    },
  });
  Roles.addUsersToRoles(testAdmin, ['admin', 'i3book', 'i3magazin', 'authorbook', 'authormagazin']);
  
  i3book = Accounts.createUser({
    username: 'i3book',
    email: 'i3book@info3.de',
    password: 'i3book',
    profile: {
      first_name: "Test",
      last_name: "i3book",
      nickname: "i3book"
    },
  });
  Roles.addUsersToRoles(i3book, ['i3book']);
  
  i3magazin = Accounts.createUser({
    username: 'i3magazin',
    email: 'i3magazin@info3.de',
    password: 'i3magazin',
    profile: {
      first_name: "Test",
      last_name: "i3magazin",
      nickname: "i3magazin"
    },
  });
  Roles.addUsersToRoles(i3magazin, ['i3magazin']);
  
  authorbook = Accounts.createUser({
    username: 'authorbook',
    email: 'authorbook@info3.de',
    password: 'authorbook',
    profile: {
      first_name: "Test",
      last_name: "authorbook",
      nickname: "authorbook"
    },
  });
  Roles.addUsersToRoles(authorbook, ['authorbook']);
  
  authormagazin = Accounts.createUser({
    username: 'authormagazin',
    email: 'authormagazin@info3.de',
    password: 'authormagazin',
    profile: {
      first_name: "Test",
      last_name: "authormagazin",
      nickname: "authormagazin"
    },
  });
  Roles.addUsersToRoles(authormagazin, ['authormagazin']);
};