Stats = new Mongo.Collection('stats');

Stats.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;}
});