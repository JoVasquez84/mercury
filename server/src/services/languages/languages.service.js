// Initializes the `languages` service on path `/languages`
const { Languages } = require('./languages.class');
const createModel = require('../../models/languages.model');
const hooks = require('./languages.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/languages', new Languages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('languages');

  service.hooks(hooks);
};
