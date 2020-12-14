import unitConverter from 'dummy/utils/unit-converter';
import { module, test } from 'qunit';

module('Unit | Utility | unit converter', function () {
  test('it returns if the value is not present', function (assert) {
    const result = unitConverter({ value: null });

    assert.equal(result, undefined);
  });

  test('it returns if fromUnit is not present', function (assert) {
    const result = unitConverter({ value: 1.2, toUnit: 'centimeters' });

    assert.equal(result, undefined);
  });

  test('it returns if toUnit is not present', function (assert) {
    const result = unitConverter({ value: 1.2, fromUnit: 'centimeters' });

    assert.equal(result, undefined);
  });

  test('it returns the value if the units are identical', function (assert) {
    const result = unitConverter({ value: 5.6, fromUnit: 'centimeters', toUnit: 'centimeters' });
    const expectedResult = 5.6;

    assert.equal(result, expectedResult);
  });

  test('converts centimeters to inches', function (assert) {
    const result = unitConverter({ value: 5.6, fromUnit: 'centimeters', toUnit: 'inches' });
    const expectedResult = 2.20472440944;

    assert.equal(result, expectedResult);
  });

  test('converts centimeters to feet', function (assert) {
    const result = unitConverter({ value: 177.25, fromUnit: 'centimeters', toUnit: 'feet' });
    const expectedResult = 5.815288713910761;

    assert.equal(result, expectedResult);
  });

  test('converts inches to centimeters', function (assert) {
    const result = unitConverter({ value: 89.2, fromUnit: 'inches', toUnit: 'centimeters' });
    const expectedResult = 226.568;

    assert.equal(result, expectedResult);
  });

  test('converts kilograms to pounds', function (assert) {
    const result = unitConverter({ value: 52.3, fromUnit: 'kilograms', toUnit: 'pounds' });
    const expectedResult = 115.30176312275499;

    assert.equal(result, expectedResult);
  });

  test('converts pounds to kilograms', function (assert) {
    const result = unitConverter({ value: 155.9, fromUnit: 'pounds', toUnit: 'kilograms' });
    const expectedResult = 70.71505048300001;

    assert.equal(result, expectedResult);
  });

  test('converts meters to feet', function (assert) {
    const result = unitConverter({ value: 1.4, fromUnit: 'meters', toUnit: 'feet' });
    const expectedResult = 4.593176;

    assert.equal(result, expectedResult);
  });

  test('converst feet to meters', function (assert) {
    const result = unitConverter({ value: 5.9, fromUnit: 'feet', toUnit: 'meters' });
    const expectedResult = 1.7983200000000001;

    assert.equal(result, expectedResult);
  });

  test('converts feet to centimeters', function (assert) {
    const result = unitConverter({ value: 5.9, fromUnit: 'feet', toUnit: 'centimeters' });
    const expectedResult = 179.83200000000002;

    assert.equal(result, expectedResult);
  });
});
