//@since v0.11.0
baController = RouteController.extend({
  layoutTemplate: 'baLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  before: function() {
    if(!Roles.userIsInRole(Meteor.userId(), ['i3a-book'])){
      this.redirect('/');      
    }
    this.next();
  }
});

/** Autorenverwaltung Buch **/
Router.route('/ba', function (){ 
  this.render('baHome');
}, {
  name: 'ba.home',
  controller: 'baController'
});

/** Authors **/
Router.route('/ba/ad/list', function (){ 
  this.render('baAdList');
}, {
  name: 'ba.ad.list',
  controller: 'baController'
});

Router.route('/ba/ad/new', function (){ 
  this.render('baAdNew');
}, {
  name: 'ba.ad.new',
  controller: 'baController'
});

Router.route('/ba/ad/show/:_id', function (){ 
  this.render('baAdShow', { 
    data: function () {
      Session.set('authorId', this.params._id);
      return Authors.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'ba.ad.show',
  controller: 'baController'
});

Router.route('/ba/ad/edit/:_id', function () {
  this.render('baAdEdit', {
    data: function () {
      Session.set('authorId', this.params._id);
      return Authors.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
},{
  name: 'ba.ad.edit',
  controller: 'baController'
});

Router.route('/ba/ad/bill/new/:_id', function (){ 
  this.render('baAdBillNew', {
    data: function () {
      Session.set('authorId', this.params._id);
      return Authors.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'ba.ad.bill.new',
  controller: 'baController'
});

Router.route('/ba/ad/bill/show/:_id/:year', function (){ 
  this.render('baAdBillShow', {
    data: function () {
      Session.set('authorId', this.params._id);
      Session.set('billingYear', this.params.year);
      return Billings.findOne({authorId: this.params._id, year: this.params.year})
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'ba.ad.bill.show',
  controller: 'baController'
});

/** Books **/
Router.route('/ba/bo/list', function (){ 
  this.render('baBoList');
}, {
  name: 'ba.bo.list',
  controller: 'baController'
});

Router.route('/ba/bo/new', function (){ 
  this.render('baBoNew');
}, {
  name: 'ba.bo.new',
  controller: 'baController'
});

Router.route('/ba/bo/show/:_id', function (){ 
  this.render('baBoShow', { 
    data: function () {
      Session.set('bookId', this.params._id);
      return Books.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'ba.bo.show',
  controller: 'baController'
});

Router.route('/ba/bo/edit/:_id', function () {
  this.render('baBoEdit', {
    data: function () {
      Session.set('bookId', this.params._id);
      return Books.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
},{
  name: 'ba.bo.edit',
  controller: 'baController'
});

Router.route('/ba/bo/stock/:_id', function () {
  this.render('baBoStock', {
    data: function () {
      Session.set('bookId', this.params._id);
      return Books.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
},{
  name: 'ba.bo.stock',
  controller: 'baController'
});

Router.route('/ba/bo/sales/:_id', function () {
  this.render('baBoSales', {
    data: function () {
      Session.set('bookId', this.params._id)
      return Books.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
},{
  name: 'ba.bo.sales',
  controller: 'baController'
});