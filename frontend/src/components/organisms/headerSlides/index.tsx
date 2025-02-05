'use client';

import hero_poster_1 from '#/public/hero_poster_1.png';
import hero_poster_2 from '#/public/hero_poster_2.png'

import EmblaCarousel from "../emblaCarousel";
import Image from "next/image";

import './styles.css';

export default function HeaderSlides() {
    
    const slides = [
        {
            img: hero_poster_1,
            id: 0
        },

        {
            img: hero_poster_2,
            id: 1
        },

        {
            img: hero_poster_1,
            id: 2
        },

        {
            img: hero_poster_2,
            id: 3
        },
    ];

    return(
        <div className='header-slides bg-gradient-to-b from-secondary via-secondary to-background'>
            <EmblaCarousel 
                navigationType='arrows'
                slidesPerView={1} 
                loop={true} 
                initialIndex={1}>
                <>
                    { slides.map( slide => (
                        <div className="embla__slide" key={slide.id}>
                            <Image
                                src={slide.img}
                                alt="Poster de promoções e ofertas no Zillus Shop"
                                className='object-cover hero-image'
                                priority
                            />
                        </div>
                    ))}
                </>
            </EmblaCarousel>
        </div>
    );
};