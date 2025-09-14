import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import NextLink from 'next/link';

const ContactsSection = async () => {
    const t = await getTranslations('MainPage');

    return (
        <section id="contacts" className="contacts-section">
            <h2 className="contacts-section__title">{t('contactTitle')}</h2>

            <div className="contacts-section__content">
                <div className="contacts-section__address">
                    <h3 className="contacts-section__subtitle mr-2">
                        {t('contactSubtitle')}
                    </h3>
                    <h4 className="contacts-section__subtitle">
                        {t('contactSubtitleCrumbs')}
                    </h4>
                    <address className="mt-4 not-italic">
                        Piotr Podlaszewski <br /> Dyrektor Generalny ELEKTROSVIT
                        Sp z o.o.
                        <a
                            className="block mt-3 text-[var(--green-color)]"
                            href="tel:+48 797 152 300"
                        >
                            +48 797 152 300
                        </a>
                    </address>
                </div>
                <dl className="contacts-section__definition-list">
                    <dt className="text-[var(--grey-color)]">{t('CEO')}</dt>
                    <dd className="mt-2">
                        <a href={`mailto:${t('CEOmail')}`}>{t('CEOmail')}</a>
                    </dd>

                    <dt className="text-[var(--grey-color)] mt-[48px]">
                        {t('service')}
                    </dt>
                    <dd className="mt-2">
                        <a href={`mailto:${t('serviceMail')}`}>
                            {t('serviceMail')}
                        </a>
                    </dd>
                </dl>
            </div>

            <ul className="contacts-section__social">
                <li>
                    <NextLink
                        href={t('facebook')}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icon-facebook.svg"
                            alt="facebook"
                            width={24}
                            height={24}
                        />
                    </NextLink>
                </li>
                <li>
                    <NextLink
                        href={t('linkedin')}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icon-linkedin.svg"
                            alt="linkedin"
                            width={24}
                            height={24}
                        />
                    </NextLink>
                </li>
            </ul>
        </section>
    );
};

export default ContactsSection;
