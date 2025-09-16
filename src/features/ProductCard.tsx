'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import '@/css/product-card.scss';

interface ProductCardProps {
    name: string;
    badge: string;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
    className?: string;
}

const ProductCard = ({
    name,
    badge,
    imageUrl,
    imageWidth,
    imageHeight,
    className = '',
}: ProductCardProps) => {
    const t = useTranslations('Features');

    return (
        <div className={`product-card ${className}`}>
            <Image
                className="rounded-xl object-cover"
                src={imageUrl}
                alt={name}
                width={imageWidth}
                height={imageHeight}
            />
            <span className="product-card__badge">{badge}</span>
            <p className="product-card__name">{name}</p>
            <Button className="product-card__button" variant="ghost">
                {t('more')}
                <ChevronRight />
            </Button>
        </div>
    );
};

export default ProductCard;
