export default [
  {
    name: 'length',
    base: 'meters',
    preferenceKey: 'lengthUnits',
    units: [
      { name: 'meters', shortName: 'm' },
      { name: 'feet', shortName: 'ft' },
    ],
  },
  {
    name: 'small length',
    base: 'centimeters',
    preferenceKey: 'smallLengthUnits',
    units: [
      { name: 'centimeters', shortName: 'cm' },
      { name: 'inches', shortName: 'in' },
    ],
  },
  {
    name: 'weight',
    base: 'kilograms',
    preferenceKey: 'massUnits',
    units: [
      { name: 'kilograms', shortName: 'kg' },
      { name: 'pounds', shortName: 'lbs' },
    ],
  },
];
