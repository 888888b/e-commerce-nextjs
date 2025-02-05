import { ReactNode } from "react";

type Props = {
    className?: string;
    children: ReactNode;
};

export const SectionTitle = ( props: Props ) => {
    return (
        <h2 className={`font-semibold text-lg whitespace-nowrap md:text-[19px] lg:text-[20px] ${props.className}`}>{props.children}</h2>
    );
};