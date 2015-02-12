Meteor.methods({
  //@since 0.8.4
  addBookEntries: function(entryData) {
    Entries.insert(entryData);
  },
  editBookEntries: function(entryData, entryId) {
    Entries.update({_id: entryId}, {$set: entryData});
  },
  getSingleEntryData: function(entryId) {
    return Entries.findOne({_id: entryId}); 
  },
  deleteBookEntries: function(entryId) {
    Entries.remove({_id: entryId});
  }
})