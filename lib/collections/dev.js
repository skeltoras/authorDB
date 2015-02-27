//@since v0.10.4
Todos = new Meteor.Collection('todos');

Todos.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;}
});

Versions = new Meteor.Collection('versions');

Versions.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;}
});