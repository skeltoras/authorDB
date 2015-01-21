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
/*
if (Authors.find().count() === 0) {
  Authors.insert({
    title: 'Herr',
    firstName: 'Erster Test',
    lastName: 'Autor',
    vatBool: false,
    isAutor: true,
    isActive: false,
  });
  Authors.insert({
    title: 'Frau',
    firstName: 'Zweite Test',
    lastName: 'Autorin',
    vatBool: false,
    isAutor: true,
    isActive: false,
  });
};

if (Books.find().count() === 0) {
  Books.insert({
    bookTitle: 'Titel 1',
    bookSubtitle: '',
    bookSeries: ''
  });
  Books.insert({
    bookTitle: 'Titel 2',
    bookSubtitle: 'Untertitel 1',
    bookSeries: ''
  });
};
*/