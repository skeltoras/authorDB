AuthorsController = RouteController.extend({
  yieldRegions: {
    'bookShowSidebar': {to: 'sidebar'}
  }
});

// Autoren    
Router.route('/authors', function () {
  this.render('authorList', {
    data: function() {                                                                             
      Session.set('sidebar', false);                                                                
    }  
  });
},{
  name: 'authors.list',
  controller: 'AuthorsController'
});

Router.route('/author/new', function () {
  this.render('authorNew', {
    data: function() {                                                                             
      Session.set('sidebar', false);                                                               
    }
  });
}, {
  name: 'author.new',
  controller: 'AuthorsController'
});   

Router.route('/author/show/:_id', function (){ 
  this.render('authorShow', {
    data: function () {
      Session.set('sidebar', true);
      Session.set('authorId', this.params._id);
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
      Session.set('sidebar', true);
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
      Session.set('sidebar', true);
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