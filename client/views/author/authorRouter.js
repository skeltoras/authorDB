AuthorsController = RouteController.extend({
  yieldRegions: {
    'bookShowSidebar': {to: 'sidebar'}
  }
});

// Autoren
Router.route('/authors', function () {
  this.render('authorList');
},{
  name: 'authors.list',
  controller: 'AuthorsController'
});

Router.route('/author/new', function () {
  this.render('authorNew');
}, {
  name: 'author.new',
  controller: 'AuthorsController'
});   

Router.route('/author/show/:_id', function (){ 
  this.render('authorShow', {
    onBeforeAction: function () {                                                                             
      Session.set('authorId', this.params._id);
      this.next();                                                                 
    },  
    data: function () {
      return Authors.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'author.show',
  controller: 'AuthorsController'
});

Router.route('/author/billing/:_id', function (){ 
  this.render('authorBilling', {
    data: function () {
      return Authors.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'author.billing',
  controller: 'AuthorsController'
});

Router.route('/author/edit/:_id', function () {
  this.render('authorEdit', {
    data: function () {
      return Authors.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
},{
  name: 'author.edit',
  controller: 'AuthorsController'
});