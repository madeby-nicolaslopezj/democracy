Template.home.onCreated(function() {
  this.subscribe('home');
})

Template.home.helpers({
  topics: function() {
    return Topics.find({ hidden: { $ne: true } }, { sort: { createdAt: -1 } });
  }
});

Template.home.onCreated(function() {
  if (Accounts._verifyEmailToken) {
    Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
      if (err != null) {
        if (err.message = 'Verify email link expired [403]') {
          alert(i18n('errors.emailLinkExpired'));
        }
      }
    });
  }
});