Topics = new orion.collection('topics', {
  singularName: orion.helpers.getTranslation('topics.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('topics.pluralName'), // The name of more than one of this items
  title: orion.helpers.getTranslation('topics.title'), // The title of the page
  link: {
    title: orion.helpers.getTranslation('topics.title')
  },
  tabular: {
    columns: [
      { data: 'title', title: orion.helpers.getTranslation('topics.schema.title') },
      {
        data: 'slug', 
        title: orion.helpers.getTranslation('topics.schema.slug'),
        render: function(val, type, doc) {
          return '<a href="' + Router.path('topics.show', doc) + '">' + Router.path('topics.show', doc) + '</a>';
        }
      }
    ]
  }
});

Questions = new orion.collection('questions', {
  singularName: orion.helpers.getTranslation('questions.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('questions.pluralName'), // The name of more than one of this items
  title: orion.helpers.getTranslation('questions.title'), // The title of the page
  link: {
    title: orion.helpers.getTranslation('questions.title')
  },
  tabular: {
    columns: [
      { data: 'title', title: orion.helpers.getTranslation('questions.schema.title') }
    ]
  }
});

Votes = new Meteor.Collection('votes');
Votes.attachRoles('collections.votes');