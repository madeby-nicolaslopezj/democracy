Questions.attachSchema(new SimpleSchema({
  topicId: orion.attribute('hasOne', {
    type: String,
    label: orion.helpers.getTranslation('questions.schema.topic')
  }, {
    collection: Topics,
    titleField: 'title',
    publicationName: 'hasOne.questions.topic'
  }),
  title: {
    type: String,
    label: orion.helpers.getTranslation('questions.schema.title')
  },
  createdAt: orion.attribute('createdAt')
}));

Questions.helpers({
  userVoteIs: function (userId, option) {
    check(userId, String);
    var vote = Votes.findOne({ questionId: this._id, userId: userId });
    return vote && vote.option === option;
  }
});