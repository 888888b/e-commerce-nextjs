import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
    children: string
};

export const CategoryTitle = ( props: Props ) => {
    const { children, ...rest } = props;
    return (
        <h5 {...rest}>{children}</h5>
    );
};