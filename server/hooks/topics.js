Topics.after.insert(function(userId, doc) {
  Meteor.defer(function() {
    Meteor.users.find().forEach(function (user) {
      if (user.profile.locale) {
        i18n.setLanguage(user.profile.locale);
      }
      var url = Router.url('topics.show', doc);
      Email.send({
        to: user.emails[0].address, 
        from: orion.config.get('MAIL_FROM'), 
        subject: i18n('emails.newTopic.subject'), 
        text: i18n('emails.newTopic.text', user.profile.name, url)
      });
    });
  });
});