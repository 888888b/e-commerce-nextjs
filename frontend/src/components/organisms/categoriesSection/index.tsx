'use client';

import Category from "@/components/molecules/category";
import { SectionTitle } from "@/components/atoms/sectionTitle";
import { StaticImageData } from "next/image";
import EmblaCarousel from "@/components/organisms/emblaCarousel";

import './styles.css';

type CategoryProps = {
    id: string;
    img: StaticImageData;
    title: string;
};

type Props = {
    categories: CategoryProps[]
    className?: string;
};

export default function CategoriesSection( props: Props ) {
    const { categories, className } = props;
    return (
        <div className={`categories-section flex flex-col ${className}`}>
            <SectionTitle className="ml-4">Categorias</SectionTitle>

            <EmblaCarousel 
                navigationType='dots' 
                alignDots='top-right'
                slidesPerView='auto' 
                dragFree={true}
                >
                { categories.map( category => (
                    <Category 
                        key={category.id} 
                        title={category.title} 
                        image={category.img}
                        className="embla__slide"
                    />
                ))}
            </EmblaCarousel>
        </div>
    );
};