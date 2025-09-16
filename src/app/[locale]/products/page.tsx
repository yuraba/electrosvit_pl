import { getTranslations, getLocale } from 'next-intl/server';
import { ProductDTO } from '@/interfaces/ProductDTO';
import ProductCard from '@/features/ProductCard';
import { getProducts, type Locale } from '@/lib/products';
import { Link } from '@/i18n/navigation';
import './style.scss';

export async function generateMetadata() {
    const locale = (await getLocale()) as Locale;
    const t = await getTranslations({
        locale: locale,
        namespace: 'Seo.productsPage',
    });

    return {
        title: t('title'),
        description: t('description'),
        applicationName: '@elektrosvit',
        keywords: t('keywords'),
    };
}

const ProductsPage = async () => {
    const t = await getTranslations('ProductsPage');
    const locale = (await getLocale()) as Locale;
    const products = getProducts(locale);

    return (
        <main className="products">
            <h1 className="title text-center font-semibold">{t('title')}</h1>

            <section className="products__list">
                {products.map((p: ProductDTO) => {
                    const previewPhoto = p?.imagesList
                        ? p?.imagesList[0]
                        : p.image;
                    return (
                        <Link
                            className="products__wrapper"
                            key={p.name}
                            href={{
                                pathname: '/products/[slug]',
                                params: { slug: p.slug },
                            }}
                        >
                            <ProductCard
                                name={p.name}
                                badge={p.badge}
                                imageUrl={previewPhoto}
                                imageWidth={720}
                                imageHeight={588}
                            />
                        </Link>
                    );
                })}
            </section>
        </main>
    );
};

export default ProductsPage;
