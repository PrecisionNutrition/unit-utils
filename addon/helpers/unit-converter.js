import { helper as buildHelper } from '@ember/component/helper';
import { default as unitConverterSuper } from '@precision-nutrition/unit-utils/utils/unit-converter';
import roundNumber from '@precision-nutrition/unit-utils/utils/round-number';

export function unitConverter(_, { value, fromUnit, toUnit, precision }) {
  let convertedValue = unitConverterSuper({ value, fromUnit, toUnit });
  let roundedValue = roundNumber(convertedValue, precision);

  return roundedValue;
}

export default buildHelper(unitConverter);
