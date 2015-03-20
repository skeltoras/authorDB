//@since v0.11.0

//-- template onCreated functions
Template.adSidebar.onCreated(function () { 
});

//-- template onDestroyed functions
Template.adSidebar.onDestroyed(function () {
});

//-- template onRendered functions
Template.adSidebar.onRendered(function () {
});

//-- template helpers
Template.adSidebar.helpers({ 
});

//-- template events
Template.adSidebar.events({ 
  //@since v0.8.3
  'click a.showContact': function(e){
    e.preventDefault();
    var authorId = this._id;
    Router.go('acp.ad.show', {_id: authorId});
  },
  'click a.editContact': function(e){
    e.preventDefault();
    var authorId = this._id;
    Router.go('acp.ad.edit', {_id: authorId});
  },
  'click a.billingContact': function(e){
    e.preventDefault();
    $('#selectYear').modal('toggle');
  }
});