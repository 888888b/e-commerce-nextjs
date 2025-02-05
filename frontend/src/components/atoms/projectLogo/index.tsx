import Link from "next/link";
import Image from "next/image";
import logo from '#/public/project_logo.png';

export const ProjectLogo = () => {
    return (
        <Link href={'/'}>
            <div className="">
                <Image
                    src={logo}
                    alt="Logo do e-commerce zillus shop"
                    className="object-contain w-auto h-9 lg:h-10"
                />
            </div>
        </Link>
    );
};