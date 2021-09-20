import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

interface Context extends TestContext {
  type: string;
  preference: string;
}

module('Integration | Helper | unit-short-name', function (hooks) {
  setupRenderingTest(hooks);

  test('finds the short name for a unit', async function (this: Context, assert) {
    this.type = 'smallLengthUnits';
    this.preference = 'centimeters';

    await render(hbs`{{unit-short-name type=this.type preference=this.preference}}`);

    assert.equal(this.element.textContent, 'cm');
  });
});
