orion.pages.addTemplate({
  template: 'pagesGeneral', 
  name: 'General',
  description: 'Pages template'
}, {
  content: orion.attribute('froala', {
    label: orion.helpers.getTranslation('pages.schema.content')
  })
})