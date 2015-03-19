//@since v0.1.1
Router.configure({
  layoutTemplate: 'global',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.onBeforeAction('loading');

/*
//@since 0.2.0
Router.configure({
  layoutTemplate: 'global',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', function () {
  $('body').removeClass('auth');
  this.layout('globalDashboard');
  this.render('dashboard');
});

Router.route('/login', function () {
  $('body').addClass('auth');
  this.layout('globalAuth');
  this.render('auth');
});

Router.route('/logout', function () {
  $('body').addClass('auth');
  this.layout('globalAuth');
  this.render('auth');
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()){
      this.render(this.loadingTemplate);
    } else {
      this.redirect('/login');
      this.next();
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin);
*/