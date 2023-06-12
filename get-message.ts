import 'server-only'
import type { Locale } from './i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
    en: () => import('./messages/en.json').then((module) => module.default),
    ua: () => import('./messages/ua.json').then((module) => module.default),
    ch: () => import('./messages/ch.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()