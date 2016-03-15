import UnitTypes from 'unit-utils/lib/unit-types';
import Ember from 'ember';

const { isEmpty } = Ember;

export default function unitOptionsFor(unitTypeName) {
  if (isEmpty(unitTypeName)) {
    return;
  }

  let unitType = UnitTypes.findBy('name', unitTypeName);
  let options = unitType.get('units');

  return options;
}
