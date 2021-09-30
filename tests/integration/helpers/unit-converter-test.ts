import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | unit-converter', function (hooks) {
  setupRenderingTest(hooks);

  test('can do a supported conversion', async function (assert) {
    await render(hbs`{{unit-converter value=2.54 fromUnit="centimeters" toUnit="inches"}}`);

    assert.dom(this.element).hasText('1');
  });

  test('can provide an optional precision parameter', async function (assert) {
    await render(
      hbs`{{unit-converter value=4.345 fromUnit="kilograms" toUnit="pounds" precision=3}}`
    );

    assert.dom(this.element).hasText('9.579');
  });
});
