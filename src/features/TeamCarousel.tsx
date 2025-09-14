'use client';

import { MemberDTO } from '@/interfaces/MemberDTO';
import { useCallback, useRef, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight, CircleSmall } from 'lucide-react';
import Image from 'next/image';
import '@/css/team-carousel.scss';

interface TeamCarousel {
    list: MemberDTO[];
    className?: string;
}

const TeamCarousel = ({ list, className = '' }: TeamCarousel) => {
    const teamList = useRef(
        list.length > 0 ? list : [{ name: '', position: '', image: '' }]
    );
    const [api, setApi] = useState<CarouselApi>();
    const [indexShown, setShownIndex] = useState(0);

    const scroll = useCallback(
        (direction: 'prev' | 'next') => {
            if (direction === 'prev') api?.scrollPrev();
            if (direction === 'next') api?.scrollNext();

            setShownIndex(api?.selectedScrollSnap() as number);
        },
        [api]
    );

    const scrollTo = (index: number) => {
        api?.scrollTo(index);
        setShownIndex(api?.selectedScrollSnap() as number);
    };

    if (!list) return;

    return (
        <Carousel
            className={clsx('team-carousel', className)}
            setApi={setApi}
            opts={{ loop: true }}
        >
            <ChevronLeft
                size={96}
                strokeWidth={0.5}
                className="team-carousel__arrow"
                onClick={() => scroll('prev')}
            />

            <CarouselContent>
                {teamList.current.map((member: MemberDTO) => (
                    <CarouselItem key={member.name} className="grow">
                        <div className="team-carousel__item">
                            {member.image ? (
                                <Image
                                    src={member.image || 'user_placeholder.svg'}
                                    className="team-carousel__image"
                                    alt="member photo"
                                    width={364}
                                    height={364}
                                />
                            ) : (
                                <div className="team-carousel__image">
                                    <Image
                                        src="user_placeholder.svg"
                                        alt="member photo"
                                        width={193}
                                        height={193}
                                    />
                                </div>
                            )}

                            <strong className="team-carousel__name">
                                {member.name}
                            </strong>
                            <p className="team-carousel__description">
                                {member.position}
                            </p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <ChevronRight
                size={96}
                strokeWidth={0.5}
                className="team-carousel__arrow"
                onClick={() => scroll('next')}
            />
            <div className="team-carousel__circles">
                {list.map((el, index) => (
                    <CircleSmall
                        onClick={() => scrollTo(index)}
                        key={el.name}
                        strokeWidth={0.5}
                        fill={indexShown === index ? 'green' : 'white'}
                        className="text-white"
                    />
                ))}
            </div>
        </Carousel>
    );
};

export default TeamCarousel;
