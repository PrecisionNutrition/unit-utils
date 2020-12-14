import { isEmpty } from '@ember/utils';

const SUPPORTED_CONVERSIONS = {
  centimeters: {
    inches(centimeters) {
      return centimeters * 0.3937007874;
    },
  },

  inches: {
    centimeters(inches) {
      return inches * 2.54;
    },
  },

  meters: {
    feet(meters) {
      return meters * 3.28084;
    },
  },

  feet: {
    meters(feet) {
      return feet * 0.3048;
    },
  },

  kilograms: {
    pounds(kilograms) {
      return kilograms * 2.20462262185;
    },
  },

  pounds: {
    kilograms(pounds) {
      return pounds * 0.45359237;
    },
  },
};

export default function unitConverter({ value, fromUnit, toUnit }) {
  if (isEmpty(value) || isEmpty(fromUnit) || isEmpty(toUnit)) {
    return;
  }

  if (fromUnit !== toUnit) {
    const conversions = SUPPORTED_CONVERSIONS[fromUnit];
    const converter = conversions[toUnit];
    const convertedValue = converter(value);

    return convertedValue;
  } else {
    return value;
  }
}
