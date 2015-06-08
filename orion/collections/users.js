var endsWith = orion.config.get('EMAIL_END');

Meteor.users.attachSchema(new SimpleSchema({
  emails: {
    type: [Object]
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    custom: function() {
      if (endsWith && this.value.indexOf(endsWith, this.value.length - endsWith.length) === -1) {
        return 'email-not-ends-with'
      }
    }
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: Object,
    optional: true,
    blackbox: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  }
}));

Tracker.autorun(function () {
  var translation = i18n('errors.emailNotEndsWith', endsWith);
  SimpleSchema.messages({
    'email-not-ends-with': translation
  })
});

Meteor.users.helpers({
  isVerified: function() {
    return this.emails && this.emails[0].verified;
  }
});