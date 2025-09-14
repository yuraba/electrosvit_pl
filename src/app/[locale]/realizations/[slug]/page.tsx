import { getRealizationBySlug } from '@/lib/realizations';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/navigation';
import MediaCarousel from '@/features/MediaCarousel';
import './style.scss';

type MetadataProps = {
    params: Promise<any>
};

export async function generateMetadata({
    params,
}: MetadataProps): Promise<Metadata> {
    const { slug } = await params;
    const locale = (await getLocale()) as Locale;
    const realization = getRealizationBySlug(locale, slug);

    return {
        title: realization?.name,
        applicationName: '@elektrosvit',
    };
}

const RelizationPage = async ({ params }: { params: Promise<any> }) => {
    const { slug } = await params;
    const locale = (await getLocale()) as Locale;

    const realization = getRealizationBySlug(locale, slug);

    return (
        <article className="realization">
            <h1 className="title">{realization?.name}</h1>
            <span className="realization__badge">{realization?.badge}</span>

            <div className="realization__carousel">
                <MediaCarousel
                    withThumbnails
                    list={realization?.imagesList || []}
                />
            </div>
        </article>
    );
};

export default RelizationPage;
