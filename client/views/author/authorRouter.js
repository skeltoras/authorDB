AuthorsController = RouteController.extend({
});

// Autoren    
Router.route('/authors', function () {
  this.render('authorList', {
    data: function() {                                                                             
      Session.set('sidebar', true);                                                                
    }  
  });
  this.render('authorsSidebar', {to: 'sidebar'});
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
  this.render('authorSidebar', {to: 'sidebar'});
}, {
  name: 'author.show',
  controller: 'AuthorsController'
});

Router.route('/author/billings/:_id', function (){ 
  this.render('authorBillings', {
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
  name: 'author.billings',
  controller: 'AuthorsController'
});

Router.route('/author/billing/:_id/:year', function (){ 
  this.render('authorBilling', {
    data: function () {
      Session.set('sidebar', false);
      return Billings.findOne({authorId: this.params._id, year: this.params.year})
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

Router.route('/author/billing/:_id/:year/print', function (){ 
  this.render('authorBillingPrint', {
    data: function () {
      Session.set('sidebar', false);
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'author.billing.print',
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
  this.render('authorSidebar', {to: 'sidebar'});
},{
  name: 'author.edit',
  controller: 'AuthorsController'
});

//@since v0.10.3
Router.route('/author/changes/:_id', function (){ 
  this.render('authorChangelog', {
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
  this.render('authorSidebar', {to: 'sidebar'});
}, {
  name: 'author.changes',
  controller: 'AuthorsController'
});