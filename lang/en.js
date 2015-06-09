i18n.map('en', {
  lib: {
    votes: 'Votes',
    notLoggedInAlert: 'You need to log in',
    login: 'Login',
    verifyEmail: 'You need to verify your email',
    resendVerificationEmail: 'Re-send verification email',
    yes: 'Yes',
    no: 'No',
    abstention: 'Abstention',
    viewTopic: 'Vote',
    login: 'Login',
    logout: 'Logout',
    verifyEmailSent: 'Email sent',
    topicHidden: 'This topic is closed'
  },
  errors: {
    emailNotEndsWith: 'Email must end with {$1}',
    emailLinkExpired: 'Sorry this verification link has expired',
    questionNotExists: 'The question does not exists',
    alreadyVoted: 'The user already voted',
    mustVerify: 'The user must verify the email to vote',
    topicHidden: 'The topic is closed'
  },
  emails: {
    verifyEmail: {
      subject: 'Confirm Your Email Address',
      html: '<h1>{$1}</h1><p>Hello {$2},</p><p>To verify your account email, simply click the link below.</p><p><a href="{$3}">Verify Email</a></p>'
    },
    resetPassword: {
      subject: 'Reset Password',
      text: 'Hello {$1},\n\nTo reset your password, simply click the link below.\n\n{$2}\n\nThanks.\n'
    },
    newTopic: {
      subject: 'New Topic',
      html: '<h1>{$1}</h1><p>Hello {$2},</p><p>There is a new topic to discuss.</p><h3><a href="{$3}">{$4}</a></h3><p><i>{$5}</i></p>'
    }
  },
  dictionary: {
    basic: {
      title: 'Title of the site'
    },
    footer: {
      title: 'Title of the footer',
      text: 'Text on the footer',
      pagesTitle: 'Title of the pages section in the footer'
    }
  },
  pages: {
    schema: {
      content: 'Content'
    }
  },
  topics: {
    singularName: 'topic',
    pluralName: 'topics',
    title: 'Topics',
    schema: {
      title: 'Title',
      description: 'Description',
      slug: 'Slug',
      hidden: 'Hidden',
      content: 'Content'
    }
  },
  questions: {
    singularName: 'question',
    pluralName: 'questions',
    title: 'Questions',
    schema: {
      topic: 'Topic',
      title: 'Questions',
      
    }
  },
  votes: {
    singularName: 'vote',
    pluralName: 'votes',
    title: 'Votes',
  }
});