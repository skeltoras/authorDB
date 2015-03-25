//@since 0.9.1
UsersController = RouteController.extend({
  yieldRegions: {
    'userShowSidebar': {to: 'sidebar'}
  }
});

// Benutzer
Router.route('/users', function(){
  this.render('userList', {
    onBeforeAction: function () {                                                                             
      Meteor.subscribe('userlist');
      this.next();                                                                 
    },  
  });
  this.render('userShowSidebar', {to: 'sidebar'});
},{
  name: 'users.list',
  controller: 'UsersController'
});

Router.route('/user/new', function () {
  this.render('userNew');
}, {
  name: 'user.new',
  controller: 'UsersController'
});   

Router.route('/user/show/:_id', function (){ 
  this.render('userShow', {
    onBeforeAction: function () {                                                                             
      Session.set('userId', this.params._id);
      this.next();                                                                 
    },  
    data: function () {
      return Books.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'user.show',
  controller: 'UsersController'
});

Router.route('/user/edit/:_id', function () {
  this.render('userEdit', {
    data: function () {
      return Books.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
},{
  name: 'user.edit',
  controller: 'UsersController'
});

// Rollen
Router.route('/roles', function(){
  this.render('roleList', {
    onBeforeAction: function () {                                                                             
      Meteor.subscribe('roleslist');
      this.next();                                                                 
    },  
  });
  this.render('userShowSidebar', {to: 'sidebar'});
},{
  name: 'roles.list',
  controller: 'UsersController'
});

Router.route('/role/new', function () {
  this.render('roleNew');
}, {
  name: 'role.new',
  controller: 'UsersController'
});