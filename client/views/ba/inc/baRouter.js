//@since v0.11.0
BaController = RouteController.extend({
  layoutTemplate: 'baLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  before: function() {
    if(!Roles.userIsInRole(Meteor.userId(), ['i3a-book'])){
      this.redirect('/');
    }
  }
});

/** Autorenverwaltung Buch **/
Router.route('/ba', function (){ 
  this.render('dashboard');
}, {
  name: 'ba',
  controller: 'BaController'
});