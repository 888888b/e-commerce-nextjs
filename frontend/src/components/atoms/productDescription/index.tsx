import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLElement> & {
    children: ReactNode;
};

export const ProductDescription = ( props: Props ) => {
    const { children, ...rest } = props;

    return (
        <p {...rest}>{children}</p>
    );
};