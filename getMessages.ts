import 'server-only'
import type { Locale } from '@/i18n-config'

const messages = {
    en: () => import('./messages/en.json').then((module) => module.default),
    ua: () => import('./messages/ua.json').then((module) => module.default),
}

export const getMessage = async (locale: Locale) => messages[locale]()