import { describe, expect, it } from 'vitest'
import { localeFallbackChain } from './locale'

describe('localeFallbackChain', () => {
  it('walks a regional locale down to its language, then the default', () => {
    expect(localeFallbackChain('fr-BE')).toEqual(['fr-BE', 'fr', 'en-US'])
  })
})

describe('localeFallbackChain for the default locale', () => {
  it('has no duplicates', () => {
    expect(localeFallbackChain('en-US')).toEqual(['en-US', 'en'])
  })
})
