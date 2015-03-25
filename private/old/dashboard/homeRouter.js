//@since v0.11.7
HomeController = RouteController.extend({
  layoutTemplate: 'globalLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

/** Home **/
Router.route('/', function (){ 
  this.render('dashboard');
}, {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/home', function (){ 
  this.render('dashboard');
}, {
  name: 'home.home',
  controller: 'HomeController'
});