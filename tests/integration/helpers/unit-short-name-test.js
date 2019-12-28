import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | unit-short-name', function(hooks) {
  setupRenderingTest(hooks);

  test('finds the short name for a unit', async function(assert) {
    let type = 'smallLengthUnits';
    let preference = 'centimeters';

    this.setProperties({
      type,
      preference,
    });

    await render(hbs`{{unit-short-name type=type preference=preference}}`);

    assert.equal(
      this.element.textContent,
      'cm'
    );
  });
});
