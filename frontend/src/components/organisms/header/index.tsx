import './styles.css';

import NavIcons from "@/components/molecules/navIcons";
import SearchBar from "@/components/molecules/searchBar";
import { ProjectLogo } from "@/components/atoms/projectLogo";
import { AskUserLocation } from '@/components/atoms/askLocation';

export default function Header() {
    return (
        <div className="header-wrapper bg-secondary w-full py-4 px-4"> 
            <div><ProjectLogo/></div>
            <div className='w-full flex justify-end'><NavIcons/></div>
            <div className='col-span-2'><SearchBar/></div>
            <div><AskUserLocation/></div>
        </div>
    );
};