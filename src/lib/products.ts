import pl from '@/content/products/pl.json';
import en from '@/content/products/en.json';

export type Locale = 'pl' | 'en';
export type Product = (typeof pl)[number];

const DB: Record<Locale, Product[]> = { pl, en };

export function getProducts(locale: Locale): Product[] {
    return DB[locale];
}

export function getProductBySlug(
    locale: Locale,
    slug: string
): Product | undefined {
    return DB[locale].find((p) => p.slug === slug);
}
