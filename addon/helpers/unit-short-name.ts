import { helper as buildHelper } from '@ember/component/helper';
import unitTypes from '../lib/unit-types';
import { assert } from '@ember/debug';

export function unitShortName(_: unknown[], named: Record<string, unknown>): string | undefined {
  const { type, preference } = named;

  assert('Parameter `type` must be a String', typeof type === 'string');
  assert('Paramter `preference` must be a String', typeof preference === 'string');

  const unitType = unitTypes.find((item) => item.preferenceKey === type);

  if (!unitType) {
    return;
  }

  const { units } = unitType;

  const unit = units.find((unit) => unit.name === preference);

  if (!unit) {
    return;
  }

  const { shortName } = unit;

  return shortName;
}

export default buildHelper(unitShortName);
