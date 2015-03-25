UploadController = RouteController.extend({
  template: 'uploads'
});

Router.route('/uploads', {
  name: 'upload',
  controller: 'UploadController',
  waitOn: function () {
  },
  data: function () {
  },
  action: function () {
    if (!this.ready()) {
      this.render('Loading');
    } else {
      this.render(); 
    } 
  }  
});