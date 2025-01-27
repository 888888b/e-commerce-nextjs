import Image from "next/image";
import locationIcon from '#/public/location.png';

export const AskUserLocation = () => {
    return (
        <div className="flex items-center">  
            <div className="relative h-8 w-8">
                <Image
                    src={locationIcon}
                    alt="Icone de localização"
                    fill
                    sizes="100%"
                />
            </div>
            <h3 className="font-normal text-base text-white">Informar CEP</h3>
        </div>
    );
};