//@since 0.7.7
Books.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;}, // debug
});

Authors.allow({
  insert: function(){return true;},
  update: function(){return true;}
});

Sales.allow({
  insert: function(){return true;}
});

SalesPerYear.allow({
  insert: function(){return true;}
});

Stock.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;}
});

//@since 0.7.8
Conditions.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;}
});