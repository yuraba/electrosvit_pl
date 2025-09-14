import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import HeroSection from '@/components/main-page/HeroSection';
import MissionSection from '@/components/main-page/MissionSection';
import ProductsSection from '@/components/main-page/ProductsSection';
import TeamSection from '@/components/main-page/TeamSection';
import PartnersSection from '@/components/main-page/PartnersSection';
import ContactsSection from '@/components/main-page/ContactsSection';
import Footer from '@/components/main-page/Footer';
import { Locale } from '@/i18n/navigation';
import './style.scss';

export async function generateMetadata() {
    const locale = (await getLocale()) as Locale;
    const t = await getTranslations({
        locale: locale,
        namespace: 'Seo.mainPage',
    });

    return {
        title: t('title'),
        description: t('description'),
        applicationName: '@elektrosvit',
        keywords: t('keywords'),
    };
}

export default function Home() {
    return (
        <article className="main-page">
            <HeroSection />
            <MissionSection />
            <ProductsSection />
            <TeamSection />
            <PartnersSection />
            <ContactsSection />
            <Footer />
        </article>
    );
}
