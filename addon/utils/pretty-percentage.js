import roundNumber from 'unit-utils/utils/round-number';

export default function prettyPercentage(decimalValue, precision=0) {
  if (decimalValue === null || isNaN(decimalValue)) {
    return;
  }

  let convertedValue = Number(decimalValue) * 100;
  let rounder = roundNumber(convertedValue, precision);

  return `${rounder}%`;
}
