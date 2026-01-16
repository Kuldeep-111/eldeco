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

    // Modal states
    const [isModalOpen, setIsModalOpen] = useState(false); // controls animation
    const [isVisible, setIsVisible] = useState(false);     // controls DOM presence
    const [activeType, setActiveType] = useState("EHIL"); // default selected type
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const parentRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>({
        categories: [],
        city: [],
        typology: [],
        status: [],
    });


    useEffect(() => {
        if (!wrapperRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsFixed(!entry.isIntersecting),
            { root: null, threshold: 0 }
        );

        observer.observe(wrapperRef.current);
        return () => observer.disconnect();
    }, []);

    // Open modal
    const openModal = () => {
        setIsVisible(true);                  // Mount modal
        setTimeout(() => setIsModalOpen(true), 10); // Start enter animation
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);               // Start exit animation
        setTimeout(() => setIsVisible(false), 700); // Unmount after animation
    };
    const dropdownItems = {
        categories: ["Residential", "Commercial", "Industrial"],
        city: ["New York", "London", "Paris"],
        typology: ["Type 1", "Type 2", "Type 3"],
        status: ["Active", "Completed", "Pending"],
    };

    const toggleDropdown = (key: string) => {
        // If clicking the already active dropdown, close it
        if (activeDropdown === key) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(key);
        }
    };

    const content = (
        <div className='flex flex-col md:flex-row gap-[10px] items-center justify-between'>
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
                    onClick={openModal}
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
                {/* Normal flow placeholder */}
                <div className="mb-[50px]">{content}</div>

                {/* Fixed strip (ALWAYS mounted) */}
                <FixedWrapper
                    className={`
    strip-fixed fixed left-0 bottom-0 w-full flex items-center h-[70px] z-[11]
    transition-transform transition-opacity duration-300 bg-[var(--background)] transition-all duration-500 ease-in
    ${isFixed ? "opacity-100 bottom-0 pointer-events-auto" : "opacity-0 bottom-[-100px] pointer-events-none"}
  `}
                >
                    <div className="wrapper">{content}</div>
                </FixedWrapper>
            </div>

            {/* Modal Drawer */}
            {isVisible && (
                <FixedWrapper className="fixed inset-0 z-[102]">
                    {/* Overlay */}
                    <div
                        onClick={closeModal}
                        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out
              ${isModalOpen ? "opacity-100" : "opacity-0"}`}
                    />

                    {/* Drawer */}
                    <div
                        className={`absolute top-0 right-0 h-full w-[400px] bg-white shadow-lg
              transform transition-transform duration-700 ease-out
              ${isModalOpen ? "translate-x-0" : "translate-x-full"}`}
                    >
                        <div className="flex flex-col h-full p-5 relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-[15px] right-[15px] 
                  w-[40px] h-[40px] rounded-full
                  flex items-center justify-center 
                  text-[32px] text-black 
                  hover:scale-110 hover:border hover:border-black transition-all duration-300 ease-out"
                            >
                                <IoMdCloseCircle />
                            </button>
                            <div className="flex flex-col p-6 gap-6 mt-16 h-full">
                                {/* Top Types */}
                                <div className="flex gap-4">
                                    {["EHIL", "EIPL"].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setActiveType(type)}
                                            className={`flex-1 border px-4 py-2 text-center uppercase text-sm font-medium
                                             ${activeType === type ? "bg-black text-white" : "bg-white text-black border-black"}
                                             transition-colors duration-300`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                                <div className="relative w-full h-full">

                                    {/* Dropdowns */}
                                    {Object.keys(dropdownItems).map((key) => (
                                        <div
                                            key={key}
                                            className={`overflow-hidden my-[15px] transition-[max-height,opacity,margin]
                                           ${activeDropdown && activeDropdown == key ? "absolute top-0 left-0 w-full h-full opacity-100 z-[2] bg-white" : "relative"}`}
                                            ref={(el) => { parentRefs.current[key] = el; }}
                                        >
                                            <button
                                                onClick={() => toggleDropdown(key)}
                                                className="w-full flex justify-between items-center text-black tracking-[2px] uppercase font-medium"
                                            >
                                                {key}
                                                <span className="ml-2 transform transition-transform duration-300">
                                                    {activeDropdown === key ? "▲" : "▼"}
                                                </span>
                                            </button>

                                            <div
                                                className={`overflow-hidden pl-4 mt-[15px] 
                                                ${activeDropdown === key ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                                            >
                                                {dropdownItems[key as keyof typeof dropdownItems].map((item) => (
                                                    <label key={item} className="flex items-center gap-[15px] mt-[10px] tracking-[2px] capitalize">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedItems[key]?.includes(item)}
                                                            onChange={() => {
                                                                setSelectedItems((prev) => {
                                                                    const prevItems = prev[key] || [];
                                                                    if (prevItems.includes(item)) {
                                                                        // remove
                                                                        return { ...prev, [key]: prevItems.filter((i) => i !== item) };
                                                                    } else {
                                                                        // add
                                                                        return { ...prev, [key]: [...prevItems, item] };
                                                                    }
                                                                });
                                                            }}
                                                        /> {item}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                {/* Submit button */}
                                <button className="mt-auto bg-[#147B58] text-white py-3 text-center uppercase font-semibold tracking-widest hover:bg-green-800 transition-colors duration-300">
                                    Submit Now
                                </button>
                            </div>
                        </div>
                    </div>
                </FixedWrapper>
            )}
        </div>
    );
};

export default FilterWrapper;
