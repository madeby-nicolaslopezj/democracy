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
    logout: 'Logout'
  },
  errors: {
    emailNotEndsWith: 'Email must end with {$1}',
    emailLinkExpired: 'Sorry this verification link has expired',
    questionNotExists: 'The question does not exists',
    alreadyVoted: 'The user already voted'
  },
  emails: {
    verifyEmail: {
      subject: 'Confirm Your Email Address',
      text: 'Hello {$1},\n\nTo verify your account email, simply click the link below.\n\n{$2}\n\nThanks.\n'
    },
    resetPassword: {
      subject: 'Reset Password',
      text: 'Hello {$1},\n\nTo reset your password, simply click the link below.\n\n{$2}\n\nThanks.\n'
    },
    newTopic: {
      subject: 'New Topic',
      text: 'Hello {$1},\n\nThere is a new topic to discuss, you can do it in the link below.\n\n{$2}\n\nThanks.\n'
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