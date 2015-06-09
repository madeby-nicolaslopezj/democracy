Template.topicsShow.onCreated(function() {
  this.subscribe('topics.show', Router.current().params.slug);
});

Template.topicsShow.onRendered(function() {
  var count = 0
  var func = function() {
    console.log(count);
    if (window.FB) {
      console.log('hay')
      Meteor.setTimeout(function() {
        window.FB.XFBML.parse(document.body);
      }, 300);
    } else if (count < 30) {
      console.log('repetir')
      count++;
      Meteor.setTimeout(func, 40);
    }
  }
  func();
});

Template.topicsShow.helpers({
  topic: function() {
    return Topics.findOne({ slug: Router.current().params.slug })
  },
  getCount: function(option) {
    var count = Counts.get('questions.' + this._id + '.votes.' + option);
    if (count == 1) {
      return '1 ' + i18n('votes.singularName');
    } else {
      return count + ' ' + i18n('votes.pluralName');
    }
  },
  hasQuestions: function() {
    return this.questions().count() !== 0;
  }
});

Template.topicsShow.events({
  'change [type="radio"]': function(event) {
    var vote = Votes.findOne({ questionId: this._id, userId: Meteor.userId() });
    if (vote) {
      Votes.update(vote._id, { $set: { option: $(event.currentTarget).val() } });
    } else {
      Votes.insert({ option: $(event.currentTarget).val(), questionId: this._id, userId: Meteor.userId() })
    }
  }
});