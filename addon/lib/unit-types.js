import Ember from 'ember';

export default [
  Ember.Object.create({
    name: 'length',
    base: 'meters',
    preferenceKey: 'lengthUnits',
    units: [
      Ember.Object.create({ name: 'meters', shortName: 'm' }),
      Ember.Object.create({ name: 'feet', shortName: 'ft' })
    ]
  }),
  Ember.Object.create({
    name: 'small length',
    base: 'centimeters',
    preferenceKey: 'smallLengthUnits',
    units: [
      Ember.Object.create({ name: 'centimeters', shortName: 'cm' }),
      Ember.Object.create({ name: 'inches', shortName: 'in' })
    ]
  }),
  Ember.Object.create({
    name: 'weight',
    base: 'kilograms',
    preferenceKey: 'massUnits',
    units: [
      Ember.Object.create({ name: 'pounds', shortName: 'lbs' }),
      Ember.Object.create({ name: 'kilograms', shortName: 'kg' })
    ]
  })
];
