import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | api-sdk/article', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:api-sdk/article');
    assert.ok(service);
  });
});
