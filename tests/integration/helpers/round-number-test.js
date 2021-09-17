import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | round-number', function (hooks) {
  setupRenderingTest(hooks);

  test('it rounds a number to a whole number if precision is 0', async function (assert) {
    this.value = 123.123123;
    this.precision = 0;

    await render(hbs`{{round-number value=this.value precision=this.precision}}`);

    assert.equal(this.element.textContent, '123');
  });

  test('it rounds to the specified precision', async function (assert) {
    this.value = 123.456;
    this.precision = 1;

    await render(hbs`{{round-number value=this.value precision=this.precision}}`);

    assert.equal(this.element.textContent, '123.5');
  });
});
