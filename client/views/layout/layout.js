Template.layout.events({
  'click .btn-logout': function() {
    Meteor.logout()
  }
});

Template.layout.onCreated(function() {
  this.subscribe('pages');
})

Template.layout.helpers({
  pages: function () {
    return orion.pages.collection.find({}, { sort: { title: 1 } });
  }
});