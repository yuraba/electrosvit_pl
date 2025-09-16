'use client';

import { useState, useRef, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import MediaDialog from './MediaDialog';
import Image from 'next/image';
import clsx from 'clsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/css/media-carousel.scss';

interface MediaCarouselProps {
    list: string[];
    className?: string;
    withThumbnails?: boolean;
    withDots?: boolean;
}

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function PrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;

    return (
        <ChevronLeft
            className={clsx('media-carousel__arrow prev', className)}
            style={{ ...style}}
            onClick={onClick}
            size={64}
            strokeWidth={0.5}
        />
    );
}

function NextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <ChevronRight
            className={clsx('media-carousel__arrow next', className)}
            style={{ ...style }}
            onClick={onClick}
            size={64}
            strokeWidth={0.5}
        />
    );
}

function customDots(dots: any) {
    return (
        <div>
            <ul className="media-carousel__dots">{dots}</ul>
        </div>
    );
}

const MediaCarousel = ({
    list,
    className,
    withThumbnails = false,
    withDots = false,
}: MediaCarouselProps) => {
    const sliderRef1 = useRef<Slider | null>(null);
    const sliderRef2 = useRef<Slider | null>(null);

    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);

    const settings: Settings = {
        arrows: !withThumbnails,
        dots: !withThumbnails && withDots,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        asNavFor: withThumbnails ? (nav2 as Slider) : undefined,
        appendDots: customDots,
    };

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    return (
        <div className={clsx('media-carousel', className)}>
            <Slider {...settings} ref={sliderRef1}>
                {list.map((imageUrl: string, i) => (
                    <MediaDialog
                        key={i}
                        imageUrl={imageUrl}
                        imageWidth={924}
                        imageHeight={924}
                        className="m-auto rounded-xl aspect-[1/1] object-cover"
                        alt="factory photo"
                    />
                ))}
            </Slider>
            {withThumbnails && (
                <div className="media-carousel__thumbnails">
                    <Slider
                        asNavFor={nav1 as Slider}
                        dots={withDots}
                        ref={sliderRef2}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        nextArrow={<NextArrow />}
                        prevArrow={<PrevArrow />}
                        appendDots={customDots}
                    >
                        {list.map((imageUrl: string, i) => (
                            <Image
                                key={i}
                                src={imageUrl}
                                className="media-carousel__thumbnails-item"
                                alt="factory photo"
                                width={225}
                                height={150}
                            />
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    );
};

export default MediaCarousel;
