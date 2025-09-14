import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { headers } from 'next/headers';
import { getTranslations, getLocale } from 'next-intl/server';
import LocaleSelect from '@/features/LocaleSelect';
import { UAParser } from 'ua-parser-js';

import '@/css/header.scss';
import MobileMenu from '@/features/MobileMenu';

export const Header = async () => {
    const t = await getTranslations('Header');
    const { get } = await headers();
    const userAgent = get('user-agent');
    const { device } = UAParser(userAgent || '');
    const isMobile = device.is('mobile');

    return isMobile ? (
        <header className="header-mobile">
            <Link href="/">
                <Image
                    className="dark:invert"
                    src="/electosvit_logo.svg"
                    alt="Electrosvit logo"
                    width={64}
                    height={64}
                    priority
                />
            </Link>
            <MobileMenu />
        </header>
    ) : (
        <header className="sticky top-[0] bg-white z-1 flex justify-between items-center px-[76px]">
            <Link href="/">
                <Image
                    className="dark:invert"
                    src="/electosvit_logo.svg"
                    alt="Electrosvit logo"
                    width={90}
                    height={90}
                    priority
                />
            </Link>

            <nav className="flex justify-between font-medium text-lg basis-[50%]">
                <Link href="/about">
                    {t('aboutUs')}
                </Link>
                <Link href="/products">{t('products')}</Link>
                <Link href="/realizations">{t('realizations')}</Link>
                <Link href={{ pathname: '/', hash: 'contacts' }}>{t('contact')}</Link>
            </nav>

            <LocaleSelect />
        </header>
    );
};
