import roundNumber from '@precision-nutrition/unit-utils/utils/round-number';
import { module, test } from 'qunit';

module('Unit | Utility | round number', function () {
  test('it rounds a number to two decimal places by default', function (assert) {
    const result = roundNumber(123.123);
    assert.equal(result, 123.12);
  });

  test('it rounds a number to a configurable number of decimal places', function (assert) {
    const result = roundNumber(123.123123, 1);
    assert.equal(result, 123.1);
  });

  test('it rounds a number to a whole number if precision is 0', function (assert) {
    const result = roundNumber(123.123123, 0);
    assert.equal(result, 123);
  });
});
