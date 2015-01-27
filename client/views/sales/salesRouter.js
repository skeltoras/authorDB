StatsController = RouteController.extend({
  template: 'salesShow',
  yieldRegions: {
    'bookShowSidebar': {to: 'sidebar'}
  }
});

Router.route('/stats/show/:_id', {
  name: 'stats.show',
  controller: 'StatsController',
  waitOn: function () {
  },
  data: function () {
    return Books.findOne({_id: this.params._id});
  },
  action: function () {
    if (!this.ready()) {
      this.render('Loading');
    } else {
      this.render(); 
    } 
  }  
});