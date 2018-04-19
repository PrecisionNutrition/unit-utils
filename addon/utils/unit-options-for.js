import { isEmpty } from '@ember/utils';
import UnitTypes from '@precision-nutrition/unit-utils/lib/unit-types';

export default function unitOptionsFor(unitTypeName) {
  if (isEmpty(unitTypeName)) {
    return;
  }

  let unitType = UnitTypes.findBy('name', unitTypeName);
  let options = unitType.get('units');

  return options;
}
