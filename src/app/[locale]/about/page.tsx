import { getLocale } from 'next-intl/server';
import { Locale } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import Step from '@/components/about-page/Step';
import MediaCarousel from '@/features/MediaCarousel';
import Image from 'next/image';
import './style.scss';

export async function generateMetadata() {
    const locale = (await getLocale()) as Locale;
    const t = await getTranslations({
        locale: locale,
        namespace: 'Seo.aboutPage',
    });

    return {
        title: t('title'),
        description: t('description'),
        applicationName: '@elektrosvit',
        keywords: t('keywords'),
    };
}

const AboutPage = async () => {
    const t = await getTranslations('AboutPage');
    const mediaList = ['/about_carousel_1.svg'];

    return (
        <main className="about">
            <h1 className="title text-center font-semibold">{t('title')}</h1>

            <section className="about__steps">
                <Step t={t('step_2002')} title="2002" className="pb-[35px]" />
                <Step t={t('step_2003')} title="2003" className="pb-[66px]" />
                <Step t={t('step_2008')} title="2008" className="pb-[56px]" />
                <Step t={t('step_2012')} title="2012" className="pb-[26px]" />
                <Step t={t('step_2019')} title="2019" className="pb-[30px]" />
            </section>

            <section className="about__description">
                <p className="about__description-text">
                    <span className="block">{t('descr_left_1')}</span>
                    <span className="block mt-2">{t('descr_left_2')}</span>
                    <span className="block mt-2">{t('descr_left_3')}</span>
                </p>
                <p className="about__description-text">
                    <span className="block">{t('descr_right_1')}</span>
                    <span className="block mt-2">{t('descr_right_2')}</span>
                    <span
                        className="block mt-2"
                        dangerouslySetInnerHTML={{
                            __html: t('descr_right_3'),
                        }}
                    />
                </p>
            </section>

            <section className="about__media">
                <h1 className="title text-center font-semibold">
                    {t('ourFactory')}
                </h1>

                <MediaCarousel
                    className="about__media-carousel"
                    withDots
                    list={mediaList}
                />
            </section>

            <footer className="about__footer">
                <Image
                    src="/full_name_logo.svg"
                    alt="full name logo"
                    width={604}
                    height={64}
                />
            </footer>
        </main>
    );
};

export default AboutPage;
