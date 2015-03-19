//@since v0.11.0
AcpController = RouteController.extend({
  layoutTemplate: 'acpLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

/** Home ACP **/
Router.route('/acp', function (){ 
  this.render('acpHome');
}, {
  name: 'acp.home',
  controller: 'AcpController'
});

/** Authors **/
Router.route('/acp/ad/list', function (){ 
  this.render('adList');
}, {
  name: 'acp.ad.list',
  controller: 'AcpController'
});

Router.route('/acp/ad/new', function (){ 
  this.render('adNew');
}, {
  name: 'acp.ad.new',
  controller: 'AcpController'
});

/** Books **/
Router.route('/acp/bo/list', function (){ 
  this.render('boList');
}, {
  name: 'acp.bo.list',
  controller: 'AcpController'
});

Router.route('/acp/bo/new', function (){ 
  this.render('boNew');
}, {
  name: 'acp.bo.new',
  controller: 'AcpController'
});

Router.route('/acp/bo/show/:_id', function (){ 
  this.render('boShow', { 
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
  name: 'acp.bo.show',
  controller: 'AcpController'
});

Router.route('/acp/bo/edit/:_id', function () {
  this.render('boEdit', {
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
  name: 'acp.bo.edit',
  controller: 'AcpController'
});

Router.route('/acp/bo/stock/:_id', function () {
  this.render('boStock', {
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
  name: 'acp.bo.stock',
  controller: 'AcpController'
});

Router.route('/acp/bo/sales/:_id', function () {
  this.render('boSales', {
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
  name: 'acp.bo.sales',
  controller: 'AcpController'
});

/** Uploads **/
Router.route('/acp/upl', function (){ 
  this.render('uploads');
}, {
  name: 'acp.upl',
  controller: 'AcpController'
});