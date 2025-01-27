import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLElement> & {
    children: ReactNode
};

export const ProductImage = ( props: Props ) => {
    const { children, ...rest } = props;
    return (
        <div { ...rest }>
            { children }
        </div>
    );
};