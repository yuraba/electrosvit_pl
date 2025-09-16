import TeamCarousel from '@/features/TeamCarousel';
import { getLocale, getTranslations } from 'next-intl/server';
import { getTeam, getTeamPoland } from '@/lib/team';
import { Locale } from '@/i18n/navigation';
const TeamSection = async () => {
    const t = await getTranslations('MainPage');
    const locale = (await getLocale()) as Locale;
    const team = getTeam(locale);
    const teamPoland = getTeamPoland(locale);

    return (
        <section className="team-section">
            <div className="team-section__text">
                <h2 className="title text-center">{t('ourTeam')}</h2>
                <p className="description text-center mt-2">{t('teamGoal')}</p>
            </div>

            <TeamCarousel list={team} className="team-section__carousel" />

            <h2 className="title mt-[120px] text-center">
                {t('ourTeamPoland')}
            </h2>

            <TeamCarousel
                list={teamPoland}
                className="team-section__carousel"
            />
        </section>
    );
};

export default TeamSection;
