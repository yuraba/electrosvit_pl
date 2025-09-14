import pl from '@/content/realizations/pl.json';
import en from '@/content/realizations/en.json';

export type Locale = 'pl' | 'en';
export type Product = (typeof pl)[number];

const DB: Record<Locale, Product[]> = { pl, en };

export function getRealizations(locale: Locale): Product[] {
    return DB[locale];
}

export function getRealizationBySlug(
    locale: Locale,
    slug: string
): Product | undefined {
    return DB[locale].find((p) => p.slug === slug);
}
