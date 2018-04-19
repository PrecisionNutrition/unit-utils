import { helper as buildHelper } from '@ember/component/helper';
import UnitTypes from '@precision-nutrition/unit-utils/lib/unit-types';

function findBy(collection, attr, value) {
  let item;

  for (let i = 0; i < collection.length; i++) {
    item = collection[i];

    if (item.get(attr) === value) {
      break;
    }
  }

  return item;
}

export function unitShortName(_, { type, preference }) {
  let unitType = findBy(UnitTypes, 'preferenceKey', type);
  let units = unitType.get('units');
  let unit = findBy(units, 'name', preference);
  let shortName = unit.get('shortName');

  return shortName;
}

export default buildHelper(unitShortName);
