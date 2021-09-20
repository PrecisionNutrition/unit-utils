import { isEmpty } from '@ember/utils';
import unitTypes, { UnitOptions } from '../lib/unit-types';

export default function unitOptionsFor(unitTypeName: string): UnitOptions[] {
  if (isEmpty(unitTypeName)) {
    return [];
  }

  const unitType = unitTypes.find((unitType) => unitType.name === unitTypeName);

  if (!unitType) {
    return [];
  }

  const { units } = unitType;
  return units;
}
