import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { getRealizations } from '@/lib/realizations';
import { Locale } from '@/i18n/navigation';
import RealizationsSection from '@/components/realization-page/RealizationsSection';
import './style.scss';

type MetadataProps = {
    params: Promise<any>;
};

export async function generateMetadata({
    params,
}: MetadataProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale: locale,
        namespace: 'Seo.realizationsPage',
    });

    return {
        title: t('title'),
        description: t('description'),
        applicationName: '@elektrosvit',
        keywords: t('keywords'),
    };
}

const RealizationsPage = async () => {
    const t = await getTranslations('RealizationsPage');
    const locale = (await getLocale()) as Locale;
    const realizations = getRealizations(locale);

    return (
        <main className="realizations">
            <h1 className="title text-center">{t('title')}</h1>

            <RealizationsSection realizations={realizations} />
        </main>
    );
};

export default RealizationsPage;
