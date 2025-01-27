import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
    price: string;
};

export const ProductPrice = ( props: Props ) => {
    const { price, ...rest } = props;

    return (
        <h3 {...rest}>R$ {price.replace('.', ',')}</h3>
    );
};