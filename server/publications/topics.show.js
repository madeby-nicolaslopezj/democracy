Meteor.publishComposite('topics.show', function(topicSlug) {
  check(topicSlug, String);
  return {
    find: function() {
      return Topics.find({ slug: topicSlug });
    },
    children: [{
      find: function(topic) {
        return topic.questions();
      },
      children: [{
        find: function(question) {
          return Votes.find({questionId: question._id, userId: this.userId});
        }
      }, {
        find: function(question) {
          Counts.publish(this, 'questions.' + question._id + '.votes.yes', Votes.find({ questionId: question._id, option: 'yes' }));
          Counts.publish(this, 'questions.' + question._id + '.votes.no', Votes.find({ questionId: question._id, option: 'no' }));
          Counts.publish(this, 'questions.' + question._id + '.votes.abstention', Votes.find({ questionId: question._id, option: 'abstention' }));
        }
      }]
    }]
  }
})
