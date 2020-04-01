import { helper as buildHelper } from '@ember/component/helper';
import roundNumberSuper from '../utils/round-number';

export function roundNumber(_, { value, precision=0 }) {
  let roundedValue = roundNumberSuper(value, precision);

  return roundedValue;
}

export default buildHelper(roundNumber);
