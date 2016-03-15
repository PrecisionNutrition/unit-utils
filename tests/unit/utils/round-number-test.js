import roundNumber from 'dummy/utils/round-number';
import { module, test } from 'qunit';

module('Unit | Utility | round number');

test('it rounds a number to two decimal places by default', function(assert) {
  let result = roundNumber(123.123);
  assert.equal(result, 123.12);
});

test('it rounds a number to a configurable number of decimal places', function(assert) {
  let result = roundNumber(123.123123, 1);
  assert.equal(result, 123.1);
});

test('it returns undefined when nothing provided', function(assert) {
  let result = roundNumber();
  assert.equal(result, undefined);
});

test('it parses a String number', function(assert) {
  let result = roundNumber('34.3333');
  assert.equal(result, 34.33);
});

test('it returns undefined when provided a string that is not a number', function(assert) {
  let result = roundNumber('boogers');
  assert.equal(result, undefined);
});
