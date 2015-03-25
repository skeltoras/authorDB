DevController = RouteController.extend({
});

// Autoren    
Router.route('/dev/todos', function () {
  this.render('devTodos', {
    data: function() {                                                                             
      Session.set('sidebar', true);                                                                
    }  
  });
  this.render('todosSidebar', {to: 'sidebar'});
},{
  name: 'dev.todos',
  controller: 'DevController'
});