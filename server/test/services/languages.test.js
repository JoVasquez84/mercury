const app = require('../../src/app');

describe('\'languages\' service', () => {
  it('registered the service', () => {
    const service = app.service('languages');
    expect(service).toBeTruthy();
  });
});
