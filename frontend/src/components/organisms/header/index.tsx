import './styles.css';

import NavIcons from "@/components/molecules/navIcons";
import SearchBar from "@/components/molecules/searchBar";
import { ProjectLogo } from "@/components/atoms/projectLogo";
import { AskUserLocation } from '@/components/atoms/askLocation';
import CategoryBar from '@/components/molecules/categoryBar';

export default function Header() {
    return (
        <div className="header-wrapper bg-secondary w-full py-4 px-4 md:px-6 lg:px-8 xl:px-10"> 
            <div className='order-1 flex items-center'><ProjectLogo/></div>
            <div className='w-full flex justify-end order-2 md:order-3'><NavIcons/></div>
            <div className='col-span-2 order-3 md:order-2 md:col-span-1'><SearchBar/></div>
            <div className='flex items-center gap-20 col-span-2 overflow-hidden order-4 md:col-span-3 justify-between'>
                <AskUserLocation/>
                <CategoryBar/>
            </div>
        </div>
    );
};