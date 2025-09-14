import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

const HeroSection = async () => {
    const t = await getTranslations('MainPage');

    return (
        <section className="hero-section">
            <div className="hero-section__text">
                <h1 className="title">{t('title')}</h1>
                <h2 className="subtitle">{t('subtitle')}</h2>
                <p
                    className="description"
                    dangerouslySetInnerHTML={{
                        __html: t('description'),
                    }}
                ></p>
                <Link href="/about">
                    <Button className="hero-section__button">
                        {t('seeMore')}
                    </Button>
                </Link>
            </div>
            <figure className="hero-section__banner">
                <Image
                    width={980}
                    height={596}
                    src={t('hero-banner')}
                    alt="hero-banner"
                />
            </figure>
        </section>
    );
};

export default HeroSection;
