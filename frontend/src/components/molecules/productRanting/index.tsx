import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function ProductRanting() {
    return (
        <div className="flex items-center gap-x-[10px] opacity-60 text-[15px] text-black">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt/>
            <FaRegStar/>
        </div>
    );
};