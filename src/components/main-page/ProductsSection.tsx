import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

const ProductsSection = async () => {
    const t = await getTranslations('MainPage');

    return (
        <section className="products-section">
            <h2 className="title text-center">{t('ourProducts')}</h2>

            <Link className="products-section__icon" href="/products">
                <Image
                    src="/transformator.svg"
                    alt="products"
                    width={100}
                    height={100}
                />
                <span className="subtitle">{t('products')}</span>
            </Link>
        </section>
    );
};

export default ProductsSection;
