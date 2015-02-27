//@since v0.10.4

//-- template created functions
Template.devTodos.created = function(){
};

//-- template destroyed functions
Template.devTodos.destroyed = function(){
};

//-- template rendered functions
Template.devTodos.rendered = function(){
  //$("[name='toggleFinished']").bootstrapSwitch();
};

//-- template helpers                            
Template.devTodos.helpers({
  getTodos: function() {
    var currVersion = Session.get('currVersion');
    return Todos.find({v: currVersion}).fetch();
  },
  getVersion: function() {
    return Session.get('currVersion');
  }
});

//-- template events
Template.devTodos.events({
  'keypress': function(e) {
    if (e.which == 13) {
      //e.preventDefault();
      e.stopPropagation();
      var v = Session.get('currVersion');
      var content = e.currentTarget.value;
      if(content) {
        Todos.insert({v: v, content: content, active: true, finished: false});
        e.currentTarget.value = '';
      }  
    }
  },
  'click .toggleFinished': function(e) {
    var todoId = e.currentTarget.id;
    if(e.currentTarget.checked){
      Todos.update(todoId, {$set: {active: false, finished: true}});
    } else {
      Todos.update(todoId, {$set: {active: true, finished: false}});
    }
    //console.log(e);
  },
  'click .deleteTodo': function(e) {
    var todoId = e.currentTarget.id;
    Todos.remove({_id: todoId});
  }
});