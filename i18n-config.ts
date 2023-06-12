export const i18n = {
    defaultLocale: 'ua',
    locales: ['en', 'ua', 'ch'],
} as const

export type Locale = (typeof i18n)['locales'][number]