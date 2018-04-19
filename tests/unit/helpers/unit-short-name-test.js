import { unitShortName } from 'dummy/helpers/unit-short-name';
import { module, test } from 'qunit';

module('Unit | Helper | unit short name', function() {
  test('finds the short name for a unit', function(assert) {
    let result = unitShortName(null, { type: 'smallLengthUnits', preference: 'centimeters' });
    assert.equal(result, 'cm');
  });
});
