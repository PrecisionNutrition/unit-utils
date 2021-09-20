export default function roundNumber(value: number, precision = 2): number {
  const parsedValue = Number(value);
  const rounder = Math.pow(10, precision);

  return Math.round(parsedValue * rounder) / rounder;
}
