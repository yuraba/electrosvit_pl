'use client';

import { useEffect, useState } from 'react';
import MultiSelect, { MultiSelectOption } from '@/features/MultiSelect';
import { Funnel } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ProductDTO } from '@/interfaces/ProductDTO';

type FiltersProps = {
    options: ProductDTO[];
    setOptions: (opts: ProductDTO[]) => void;
};

const Filters = ({ options, setOptions }: FiltersProps) => {
    const t = useTranslations('RealizationsPage');
    const [firstRender, setFirstRender] = useState(true);
    const [value, setValue] = useState<string[]>([]);

    const optionsList: MultiSelectOption[] = options.map((opt) => ({
        value: opt.slug,
        label: opt.name,
    }));

    useEffect(() => {
        if (!firstRender) {
            if (value.length > 0) {
                const filtered = options.filter((o) => value.includes(o.slug));
                setOptions(filtered);
            } else {
                setOptions(options);
            }
        } else {
            setFirstRender(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <MultiSelect
            icon={<Funnel className="text-[var(--green-color)]" />}
            className="realizations__filter"
            selectAll
            options={optionsList}
            value={value}
            onChange={setValue}
            placeholder={t('filters')}
            maxBadges={3}
        />
    );
};

export default Filters;
