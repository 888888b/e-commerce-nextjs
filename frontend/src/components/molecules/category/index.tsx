import Image, { StaticImageData } from "next/image";
import { CategoryTitle } from "@/components/atoms/categoryTitle";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
    image: StaticImageData
    title: string;
};

export default function Category( props: Props ) {
    const { image, title, ...rest} = props;

    return (
        <div {...rest}> 
            <Image
                src={image}
                alt=""
                className="h-14 w-fit"
            />

            <CategoryTitle className="uppercase text-[13px] font-medium">
                {title}
            </CategoryTitle>
        </div>
    );
};