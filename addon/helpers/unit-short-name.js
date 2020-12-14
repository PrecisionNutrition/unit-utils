import { helper as buildHelper } from '@ember/component/helper';
import unitTypes from '../lib/unit-types';

export function unitShortName(_, { type, preference }) {
  const unitType = unitTypes.find(item => item.preferenceKey === type);

  const { units } = unitType;

  const unit = units.find(unit => unit.name === preference);

  const { shortName } = unit;

  return shortName;
}

export default buildHelper(unitShortName);
