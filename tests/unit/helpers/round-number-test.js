import { roundNumber } from 'dummy/helpers/round-number';
import { module, test } from 'qunit';

module('Unit | Helper | round number');

test('it rounds a number to a whole number if precision is 0', function(assert) {
  let result = roundNumber(null, { value: 123.123123, precision: 0 });
  assert.equal(result, 123);
});

test('it rounds to the specified precision', function(assert) {
  let result = roundNumber(null, { value: 123.456, precision: 1 });
  assert.equal(result, 123.5);
});
