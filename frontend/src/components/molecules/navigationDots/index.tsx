import { DotButton } from "@/components/atoms/emblaDots";
import { UseDotButtonType } from "@/hooks/embla/useDotButton";
import { HTMLAttributes } from "react";

import './styles.css';

type Props = UseDotButtonType & HTMLAttributes<HTMLElement>;

export default function NavigationDots( props: Props ) {
    const { 
        scrollSnaps, 
        selectedIndex, 
        onDotButtonClick,
        ...rest 
    } = props;

    return (
        <div {...rest}>
            { scrollSnaps.map((_, index) => (
                <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className="w-[10px] h-[10px] rounded-full border-none outline-none"
                    style={{ backgroundColor: index === selectedIndex ? 
                        'black' : 'rgba(0, 0, 0, 0.2)' 
                    }}
                />
            ))}
        </div>
    );
};