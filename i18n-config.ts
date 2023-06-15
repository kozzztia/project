export const i18n = {
    defaultLocale: 'ua',
    locales: ['en', 'ua'],
}

export type Locale = (typeof i18n)['locales'][number]