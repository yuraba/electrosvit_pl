import { Metadata } from 'next';
import { getProductBySlug } from '@/lib/products';
import { notFound } from 'next/navigation';
import { getLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/navigation';
import MediaCarousel from '@/features/MediaCarousel';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import './style.scss';

type MetadataProps = {
    params: Promise<any>;
};

export async function generateMetadata({
    params,
}: MetadataProps): Promise<Metadata> {
    const { slug } = await params;
    const locale = (await getLocale()) as Locale;

    const product = getProductBySlug(locale, slug);

    return {
        title: product?.name,
        description: product?.description,
        applicationName: '@elektrosvit',
    };
}

const ProductPage = async ({ params }: { params: Promise<any> }) => {
    const { slug } = await params;
    const locale = (await getLocale()) as Locale;
    const t = await getTranslations('ProductsPage');

    const product = getProductBySlug(locale, slug);

    const fileName = (path: string) => {
        let name = path.split('/');
        return name[name.length - 1].replaceAll('_', ' ');
    };

    if (!product) return notFound();
    return (
        <article className="product-page">
            <h1 className="product-page__title mobile">{product.name}</h1>

            <MediaCarousel
                className="product-page__media"
                withThumbnails
                list={product?.imagesList}
            />

            <section className="product-page__text">
                <p
                    className="product-page__description"
                    dangerouslySetInnerHTML={{
                        __html: product.description,
                    }}
                />
            </section>

            <div className="product-page__downloads">
                {product.filesList.map((file) => (
                    <a key={file} href={file} download>
                        {fileName(file)}
                        <Download />
                    </a>
                ))}
            </div>
        </article>
    );
};

export default ProductPage;
