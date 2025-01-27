type Props = {
    onNextButtonClick: () => void;
};

export const ArrowRight = ({ onNextButtonClick }: Props ) => {
    return (
        <button
            onClick={onNextButtonClick}
            className='absolute w-fit rounded-full z-30 translate-x-20 cursor-pointer items-center justify-center translate-y-[1px] hidden md:inline outline-none border-none'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6  text-neutral-500 hover:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    );
};