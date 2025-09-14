import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const MissionSection = async () => {
    const t = await getTranslations('MainPage');
    return (
        <section className="mission-section">
            <div className="mission-section__text">
                <h2 className="title">{t('missionTitle')}</h2>
                <p className="description">{t('missionDescription')}</p>
            </div>
            <figure className="mission-section__banner">
                <Image
                    width={2440}
                    height={1200}
                    src="/mission.svg"
                    alt="Electosvit logo"
                />
            </figure>
        </section>
    );
};

export default MissionSection;
