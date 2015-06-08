Topics.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: orion.helpers.getTranslation('topics.schema.title')
  },
  description: {
    type: String,
    label: orion.helpers.getTranslation('topics.schema.description')
  },
  slug: {
    type: String,
    label: orion.helpers.getTranslation('topics.schema.slug'),
    unique: true,
    regEx: /^[a-z0-9A-Z_-]+$/
  },
  content: orion.attribute('froala'),
  hidden: {
    type: Boolean,
    label: orion.helpers.getTranslation('topics.schema.hidden')
  },
  createdAt: orion.attribute('createdAt')
}));

Topics.helpers({
  questions: function () {
    return Questions.find({ topicId: this._id });
  }
});