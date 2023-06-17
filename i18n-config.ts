export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'ua'],
}

export type Locale = (typeof i18n)['locales'][number]