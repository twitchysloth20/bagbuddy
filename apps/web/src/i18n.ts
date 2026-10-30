import { createTranslator, DEFAULT_LOCALE, type LocaleMessages } from '@bagbuddy/shared'
import { computed, ref } from 'vue'
import enUS from './locales/en-US.json'

const messages: LocaleMessages = { [DEFAULT_LOCALE]: enUS }

const locale = ref<string>(navigator.language || DEFAULT_LOCALE)
const translator = computed(() => createTranslator(messages, locale.value))

export function t(key: string): string {
  return translator.value(key)
}
