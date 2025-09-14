'use client';

import { useRouter, usePathname, Locale } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocaleSelect = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const locale = useLocale();
    const t = useTranslations('Header');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    function onSelectChange(nextLocale: string) {
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            { pathname, params },
            { locale: nextLocale as Locale }
        );
    }

    if (!mounted) {
        return (
            <Button
                variant="outline"
                className="text-sm font-normal bg-[var(--grey-background)] w-[156px]"
            >
                <Image
                    width={24}
                    height={24}
                    alt="language select"
                    src="/language.svg"
                />
                {t(locale)}
                <ChevronDown className="size-4 opacity-30 ml-auto" />
            </Button>
        );
    }

    return (
        <Select defaultValue={locale} onValueChange={onSelectChange}>
            <SelectTrigger className="bg-[var(--grey-background)] w-[156px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                {routing.locales.map((l) => (
                    <SelectItem key={l} value={l}>
                        <Image
                            width={24}
                            height={24}
                            alt="language select"
                            src="/language.svg"
                        />
                        {t(l)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default LocaleSelect;
