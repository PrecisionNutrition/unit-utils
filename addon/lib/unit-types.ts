export default [
  {
    name: 'length',
    base: 'centimeters',
    preferenceKey: 'lengthUnits',
    units: [
      { name: 'centimeters', shortName: 'cm' },
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

export interface UnitOptions {
  name: string;
  shortName: string;
}
