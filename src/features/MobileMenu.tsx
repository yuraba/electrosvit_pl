'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import LocaleSelect from './LocaleSelect';
import clsx from 'clsx';
import '@/css/mobile-menu.scss';

const MobileMenu = () => {
    const [isOpened, setIsOpened] = useState(false);
    const t = useTranslations('Header');
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpened((prev) => !prev);
    };

    useEffect(() => {
        if (!isOpened) {
            document.body.style.overflow = '';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }, [isOpened]);

    useEffect(() => {
        setIsOpened(false);
    }, [pathname]);

    return (
        <div>
            <Menu onClick={toggleMenu} width={32} height={32} />
            <div
                className={clsx('mobile-menu', {
                    ['mobile-menu--opened']: isOpened,
                })}
            >
                <div className="flex">
                    <LocaleSelect />
                    <X
                        className="mobile-menu__close"
                        onClick={toggleMenu}
                        width={32}
                        height={32}
                    />
                </div>
                <div className="mobile-menu__list">
                    <Link href="/about">
                        <Button
                            onClick={toggleMenu}
                            className="mobile-menu__list-item"
                            variant="outline"
                        >
                            {t('aboutUs')}
                        </Button>
                    </Link>
                    <Link href="/products">
                        <Button
                            onClick={toggleMenu}
                            className="mobile-menu__list-item"
                            variant="outline"
                        >
                            {t('products')}
                        </Button>
                    </Link>
                    <Link href="/realizations">
                        <Button
                            onClick={toggleMenu}
                            className="mobile-menu__list-item"
                            variant="outline"
                        >
                            {t('realizations')}
                        </Button>
                    </Link>
                    <Link href={{ pathname: '/', hash: 'contacts' }}>
                        <Button
                            onClick={toggleMenu}
                            className="mobile-menu__list-item"
                            variant="outline"
                        >
                            {t('contact')}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
