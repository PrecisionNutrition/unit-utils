import { isEmpty } from '@ember/utils';
import unitTypes from '../lib/unit-types';

export default function unitOptionsFor(unitTypeName) {
  if (isEmpty(unitTypeName)) {
    return;
  }

  const unitType = unitTypes.find((unitType) => unitType.name === unitTypeName);
  const { units } = unitType;

  return units;
}
