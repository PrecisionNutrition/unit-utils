import Ember from 'ember';
import { default as unitConverterSuper } from 'unit-utils/utils/unit-converter';
import roundNumber from 'unit-utils/utils/round-number';

export function unitConverter(_, { value, fromUnit, toUnit, precision }) {
  let convertedValue = unitConverterSuper({ value, fromUnit, toUnit });
  let roundedValue = roundNumber(convertedValue, precision);

  return roundedValue;
}

export default Ember.Helper.helper(unitConverter);
