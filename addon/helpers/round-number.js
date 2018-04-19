import { helper as buildHelper } from '@ember/component/helper';
import { default as roundNumberSuper } from '@precision-nutrition/unit-utils/utils/round-number';

export function roundNumber(_, { value, precision=0 }) {
  let roundedValue = roundNumberSuper(value, precision);

  return roundedValue;
}

export default buildHelper(roundNumber);
