import { ProductImage } from "@/components/atoms/productImage";
import Image from "next/image";
import { SectionTitle } from "@/components/atoms/sectionTitle";

import screw_machine from '#/public/screw_machine.webp';
import cellphone_img from '#/public/cellphone.webp';

type Props = {
    sectionTitle: string;
};

export default function OffersCard( props: Props ) {
    return (
        // Card com produtos em promoção
        <div className='flex flex-col gap-y-5 w-full min-[450px]:max-w-44'>
            {/* Titulo da seção */}
            <SectionTitle>{ props.sectionTitle }</SectionTitle>
            <div className="flex gap-7 justify-between min-[450px]:flex-col">
                {/* Imagem do produto 1 */}
                <ProductImage className="w-full aspect-square min-w-28 rounded-md relative shadow-[4px_4px_10px_rgba(0,0,0,0.20)] flex items-center justify-center ">
                    <Image
                        src={screw_machine}
                        alt="Imagem de uma parafusadeira"
                        className="h-4/6 object-contain"
                    />
                </ProductImage>

                {/* Imagem do produto 2 */}
                <ProductImage className="w-full aspect-square min-w-28 rounded-md relative shadow-[4px_4px_10px_rgba(0,0,0,0.20)] flex items-center justify-center">
                    <Image
                        src={cellphone_img}
                        alt="Imagem de uma parafusadeira"
                        className="h-4/6 object-contain"
                    />
                </ProductImage>
            </div>
        </div>
    );
};