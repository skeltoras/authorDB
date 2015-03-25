ListsController = RouteController.extend({
  yieldRegions: {
    'bookShowSidebar': {to: 'sidebar'}
  }
});

// Listen    
Router.route('/lists', function () {
  this.render('listsList', {
    data: function() {                                                                             
      Session.set('sidebar', false);                                                                
    }  
  });
},{
  name: 'lists.list',
  controller: 'ListsController'
});

Router.route('/list/billings', function () {
  this.render('listBillings', {
    data: function() {                                                                             
      Session.set('sidebar', false);                                                               
    }
  });
}, {
  name: 'list.billings',
  controller: 'ListsController'
});