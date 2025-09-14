import pl from '@/content/team/pl.json';
import en from '@/content/team/en.json'; 
import polandPl from '@/content/teamPoland/pl.json';
import PolandEn from '@/content/teamPoland/en.json'; 

export type Locale = 'pl' | 'en';
export type MemberDTO = (typeof pl)[number];

const DB: Record<Locale, MemberDTO[]> = { pl, en };
const DB_Poland: Record<Locale, MemberDTO[]> = { pl: polandPl, en: PolandEn };

export function getTeam(locale: Locale): MemberDTO[] {
    return DB[locale];
}

export function getTeamPoland(locale: Locale): MemberDTO[] {
    return DB_Poland[locale];
}


