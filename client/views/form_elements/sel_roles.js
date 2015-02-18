//@since 0.9.1
Template.listRoles.helpers({
  listRoles: function() {
    var listItems = Meteor.roles.find({}).fetch();
    var listItem = [];
    listItems.forEach(function(role){
      listItem += ['<option value="' + role._id + '">' + role.name + '</option>'];
    }); 
    return listItem;  
  }
});