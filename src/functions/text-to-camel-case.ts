export function textToCamelCase(text: string): string {
  return text.charAt(0).toUpperCase() + text.substring(1, text.length)
}
