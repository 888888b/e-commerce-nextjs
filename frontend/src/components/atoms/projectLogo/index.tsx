import Link from "next/link";
import Image from "next/image";
import logo from '#/public/project_logo.png';

export const ProjectLogo = () => {
    return (
        <Link href={'/'}>
            <div className="w-[110px] h-8 relative">
                <Image
                    src={logo}
                    alt="Logo do e-commerce zillus shop"
                    fill
                    sizes="100%"
                    className="object-cover"
                />
            </div>
        </Link>
    );
};