import { HTMLAttributes } from 'react';
import './styles.css';

type Props = HTMLAttributes<HTMLElement>

export default function CategoryBar( props: Props ) {
    return (
        <ul className={`category-bar hidden md:flex items-center gap-x-7 whitespace-nowrap overflow-x-auto text-primary md:text-[17px] *:cursor-pointer ${props.className}`}>
            <li>Supermercado</li>
            <li>Ferramentas</li>
            <li>Ofertas</li>
            <li>Eletrodomésticos</li>
            <li>Veículos</li>
            <li>Tecnologia</li>
            <li>Supermercado</li>
            <li>Ferramentas</li>
            <li>Ofertas</li>
            <li>Eletrodomésticos</li>
            <li>Veículos</li>
            <li>Tecnologia</li>
        </ul>
    );
};