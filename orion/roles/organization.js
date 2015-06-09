var organization = new Roles.Role('organization');

organization.allow('collections.topics.index', true);
organization.allow('collections.topics.showCreate', true);
organization.allow('collections.topics.showUpdate', true);
organization.allow('collections.topics.showRemove', true);
organization.allow('collections.topics.insert', true);
organization.allow('collections.topics.update', true);
organization.allow('collections.topics.remove', true);

organization.allow('collections.questions.index', true);
organization.allow('collections.questions.showCreate', true);
organization.allow('collections.questions.showUpdate', true);
organization.allow('collections.questions.showRemove', true);
organization.allow('collections.questions.insert', true);
organization.allow('collections.questions.update', true);
organization.allow('collections.questions.remove', true);

organization.allow('pages.index', true);
organization.allow('pages.insert', true);
organization.allow('pages.update', true);
organization.allow('pages.remove', true);