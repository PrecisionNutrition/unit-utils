import prettyPercentage from 'dummy/utils/pretty-percentage';
import { module, test } from 'qunit';

module('Unit | Utility | pretty percentage');

test('it turns a decimal value into a whole number percentage by default', function(assert) {
  let result = prettyPercentage(0.12);
  assert.equal(result, "12%");
});

test('it rounds to the right precision', function(assert) {
  let result = prettyPercentage(0.123, 1);
  assert.equal(result, "12.3%");
});

test('it supports percentages greater than 100%', function(assert) {
  let result = prettyPercentage(1.123, 1);
  assert.equal(result, "112.3%");
});
