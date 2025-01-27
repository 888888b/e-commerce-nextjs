import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLElement> & {
    children: ReactNode;
};

export const ProductTitle = ( props: Props ) => {
    const { children, ...rest } = props;

    return (
        <h4 {...rest}>
            { children }
        </h4>
    );
};