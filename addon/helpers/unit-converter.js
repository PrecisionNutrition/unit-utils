import { helper as buildHelper } from '@ember/component/helper';
import unitConverterSuper from '../utils/unit-converter';
import roundNumber from '../utils/round-number';

export function unitConverter(_, { value, fromUnit, toUnit, precision }) {
  let convertedValue = unitConverterSuper({ value, fromUnit, toUnit });
  let roundedValue = roundNumber(convertedValue, precision);

  return roundedValue;
}

export default buildHelper(unitConverter);
