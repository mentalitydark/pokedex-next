import { sentenceCase } from './sentence-case'

export function capitalizeCase(text: string): string {
  const texts = text.split(' ')
  
  const result = texts.map(sentenceCase)

  return result.join(' ')
}
