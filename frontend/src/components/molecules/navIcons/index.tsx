import Image from "next/image";

import heartIcon from '#/public/heart.png';
import cartIcon from '#/public/shopping _cart.png';
import userIcon from '#/public/user.png';

export default function NavIcons() {
    return (
        <div className="flex items-center gap-x-3">
            <div className="w-8 h-8 relative">
                <Image
                    src={heartIcon}
                    alt="Icone de coração"
                    fill
                    sizes="100%"
                />
            </div>

            <div className="w-8 h-8 relative">
                <Image
                    src={userIcon}
                    alt="Icone de usuario"
                    fill
                    sizes="100%"
                />
            </div>
            
            <div className="w-8 h-8 relative">
                <Image
                    src={cartIcon}
                    alt="Icone de carrinho de compras"
                    fill
                    sizes="100%"
                />

                <span className="w-4 h-4 rounded-full bg-primary text-[12px] absolute top-0 right-0 flex items-center justify-center -translate-y-2 translate-x-2">1</span>
            </div>
        </div>
    );
};