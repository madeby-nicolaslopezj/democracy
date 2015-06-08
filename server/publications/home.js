Meteor.publishComposite('home', {
  find: function() {
    return Topics.find({ hidden: { $ne: true } });
  }
})