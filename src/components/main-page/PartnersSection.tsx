import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const partners = [
    [
        'boffetti.svg',
        'emka-logo.svg',
        'phoenix-contact-1.svg',
        'Schneider_Electric.svg',
    ],
    [
        'beontop.svg',
        'суп.svg',
        'baif.svg',
        'dtek-logo.svg',
        'Kernel.Ukraine_idvAe_vslf_1.svg',
        'kmbs.svg',
        'KNESS Polska_idENc4UEwi_1.svg',
        'kromberg&schubert.svg',
        'lvbs.svg',
        'metinvest-vector-logo.svg',
        'Radisson_Hotels_logo.svg',
        'Scatec_logo.svg',
        'tuid.svg',
    ],
];

const PartnersSection = async () => {
    const t = await getTranslations('MainPage');

    return (
        <section className="partners-section">
            <h2 className="title text-center">{t('ourStrength')}</h2>

            <div className="partners-section__lists">
                <ul>
                    {partners[0].map((logo) => (
                        <li className="partners-section__logo" key={logo}>
                            <Image
                                fill
                                src={`/partners/${logo}`}
                                alt="partner logo"
                            />
                        </li>
                    ))}
                </ul>
                <ul>
                    {partners[1].map((logo) => (
                        <li className="partners-section__logo" key={logo}>
                            <Image
                                fill
                                src={`/partners/${logo}`}
                                alt="partner logo"
                            />
                        </li>
                    ))}
                </ul>
                <ul></ul>
            </div>
        </section>
    );
};

export default PartnersSection;
