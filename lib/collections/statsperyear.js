SalesPerYear = new Mongo.Collection('salesperyear');

SalesPerYear.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;}
});