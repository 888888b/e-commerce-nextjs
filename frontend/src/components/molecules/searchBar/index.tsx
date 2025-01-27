
import Image from "next/image";
import { SearchInput } from "@/components/atoms/searchInput";
import searchIcon from '#/public/search.png';

export default function SearchBar() {
    return (
        <div className="bg-primary rounded-md overflow-hidden flex items-center">
            <SearchInput/>
            <div className="h-7 w-8 relative mr-4">
                <Image
                    src={searchIcon}
                    alt="Icone de uma lupa"
                    fill
                    sizes="100%"
                />
            </div>
        </div>
    );
};