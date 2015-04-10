//@since v1.0.2

//-- template onCreated functions
Template.baAdSidebar.onCreated(function () { 
});

//-- template onDestroyed functions
Template.baAdSidebar.onDestroyed(function () {
});

//-- template onRendered functions
Template.baAdSidebar.onRendered(function () {
});

//-- template helpers
Template.baAdSidebar.helpers({ 
});

//-- template events
Template.baAdSidebar.events({ 
  //@since v0.8.3
  'click a.showContact': function(e){
    e.preventDefault();
    var authorId = this._id;
    Router.go('ba.ad.show', {_id: authorId});
  },
  'click a.editContact': function(e){
    e.preventDefault();
    var authorId = this._id;
    Router.go('ba.ad.edit', {_id: authorId});
  },
  'click a.billingContact': function(e){
    e.preventDefault();
    $('#selectYear').modal('toggle');
  }
});