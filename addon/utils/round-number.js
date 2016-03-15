export default function roundNumber(value, precision=2) {
  if (value === null || isNaN(value)) {
    return;
  }

  let parsedValue = Number(value);
  let rounder = Math.pow(10, precision);

  return Math.round(parsedValue * rounder) / rounder;
}
