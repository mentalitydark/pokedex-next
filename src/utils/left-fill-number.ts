export function leftFillNumber(value: number|string, width: number): string {
  const pattern = Array(width).fill('0').join('')
  return String(pattern + value).slice(-width)
}
