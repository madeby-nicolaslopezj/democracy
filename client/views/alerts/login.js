Template.alertsLogin.events({
  'click .btn-resend': function() {
    Meteor.call('resendEmail', Meteor.userId());
  }
});