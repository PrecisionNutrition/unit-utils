import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | round-number', function(hooks) {
  setupRenderingTest(hooks);

  test('it rounds a number to a whole number if precision is 0', async function(assert) {
    let value = 123.123123;
    let precision = 0;

    this.setProperties({
      value,
      precision,
    });

    await render(hbs`{{round-number value=value precision=precision}}`);

    assert.equal(
      this.element.textContent,
      '123'
    );
  });

  test('it rounds to the specified precision', async function(assert) {
    let value = 123.456;
    let precision = 1;

    this.setProperties({
      value,
      precision,
    });

    await render(hbs`{{round-number value=value precision=precision}}`);

    assert.equal(
      this.element.textContent,
      '123.5'
    );
  });
});
