import Ember from 'ember';
import UnitTypes from 'unit-types/lib/unit-types';

export function unitShortName(_, { type, preference }) {
  let unitType = UnitTypes.findBy('preferenceKey', type);
  let unit = unitType.units.findBy('name', preference);

  return unit.get('shortName');
}

export default Ember.Helper.helper(unitShortName);
