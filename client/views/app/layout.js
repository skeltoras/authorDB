//@since v0.9.1

//-- template created functions
Template.global.created = function(){
  Session.set('debug', false);
  Session.set('sidebar', false); 
};

//-- template destroyed functions
Template.global.destroyed = function(){
};

//-- template rendered functions
Template.global.rendered = function(){
};

//-- template helpers
Template.global.helpers({
  showDebug: function(){
    var debug = true;   
    if(debug == true){
      var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
      var size = x + ' × ' + y;
      Session.set('debug', size);     
    } else {
      Session.set('debug', false);
    }
    return Session.get('debug');
  },
  checkSidebar: function() {
    var check = Session.get('sidebar');
    return check;
  }
});

//-- template helpers
Template.globalDashboard.helpers({
  showDebug: function(){
    var debug = true;
    if(debug == true){
      var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
      var size = x + ' × ' + y;
      return size;
    }
  }
});

//-- template helpers
Template.globalAuth.helpers({
  showDebug: function(){
    var debug = true;
    if(debug == true){
      var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
      var size = x + ' × ' + y;
      return size;
    }
  }
});

//-- template events
Template.global.events({
});