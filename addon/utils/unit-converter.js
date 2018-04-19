import { isEmpty } from '@ember/utils';

const SUPPORTED_CONVERSIONS = {
  centimeters: {
    inches(centimeters) {
      return centimeters * 0.3937;
    }
  },

  inches: {
    centimeters(inches) {
      return inches * 2.54;
    }
  },

  meters: {
    feet(meters) {
      return meters * 3.281;
    }
  },

  feet: {
    meters(feet) {
      return feet * 0.305;
    }
  },

  kilograms: {
    pounds(kilograms) {
      return kilograms * 2.20462;
    }
  },

  pounds: {
    kilograms(pounds) {
      return pounds * 0.4536;
    }
  }
};

export default function unitConverter({ value, fromUnit, toUnit }) {
  if (isEmpty(value) || isEmpty(fromUnit) || isEmpty(toUnit)) {
    return;
  }

  if (fromUnit !== toUnit) {
    let conversions = SUPPORTED_CONVERSIONS[fromUnit];
    let converter = conversions[toUnit];
    let convertedValue = converter(value);

    return convertedValue;
  } else {
    return value;
  }
}
