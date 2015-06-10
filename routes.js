Router.route('/', {
  name: 'home',
  layoutTemplate: 'layout',
  onAfterAction: function() {
    if (!Meteor.isClient) {
      return;
    }
    SEO.set({
      title: orion.dictionary.get('basic.title'),
      meta: {
        'description': orion.dictionary.get('basic.description')
      },
      og: {
        'title': orion.dictionary.get('basic.title'),
        'description': orion.dictionary.get('basic.description'),
        'image': 'http://5pillarsuk.com/wp-content/uploads/2015/05/democracy.jpg'
      }
    });
  }
})

Router.route('/t/:slug', {
  name: 'topics.show',
  layoutTemplate: 'layout',
  waitOn: function() {
    return Meteor.subscribe('topics.show', this.params.slug);
  },
  onAfterAction: function() {
    if (!Meteor.isClient) {
      return;
    }
    var topic = Topics.findOne({ slug: this.params.slug });
    if (!topic) return;

    SEO.set({
      title: topic.title + ' - ' + orion.dictionary.get('basic.title'),
      meta: {
        'description': topic.description
      },
      og: {
        'title': topic.title + ' - ' + orion.dictionary.get('basic.title'),
        'description': topic.description,
        'image': 'http://5pillarsuk.com/wp-content/uploads/2015/05/democracy.jpg'
      }
    });
  }
})