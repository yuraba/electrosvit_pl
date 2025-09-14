import { defineRouting } from 'next-intl/routing';
export const defaultLocale = 'pl' as const;
export const locales = ['en', 'pl'] as const;
export const pathnames = {
    '/': '/',
    '/realizations': {
        en: '/realizations',
        pl: '/realizacje',
    },
    '/products': {
        en: '/products',
        pl: '/produkty',
    },
    '/about': {
        en: '/about',
        pl: '/o-nas',
    },
    '/404': {
        en: '/404',
        pl: '/404',
    },
    '/500': {
        en: '/500',
        pl: '/500',
    },
    '/realizations/[slug]': {
        en: '/project/[slug]',
        pl: '/projekt/[slug]',
    },
    '/products/[slug]': {
        en: '/products/[slug]',
        pl: '/produkts/[slug]',
    },
};

export const routing = defineRouting({
    locales,
    defaultLocale,
    pathnames,
    localePrefix: 'as-needed',
    domains: [
        {
            domain: 'elektrosvit.pl',
            defaultLocale: 'pl',
            locales: ['en', 'pl'],
        },
    ],
    localeDetection: false,
    localeCookie: false,
});
