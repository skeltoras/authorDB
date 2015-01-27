Uploads = new FS.Collection("uploads", {
  stores: [new FS.Store.FileSystem("uploads")]
});

Uploads.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;}
});

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

Images.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;}
});