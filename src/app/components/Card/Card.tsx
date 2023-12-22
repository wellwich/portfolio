import { useState, useRef } from 'react';
import Image from "next/image";

export default function Card({
    id,
    title,
    imageSrc,
}: {
    id: string;
    title: string;
    imageSrc: string;
}) {
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
                    src={imageSrc}
                    height={256}
                    width={256}
                    className="w-full object-cover mb-5"
                />
            </div>
            {isOpen && (
                <div onClick={closeModal} className='bg-opacity-50 bg-black w-full h-full fixed top-0 left-0'>
                    <div onClick={(e) => e.stopPropagation()} className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <div className="modal-body">
                            <Image
                                alt=""
                                src={imageSrc}
                                height={512}
                                width={512}
                                className="h-full object-contain"
                            />
                            <h2 className='text-[1.5rem] bg-white'>{title}</h2>
                            <div className='absolute top-[-2.25rem] right-0 h-9 w-9'>
                                <div onClick={closeModal} className=' font-bold bg-black bg-opacity-50 text-4xl cursor-pointer text-white flex items-center justify-center h-full'>×</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export const runtime = 'edge';