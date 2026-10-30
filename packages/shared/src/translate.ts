import { localeFallbackChain } from './locale'

export type Messages = Record<string, string>
export type LocaleMessages = Record<string, Messages>

export function createTranslator(catalogs: LocaleMessages, locale: string) {
  const chain = localeFallbackChain(locale)
  return (key: string): string => {
    for (const candidate of chain) {
      const message = catalogs[candidate]?.[key]
      if (message !== undefined) return message
    }
    return key
  }
}
