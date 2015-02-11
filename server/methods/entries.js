Meteor.methods({
  addBookEntries: function(entryData) {
    Entries.insert(entryData);
  }
})