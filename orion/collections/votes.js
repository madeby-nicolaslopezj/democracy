Votes.attachSchema(new SimpleSchema({
  userId: {
    type: String,
    custom: function() {
      if (this.userId !== this.value) {
        return 'notAllowed';
      }
      var user = Meteor.users.findOne(this.userId);
      if (!user.isVerified()) {
        return 'mustVerify';
      }
    }
  },
  questionId: {
    type: String,
    custom: function() {
      if (Meteor.isClient && Questions.find(this.value).count() !== 1) {
        return 'questionNotExists';
      }
      if (Votes.find({ questionId: this.value, userId: this.field('userId').value }).count() !== 0) {
        return 'alreadyVoted';
      }
      var question = Questions.findOne(this.value);
      var topic = Topics.findOne(question.topicId);
      if (topic && topic.hidden) {
        return 'topicHidden';
      }
    }
  },
  option: {
    type: String,
    allowedValues: ['yes', 'no', 'abstention']
  },
  createdAt: orion.attribute('createdAt')
}));

Tracker.autorun(function () {
  var questionNotExists = i18n('errors.questionNotExists');
  var alreadyVoted = i18n('errors.alreadyVoted');
  var mustVerify = i18n('errors.mustVerify');
  var topicHidden = i18n('errors.topicHidden');
  SimpleSchema.messages({
    questionNotExists: questionNotExists,
    alreadyVoted: alreadyVoted,
    mustVerify: mustVerify,
    topicHidden: topicHidden
  })
});