import unitConverter from 'dummy/utils/unit-converter';
import { module, test } from 'qunit';

module('Unit | Utility | unit converter', function() {
  test('it returns if the value is not present', function(assert) {
    let result = unitConverter({ value: null });

    assert.equal(result, undefined);
  });

  test('it returns if fromUnit is not present', function(assert) {
    let result = unitConverter({ value: 1.2, toUnit: 'centimeters' });

    assert.equal(result, undefined);
  });

  test('it returns if toUnit is not present', function(assert) {
    let result = unitConverter({ value: 1.2, fromUnit: 'centimeters' });

    assert.equal(result, undefined);
  });

  test('it returns the value if the units are identical', function(assert) {
    let result = unitConverter({ value: 5.6, fromUnit: 'centimeters', toUnit: 'centimeters' });
    let expectedResult = 5.6;

    assert.equal(result, expectedResult);
  });

  test('converts centimeters to inches', function(assert) {
    let result = unitConverter({ value: 5.6, fromUnit: 'centimeters', toUnit: 'inches' });
    let expectedResult = 2.20472;

    assert.equal(result, expectedResult);
  });

  test('converts inches to centimeters', function(assert) {
    let result = unitConverter({ value: 89.2, fromUnit: 'inches', toUnit: 'centimeters' });
    let expectedResult = 226.568;

    assert.equal(result, expectedResult);
  });

  test('converts kilograms to pounds', function(assert) {
    let result = unitConverter({ value: 52.3, fromUnit: 'kilograms', toUnit: 'pounds' });
    let expectedResult = 115.30162599999998;

    assert.equal(result, expectedResult);
  });

  test('converts pounds to kilograms', function(assert) {
    let result = unitConverter({ value: 155.9, fromUnit: 'pounds', toUnit: 'kilograms' });
    let expectedResult = 70.71624;

    assert.equal(result, expectedResult);
  });

  test('converts meters to feet', function(assert) {
    let result = unitConverter({ value: 1.4, fromUnit: 'meters', toUnit: 'feet' });
    let expectedResult = 4.5934;

    assert.equal(result, expectedResult);
  });

  test('converst feet to meters', function(assert) {
    let result = unitConverter({ value: 5.9, fromUnit: 'feet', toUnit: 'meters' });
    let expectedResult = 1.7995;

    assert.equal(result, expectedResult);
  });
});
