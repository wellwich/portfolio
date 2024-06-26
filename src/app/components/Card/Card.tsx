import { useState, useRef } from 'react';
import data from '@/app/data';
import Image from "next/image";

export default function Card({
    id,
    title,
    thumbnailSrc,
    imageSrc,
}: typeof data[0]) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div onClick={toggleModal} className="cursor-pointer">
                <Image
                    alt=""
                    src={thumbnailSrc}
                    height={512}
                    width={512}
                    className="w-full object-cover mb-5"
                />
            </div>
            {isOpen && (
                <div onClick={closeModal} className='bg-opacity-50 bg-black w-full h-full fixed top-0 left-0 grid items-center justify-center'>
                    <div onClick={(e) => e.stopPropagation()} className='grid bg-gray-100 rounded-lg p-4 relative max-w-fit min-h-fit'>
                        <Image
                            alt=""
                            src={imageSrc}
                            height={512}
                            width={512}
                            className="object-contain max-h-[75vh] max-w-[80vw]"
                        />
                        <h2 className='text-[1.5rem] font-bold bg-white rounded-lg p-4'>{title}</h2>
                    </div>
                </div>
            )}
        </>
    );
}

export const runtime = 'edge';