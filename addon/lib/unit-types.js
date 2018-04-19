import EmberObject from '@ember/object';
import { A } from '@ember/array';

export default A([
  EmberObject.create({
    name: 'length',
    base: 'meters',
    preferenceKey: 'lengthUnits',
    units: A([
      EmberObject.create({ name: 'meters', shortName: 'm' }),
      EmberObject.create({ name: 'feet', shortName: 'ft' }),
    ]),
  }),
  EmberObject.create({
    name: 'small length',
    base: 'centimeters',
    preferenceKey: 'smallLengthUnits',
    units: A([
      EmberObject.create({ name: 'centimeters', shortName: 'cm' }),
      EmberObject.create({ name: 'inches', shortName: 'in' }),
    ]),
  }),
  EmberObject.create({
    name: 'weight',
    base: 'kilograms',
    preferenceKey: 'massUnits',
    units: A([
      EmberObject.create({ name: 'kilograms', shortName: 'kg' }),
      EmberObject.create({ name: 'pounds', shortName: 'lbs' }),
    ]),
  }),
]);
