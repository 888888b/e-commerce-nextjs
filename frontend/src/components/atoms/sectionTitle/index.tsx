import { ReactNode } from "react";

type Props = {
    className?: string;
    children: ReactNode
}

export const SectionTitle = ( props: Props ) => {
    return (
        <h2 className={`font-semibold text-lg ${props.className}`}>{props.children}</h2>
    );
};