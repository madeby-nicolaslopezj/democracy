var community = new Roles.Role('community');

community.allow('collections.votes.insert', function(userId, doc) {
  return doc.userId === userId;
})

community.allow('collections.votes.update', function(userId, doc, fields, modifier) {
  return doc.userId === userId;
})

community.deny('collections.votes.update', function(userId, doc, fields, modifier) {
  return !_.isEqual(fields, ['option']);
});