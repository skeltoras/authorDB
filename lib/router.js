Router.configure({
  layoutTemplate: 'global',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', function () {
  this.render('dashboard');
});

Router.route('/login', function () {
  //$('body').addClass('auth');
  //this.layout('layoutAuth');
  this.render('auth');
});

Router.route('/logout', function () {
  //$('body').addClass('auth');
  this.render('auth');
});

// Verträge
Router.route('/vertraege', function () {
  this.render('contractList');
});

Router.route('/vertraege/neu', function () {
  this.render('contractNew');
});   

Router.route('/vertraege/test', function () {
  this.render('contractTest');
});   

Router.route('/vertrag/show/:_id', function () {
  this.render('contractShow', {
    data: function () {
      return Contracts.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
});

Router.route('/vertrag/edit/:_id', function () {
  this.render('contractEdit', {
    data: function () {
      return Contracts.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
});

// Verkäufe
Router.route('/sales/upload', function () {
  this.render('salesUpload');
});

/*
Router.route('/upload', function () {
  this.render('devUpload');
});
*/
Router.route('/test', function () {
  this.render('test');
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