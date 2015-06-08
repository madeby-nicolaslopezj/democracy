Votes.attachSchema(new SimpleSchema({
  userId: {
    type: String,
    custom: function() {
      if (this.userId !== this.value) {
        return 'notAllowed';
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
  SimpleSchema.messages({
    questionNotExists: questionNotExists,
    alreadyVoted: alreadyVoted
  })
});