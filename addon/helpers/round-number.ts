import { helper as buildHelper } from '@ember/component/helper';
import roundNumberSuper from '../utils/round-number';
import { assert } from '@ember/debug';

export function roundNumber(
  _: unknown[],
  named: Record<string, unknown>
): ReturnType<typeof roundNumberSuper> {
  const { value, precision } = named;

  assert('Parameter `value` must be a Number', typeof value === 'number');

  assert(
    'Parameter `precision` must be a Number',
    typeof precision !== 'undefined' && typeof precision === 'number'
  );

  const roundedValue = roundNumberSuper(value, precision);

  return roundedValue;
}

export default buildHelper(roundNumber);
