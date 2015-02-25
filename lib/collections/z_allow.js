//@since 0.7.7
Books.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});

Authors.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});

Sales.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});

SalesPerYear.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});

Stock.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});

//@since 0.7.8
Conditions.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});

//@since 0.8.3
Entries.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});

//@since 0.9.6
Billings.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});