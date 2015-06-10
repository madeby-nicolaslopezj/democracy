Router.route('/', {
  name: 'home',
  layoutTemplate: 'layout'
})

Router.route('/t/:slug', {
  name: 'topics.show',
  layoutTemplate: 'layout'
})