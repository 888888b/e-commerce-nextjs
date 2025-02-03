
import { ReactNode, useCallback, useEffect, memo } from "react";

import useEmblaCarousel from "embla-carousel-react";
import NavigationDots from "@/components/molecules/navigationDots";
import autoplay from 'embla-carousel-autoplay';
import ClassNames from "embla-carousel-class-names";
import { useDotButton } from "@/hooks/embla/useDotButton";

import './styles.css';

type EmblaCarouselProps = {
    children: ReactNode[] | ReactNode;
    loop?: boolean;
    slidesPerView?: 'auto' | number;
    autoplay?: boolean;
    navigationType: 'arrows' | 'dots';
    initialIndex?: number;
    dragFree?: boolean;
    alignDots?: 'bottom-center' | 'top-right';
};

export type EmblaStateProps = {
    isBeginning: boolean; 
    isOver: boolean;
    numberOfSlides: number;
    activeIndex: number;
};
const EmblaCarousel = memo(( props: EmblaCarouselProps ) => {

    const emblaConfig = { 
        loop: props.loop, 
        slidesToScroll: props.slidesPerView, 
        duration: 0,
        startIndex: props.initialIndex ?? 0,
        dragFree: props.dragFree
    };

    const [emblaRef, emblaApi] = useEmblaCarousel( emblaConfig, [ClassNames()] );
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    // const {
    //     prevBtnDisabled,
    //     nextBtnDisabled,
    //     onPrevButtonClick,
    //     onNextButtonClick
    // } = usePrevNextButtons(emblaApi);


    const scrollToIndex = useCallback(( index: number ) => {
        emblaApi?.scrollTo( index )
    }, [ emblaApi ]);

    useEffect(() => {
        if ( emblaApi ) {
            if ( props.autoplay ) {
                emblaApi.reInit({}, [autoplay({delay: 7000, stopOnInteraction: false})]);
            };
            emblaApi.on('slidesChanged', () => scrollToIndex( 0 ));
        };
    }, [ emblaApi, props.autoplay, scrollToIndex ]);

    return (
        <div>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        { props.children }
                    </div>
                </div>

               { props.navigationType === 'dots' ? (
                    <NavigationDots
                        onDotButtonClick={onDotButtonClick}
                        scrollSnaps={scrollSnaps}
                        selectedIndex={selectedIndex}
                        className={props.alignDots ?? 'dots-container'}
                    />
               ) : null }
            </div>
        </div>
    );
});

EmblaCarousel.displayName = 'EmblaCarousel';
export default EmblaCarousel;
