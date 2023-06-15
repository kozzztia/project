import 'server-only'
import type { Locale } from '@/i18n-config'
import {i18n} from "@/i18n-config";

const dictionaries = {
    ua: () => import('./dictionaries/ua.json').then((module) => module.default),
    en: () => import('./dictionaries/en.json').then((module) => module.default),

}

// export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export const getDictionary = async (locale) => dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()