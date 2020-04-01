import { isEmpty } from '@ember/utils';
import UnitTypes from '../lib/unit-types';

export default function unitOptionsFor(unitTypeName) {
  if (isEmpty(unitTypeName)) {
    return;
  }

  let unitType = UnitTypes.findBy('name', unitTypeName);
  let options = unitType.get('units');

  return options;
}
