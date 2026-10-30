import { describe, expect, it } from 'vitest'
import { createTranslator } from './translate'

const catalogs = {
  'en-US': { 'app.name': 'BagBuddy', 'tabs.trips': 'Trips' },
  'fr': { 'tabs.trips': 'Voyages' },
}

describe('createTranslator', () => {
  it('uses the requested locale when it has the key', () => {
    const t = createTranslator(catalogs, 'fr')
    expect(t('tabs.trips')).toBe('Voyages')
  })

  it('falls back along the chain when the key is missing', () => {
    const t = createTranslator(catalogs, 'fr-BE')
    expect(t('app.name')).toBe('BagBuddy')
  })

  it('returns the key itself when no locale has it', () => {
    const t = createTranslator(catalogs, 'fr-BE')
    expect(t('nope.missing')).toBe('nope.missing')
  })
})
