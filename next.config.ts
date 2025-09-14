import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    // i18n: {
    //     locales: ['en', 'pl'],
    //     defaultLocale: 'pl',
    //     // This is a list of locale domains and the default locale they
    //     // should handle (these are only required when setting up domain routing)
    //     // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    //     domains: [
    //         {
    //             domain: 'example.com',
    //             defaultLocale: 'en',
    //         },
    //         {
    //             domain: 'example.nl',
    //             defaultLocale: 'pl',
    //         },
    //     ],
    // },
};

export default withNextIntl(nextConfig);
