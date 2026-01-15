"use client";
import React, { useRef, useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import Pera from '../../common/typography/Pera';
import FixedWrapper from '../../common/banner/FixedWrapper';
import { IoMdCloseCircle } from "react-icons/io";

interface FilterWrapperProps {
    name: string;
}

const FilterWrapper: React.FC<FilterWrapperProps> = ({ name }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isFixed, setIsFixed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!wrapperRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsFixed(!entry.isIntersecting),
            { root: null, threshold: 0 ,rootMargin: "150px 0px 0px 0px", }
        );

        observer.observe(wrapperRef.current);
        return () => observer.disconnect();
    }, []);

    const content = (
        <div className='flex flex-col md:flex-row gap-[10px] items-center justify-between mb-[50px]'>
            <div className="flex items-center justify-between w-full max-w-[400px] border-b py-3 border-black">
                <input
                    type="text"
                    placeholder="Search All Residential projects"
                    className="w-full rounded-full text-[12px] tracking-[1px] md:text-[14px] text-black placeholder:text-black outline-none"
                />
                <IoSearchOutline className="text-black" />
            </div>
            <div className='flex items-center gap-3'>
                <Pera className='uppercase tracking-[1px]'>{name} Page</Pera>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className='py-[7px] px-[15px] text-[14px] tracking-[2px] border uppercase flex items-center gap-[10px] hover:bg-white hover:border-white transition-all duration-300 ease-out'
                >
                    Filter <FaFilter className="text-[var(--foreground)]" />
                </button>
            </div>
        </div>
    );

    return (
        <div ref={wrapperRef}>
            <div className="h-[70px]">
                
            {isFixed ? (
                <FixedWrapper className="strip-fixed fixed z-[11] left-0 w-full h-[50px] bg-[#e1eee9] bottom-0 opacity-100 transition-all duration-500 ease-in">
                    <div className="wrapper">
                    {content}
                    </div>
                </FixedWrapper>
            ) : content}
            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <>

                    {/* Modal Drawer */}
                    {isModalOpen && (
                        <FixedWrapper className="fixed inset-0 z-[102]">
                            {/* Overlay */}
                            <div
                                onClick={() => setIsModalOpen(false)}
                                className="absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out"
                            />

                            {/* Drawer */}
                            <div
                                className={`absolute top-0 right-0 h-full w-[400px] bg-white shadow-lg 
                  transform transition-transform duration-700 ease-out
                  ${isModalOpen ? "translate-x-0" : "translate-x-full"}`}
                            >
                                <div className="flex flex-col h-full p-5">
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="absolute top-[15px] right-[15px] 
                  w-[40px] h-[40px] rounded-full
                  flex items-center justify-center 
                  text-[32px] text-black 
                  transition-transform duration-300 ease-out
                  hover:scale-110 hover:border hover:border-black transition-all"
                                    >
                                        <IoMdCloseCircle />
                                    </button>
                                    <h3 className="font-bold text-lg mb-3">Filter Options</h3>
                                    <div className="flex flex-col gap-3">
                                        <label>
                                            <input type="checkbox" /> Residential
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Commercial
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Industrial
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </FixedWrapper>
                    )}

                </>
            )}
        </div>
    );
};

export default FilterWrapper;
