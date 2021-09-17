interface Converter {
  (arg0: number): number;
}
interface Converters {
  [fromUnit: string]: {
    [toUnit: string]: Converter;
  };
}

const noop: Converter = (arg) => arg;

const cmToIn: Converter = (cm) => cm * 0.3937007874;
const cmToFt: Converter = (cm) => cm / 30.48;
const inToCm: Converter = (inches) => inches * 2.54;
const mToFt: Converter = (m) => m * 3.28084;
const ftToM: Converter = (ft) => ft * 0.3048;
const ftToCm: Converter = (ft) => ft * 30.48;
const kgToLbs: Converter = (kg) => kg * 2.20462262185;
const lbsToKg: Converter = (lbs) => lbs * 0.45359237;

const SUPPORTED_CONVERSIONS: Converters = {
  centimeters: {
    inches: cmToIn,
    feet: cmToFt,
    centimeters: noop,
  },

  inches: {
    centimeters: inToCm,
    inches: noop,
  },

  meters: {
    feet: mToFt,
    meters: noop,
  },

  feet: {
    meters: ftToM,
    centimeters: ftToCm,
    feet: noop,
  },

  kilograms: {
    pounds: kgToLbs,
    kilograms: noop,
  },

  pounds: {
    kilograms: lbsToKg,
    pounds: noop,
  },
};

function findConverter<K extends keyof Converters, S extends keyof Converters[K]>(
  c: Converters,
  from: K,
  to: S
): Converter {
  return c[from][to];
}

export function converter<K extends keyof Converters, S extends keyof Converters[K]>(
  value: number,
  fromUnit: K,
  toUnit: S
): number {
  const converter = findConverter(SUPPORTED_CONVERSIONS, fromUnit, toUnit);
  return converter(value);
}

export function isSupportedConversion(fromUnit: string, toUnit: string): boolean {
  return fromUnit in SUPPORTED_CONVERSIONS && toUnit in SUPPORTED_CONVERSIONS[fromUnit];
}

export default converter;
