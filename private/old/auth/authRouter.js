//@since v0.11.7
AuthController = RouteController.extend({
  layoutTemplate: 'authLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

/** AUTH **/
Router.route('/login', function (){ 
  this.render('authLogin');
}, {
  name: 'auth.login',
  controller: 'AuthController'
});

/** AUTH **/
Router.route('/logout', function (){ 
  this.render('authLogout');
}, {
  name: 'auth.logout',
  controller: 'AuthController'
});