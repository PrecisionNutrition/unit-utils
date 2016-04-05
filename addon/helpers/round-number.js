import Ember from 'ember';
import { default as roundNumberSuper } from 'unit-utils/utils/round-number';

export function roundNumber(_, { value, precision=0 }) {
  let roundedValue = roundNumberSuper(value, precision);

  return roundedValue;
}

export default Ember.Helper.helper(roundNumber);
