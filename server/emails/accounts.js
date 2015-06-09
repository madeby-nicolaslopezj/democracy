// (server-side)
Meteor.startup(function() {
  // By default, the email is sent from no-reply@meteor.com. If you wish to receive email from users asking for help with their account, be sure to set this to an email address that you can receive email at.
  Accounts.emailTemplates.from = orion.dictionary.get('basic.title') + ' <' + orion.config.get('MAIL_FROM') + '>';

  // The public name of your application. Defaults to the DNS name of the application (eg: awesome.meteor.com).
  Accounts.emailTemplates.siteName = orion.dictionary.get('basic.title');

  // A Function that takes a user object and returns a String for the subject line of the email.
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    if (user.profile.locale) {
      i18n.setLanguage(user.profile.locale);
    }
    return i18n('emails.verifyEmail.subject');
  };

  Accounts.emailTemplates.verifyEmail.html = function(user, url) {
    if (user.profile.locale) {
      i18n.setLanguage(user.profile.locale);
    }
    return i18n('emails.verifyEmail.html', orion.dictionary.get('basic.title'), user.profile.name, url);
  };

  Accounts.emailTemplates.resetPassword.subject = function(user) {
    if (user.profile.locale) {
      i18n.setLanguage(user.profile.locale);
    }
    return i18n('emails.resetPassword.subject');
  };

  Accounts.emailTemplates.resetPassword.text = function(user, url) {
    if (user.profile.locale) {
      i18n.setLanguage(user.profile.locale);
    }
    return i18n('emails.resetPassword.text', user.profile.name, url);
  };

});