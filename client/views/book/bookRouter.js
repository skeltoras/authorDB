BooksController = RouteController.extend({
  yieldRegions: {
    'bookShowSidebar': {to: 'sidebar'}
  }
});

// Bücher
Router.route('/books', function(){
  this.render('bookList', {
    data: function() {                                                                             
      Session.set('sidebar', false);                                                                
    }  
  });
},{
  name: 'books.list',
  controller: 'BooksController'
});

Router.route('/book/new', function () {
  this.render('bookNew', {
    data: function() {                                                                             
      Session.set('sidebar', false);                                                                
    }  
  });
}, {
  name: 'book.new',
  controller: 'BooksController'
});   

Router.route('/book/show/:_id', function (){ 
  this.render('bookShow', { 
    data: function () {
      Session.set('bookId', this.params._id);
      Session.set('sidebar', true);
      return Books.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
  this.render('bookShowSidebar', {to: 'sidebar'});
}, {
  name: 'book.show',
  controller: 'BooksController'
});

Router.route('/book/edit/:_id', function () {
  this.render('bookEdit', {
    data: function () {
      Session.set('sidebar', true);
      return Books.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
  this.render('bookShowSidebar', {to: 'sidebar'});
},{
  name: 'book.edit',
  controller: 'BooksController'
});

Router.route('/book/stock/:_id', function () {
  this.render('bookStock', {
    data: function () {
      Session.set('sidebar', true);
      return Books.findOne({_id: this.params._id});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
  this.render('bookShowSidebar', {to: 'sidebar'});
},{
  name: 'book.stock',
  controller: 'BooksController'
});