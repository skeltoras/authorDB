//@since v0.1.1
Router.configure({
  layoutTemplate: 'appLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
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