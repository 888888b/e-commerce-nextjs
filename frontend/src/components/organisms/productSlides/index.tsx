'use client';

import { ProductImage } from "@/components/atoms/productImage";
import { ProductTitle } from "@/components/atoms/productTitle";
import ProductRanting from "@/components/molecules/productRanting";
import { SectionTitle } from "@/components/atoms/sectionTitle";
import { ProductPrice } from "@/components/atoms/productPrice";
import { ProductDescription } from "@/components/atoms/productDescription";
import EmblaCarousel from "../emblaCarousel";
import Image from "next/image";

import stove_img from '#/public/stove.webp';
import screw_machine from '#/public/screw_machine.webp';
import closet_img from '#/public/closet.webp';

import { LiaShippingFastSolid } from "react-icons/lia";

import './styles.css';
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
    sliderPerView: number | 'auto';
    carouselTitle?: string;
    dragFree?: boolean;
    carouselId: string;
};

export default function ProductSlides( props: Props ) {
    const { 
        sliderPerView, 
        carouselTitle, 
        dragFree, 
        carouselId,
        ...rest 
    } = props;

    const slides = [
        {
            id: 1,
            img: stove_img,
            description: 'Fogão Portátil Prático Potente Para Preparos Perfeitos',
            ranting: 3.5,
            price: 332.90,
            parcels: 3,
            discount: 12
        },

        {
            id: 2,
            img: screw_machine,
            description: 'Parafusadeira Potente Prática Portátil Para Projetos Profissionais',
            ranting: 2.5,
            price: 332.90,
            parcels: 3,
            discount: 12
        },

        {
            id: 3,
            img: closet_img,
            description: 'Guarda-Roupas Grande Moderno Funcional Para Organização Perfeita',
            ranting: 5,
            price: 332.90,
            parcels: 3,
            discount: 12
        },

        {
            id: 4,
            img: stove_img,
            description: 'Fogão Portátil Prático Potente Para Preparos Perfeitos',
            ranting: 1.5,
            price: 332.90,
            parcels: 3,
            discount: 12
        },
        {
            id: 5,
            img: stove_img,
            description: 'Fogão Portátil Prático Potente Para Preparos Perfeitos',
            ranting: 3.5,
            price: 332.90,
            parcels: 3,
            discount: 12
        },

        {
            id: 6,
            img: screw_machine,
            description: 'Parafusadeira Potente Prática Portátil Para Projetos Profissionais',
            ranting: 2.5,
            price: 332.90,
            parcels: 3,
            discount: 12
        },

        {
            id: 7,
            img: closet_img,
            description: 'Guarda-Roupas Grande Moderno Funcional Para Organização Perfeita',
            ranting: 5,
            price: 332.90,
            parcels: 3,
            discount: 12
        },

        {
            id: 8,
            img: stove_img,
            description: 'Fogão Portátil Prático Potente Para Preparos Perfeitos',
            ranting: 1.5,
            price: 332.90,
            parcels: 3,
            discount: 12
        }
    ];

    return (
        <div {...rest}>
            { carouselTitle && <SectionTitle>{carouselTitle}</SectionTitle> }

            {/* Container do carousel */}
            <EmblaCarousel 
                navigationType='dots' 
                slidesPerView={sliderPerView} 
                dragFree={dragFree}
                alignDots={rest.className === 'product-carousel' ? 
                    'top-right' : 'bottom-center'
                }>

                { slides.map(( slide, index ) => (
                    <div className="embla__slide" key={`${index}-${carouselId}`}>
                        {/* Imagem do produto */}
                        <ProductImage className="img-container">
                            <Image
                                src={slide.img}
                                alt="Imagem do produto"
                                className="product-image object-contain"
                            />
                        </ProductImage>

                        {/* Detalhes */}
                        <div className="product-details">
                            {/* Titulo */}
                            <ProductTitle className="line-clamp-3">{slide.description}</ProductTitle>
                            
                            <div>
                                {/* Avaliação do usuarios */}
                                <ProductRanting/>
                                {/* Preço */}
                                <ProductPrice price="86,99" className="text-xl font-semibold mt-1"/>
                                {/* Numero de parcelas disponiveis */}
                                <ProductDescription className="text-black/70">
                                    Ou <span className="text-black font-medium">{`${slide.parcels}`}x</span> de R$14,90
                                </ProductDescription>
                            </div>

                            {/* Informação sobre fretes */}
                            <ProductDescription className="text-accent font-medium flex items-center gap-x-[6px]">
                                <LiaShippingFastSolid className="text-xl"/>
                                Frete gratis
                            </ProductDescription>
                        </div>
                    </div>
                ))}
            </EmblaCarousel>
        </div>
    );
};