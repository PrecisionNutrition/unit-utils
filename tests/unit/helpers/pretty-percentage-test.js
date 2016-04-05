import { prettyPercentage } from 'dummy/helpers/pretty-percentage';
import { module, test } from 'qunit';

module('Unit | Helper | pretty percentage');

test('renders the percentage string with a precision of 0', function(assert) {
  let result = prettyPercentage(null, { decimalValue: 0.123, precision: 0 });
  assert.equal(result, '12%');
});

test('renders the percentage string with a precision of 1', function(assert) {
  let result = prettyPercentage(null, { decimalValue: 0.123, precision: 1 });
  assert.equal(result, '12.3%');
});

test('renders the percentage string with a precision of 1 and value > 100%', function(assert) {
  let result = prettyPercentage(null, { decimalValue: 1.123, precision: 1 });
  assert.equal(result, '112.3%');
});
