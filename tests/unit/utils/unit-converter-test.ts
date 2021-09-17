import unitConverter, { isSupportedConversion } from 'dummy/utils/unit-converter';
import { module, test } from 'qunit';

module('Unit | Utility | unit converter', function () {
  module('converter', function () {
    test('it returns the value if the units are identical', function (assert) {
      const result = unitConverter(5.6, 'centimeters', 'centimeters');
      const expectedResult = 5.6;

      assert.equal(result, expectedResult);
    });

    test('converts centimeters to inches', function (assert) {
      const result = unitConverter(5.6, 'centimeters', 'inches');
      const expectedResult = 2.20472440944;

      assert.equal(result, expectedResult);
    });

    test('converts centimeters to feet', function (assert) {
      const result = unitConverter(177.25, 'centimeters', 'feet');
      const expectedResult = 5.815288713910761;

      assert.equal(result, expectedResult);
    });

    test('converts inches to centimeters', function (assert) {
      const result = unitConverter(89.2, 'inches', 'centimeters');
      const expectedResult = 226.568;

      assert.equal(result, expectedResult);
    });

    test('converts kilograms to pounds', function (assert) {
      const result = unitConverter(52.3, 'kilograms', 'pounds');
      const expectedResult = 115.30176312275499;

      assert.equal(result, expectedResult);
    });

    test('converts pounds to kilograms', function (assert) {
      const result = unitConverter(155.9, 'pounds', 'kilograms');
      const expectedResult = 70.71505048300001;

      assert.equal(result, expectedResult);
    });

    test('converts meters to feet', function (assert) {
      const result = unitConverter(1.4, 'meters', 'feet');
      const expectedResult = 4.593176;

      assert.equal(result, expectedResult);
    });

    test('converst feet to meters', function (assert) {
      const result = unitConverter(5.9, 'feet', 'meters');
      const expectedResult = 1.7983200000000001;

      assert.equal(result, expectedResult);
    });

    test('converts feet to centimeters', function (assert) {
      const result = unitConverter(5.9, 'feet', 'centimeters');
      const expectedResult = 179.83200000000002;

      assert.equal(result, expectedResult);
    });
  });

  module('#isSupportedConversion', function () {
    test('returns true if the conversion is supported', function (assert) {
      assert.true(isSupportedConversion('inches', 'centimeters'));
    });

    test('returns false if the fromUnit is not understood', function (assert) {
      assert.false(isSupportedConversion('plancks', 'centimeters'));
    });

    test('returns false is the fromUnit cannot be converted to the toUnit', function (assert) {
      assert.false(isSupportedConversion('pounds', 'centimeters'));
    });
  });
});
