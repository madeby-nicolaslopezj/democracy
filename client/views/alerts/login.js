Template.alertsLogin.onCreated(function() {
  Session.set('hideResendEmail', false);
})

Template.alertsLogin.helpers({
  hide: function() {
    return Session.get('hideResendEmail');
  }
});

Template.alertsLogin.events({
  'click .btn-resend': function() {
    Meteor.call('resendEmail', Meteor.userId());
    Session.set('hideResendEmail', true);
  }
});