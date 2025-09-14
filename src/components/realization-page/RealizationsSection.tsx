'use client';

import { ProductDTO } from '@/interfaces/ProductDTO';
import ProductCard from '@/features/ProductCard';
import Filters from '@/components/realization-page/Filters';
import { Link } from '@/i18n/navigation';
import { useState } from 'react';

interface RealizationsSectionProps {
    realizations: ProductDTO[];
}

const RealizationsSection = ({ realizations }: RealizationsSectionProps) => {
    const [dataList, setDataList] = useState(realizations);

    return (
        <section>
            <Filters setOptions={setDataList} options={realizations} />

            <div className="realizations__list">
                {dataList.map((r: ProductDTO) => (
                    <Link
                        className="product-wrapper"
                        key={r.name}
                        href={{
                            pathname: '/realizations/[slug]',
                            params: { slug: r.slug },
                        }}
                    >
                        <ProductCard
                            name={r.name}
                            badge={r.badge}
                            imageUrl={r.image}
                            imageWidth={580}
                            imageHeight={480}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RealizationsSection;
