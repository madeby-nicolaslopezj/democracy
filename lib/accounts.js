AccountsTemplates.configure({
  sendVerificationEmail: true,
  homeRoutePath: '/',
  showForgotPasswordLink: true
});

AccountsTemplates.addField({
  _id: 'locale',
  type: 'hidden',
  required: true,
  transform: function() {
    return i18n.getLanguage();
  }
});

AccountsTemplates.configureRoute('resetPwd', {
  path: '/reset-password',
  redirect: '/',
  layoutTemplate: ReactiveTemplates.get('outAdminLayout'),
  template: ReactiveTemplates.get('login')
});

AccountsTemplates.configureRoute('forgotPwd', {
  path: '/forgot-password',
  redirect: '/',
  layoutTemplate: ReactiveTemplates.get('outAdminLayout'),
  template: ReactiveTemplates.get('login')
});

AccountsTemplates.configureRoute('verifyEmail', {
  path: '/verify-email',
  redirect: '/',
  layoutTemplate: ReactiveTemplates.get('outAdminLayout'),
  template: ReactiveTemplates.get('login')
});