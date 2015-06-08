Meteor.methods({
  resendEmail: function (userId) {
    check(userId, String);
    return Accounts.sendVerificationEmail(userId);
  }
});