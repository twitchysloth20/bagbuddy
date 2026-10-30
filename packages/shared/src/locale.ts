export const DEFAULT_LOCALE = 'en-US'

export function localeFallbackChain(locale: string): string[] {
  const language = locale.split('-')[0]!
  return [...new Set([locale, language, DEFAULT_LOCALE])]
}
