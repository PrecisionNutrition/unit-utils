import { helper as buildHelper } from '@ember/component/helper';
import { assert } from '@ember/debug';
import { converter, isSupportedConversion } from '../utils/unit-converter';
import roundNumber from '../utils/round-number';

export function unitConverter(_: unknown[], named: Record<string, unknown>): number | null {
  const { value, fromUnit, toUnit, precision } = named;

  assert('Parameter `value` must be a Number', typeof value === 'number');

  assert('Paramter `fromUnit` must be a String', typeof fromUnit === 'string');

  assert('Parameter `toUnit` must be a String', typeof toUnit === 'string');

  assert(`${fromUnit} cannot be converted to ${toUnit}`, isSupportedConversion(fromUnit, toUnit));

  assert(
    'Parameter `precision` must be a Number',
    typeof precision !== 'undefined' && typeof precision === 'number'
  );

  const convertedValue = converter(value, fromUnit, toUnit);
  const roundedValue = roundNumber(convertedValue, precision);

  return roundedValue;
}

export default buildHelper(unitConverter);
