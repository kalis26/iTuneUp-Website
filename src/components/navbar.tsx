'use client'

import Image from "next/image";
import { SfProText } from "@/fonts";
import { useEffect, useState } from "react";

type NavbtnProps = {
    tinted?: boolean;
    label: string;
    link: string;
};

function Navtbn({label, link, tinted}: NavbtnProps) {
    return <a href={link} className={`${SfProText.className} font-light text-sm transition-all duration-200 ${tinted ? "bg-[#0091FF] text-white hover:bg-[#2ea5ff] border-white/15 border-[1px] hover:text-white px-2 py-1 rounded-2xl" : "text-black/80 hover:text-black "}`}>{label}</a>
}

export default function Navbar() {

    const [ showOverlay, setShowOverlay ] = useState(false);

    useEffect(() => {

        if (showOverlay) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    
        return () => {
            document.body.style.overflow = 'unset';
        };

    }, [showOverlay]);

    return (
        <div className="flex flex-row items-center sticky top-0 bg-[rgba(250,250,252,0.8)] backdrop-blur-lg z-[1000] h-11">
            <div className="flex-1 flex flex-row items-center md:justify-center justify-start">
                <a href="/" className={`font-bold text-lg text-[#1D1D1F] md:p-0 pl-6`}>
                    <div className="flex flex-row gap-2 items-center">
                        <Image 
                            src="/images/iTuneUp.png"
                            height={512}
                            width={512}
                            priority={true}
                            alt="The iTuneUp logo"
                            className="h-5 w-5"
                        />
                        iTuneUp
                    </div> 
                </a>
            </div>
            <div className="hidden md:flex flex-1 flex-row items-center justify-center md:gap-5 lg:gap-10">        
                <Navtbn label="Home" link="/" tinted={false} />
                <Navtbn label="Features" link="" tinted={false} />
                <Navtbn label="Documentation" link="/documentation" />
                <Navtbn label="Support" link="/support" />
            </div>
            <div className="flex-1 flex flex-row items-center md:justify-center justify-end gap-4 md:p-0 pr-6">
                <div className="md:hidden flex items-center">
                    <button onClick={() => setShowOverlay(true)} className="cursor-pointer">
                        <svg className="h-4 w-4" viewBox="0 0 16 9" data-chevron-icon="" xmlns="http://www.w3.org/2000/svg">
                            <polyline shapeRendering="geometricPrecision" data-chevron-icon-shape="" stroke="#1D1D1F" strokeLinecap="round" vectorEffect="non-scaling-stroke" strokeLinejoin="round" fill="none" fillRule="evenodd" points="15.265 .835 8 8.167 .735 .835">
                                <animate data-chevron-animate="expand" attributeName="points" values="15.265 .835 8 8.167 .735 .835;
                                            15.25 4.5 8 4.5 .75 4.5;
                                            15.265 8.165 8 .835 .735 8.165" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0;
                                            0.5;
                                            1" calcMode="spline" keySplines="0.12, 0, 0.38, 0;
                                                0.2, 1, 0.68, 1"></animate>
                                <animate data-chevron-animate="collapse" attributeName="points" values="15.265 8.165 8 .835 .735 8.165;
                                            15.25 4.5 8 4.5 .75 4.5;
                                            15.265 .835 8 8.167 .735 .835" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0;
                                            0.5;
                                            1" calcMode="spline" keySplines="0.2, 0, 0.68, 0;
                                                0.2, 1, 0.68, 1"></animate>
                            </polyline>
                        </svg>
                    </button>
                </div>
                <Navtbn tinted={true} label="Download" link="https://github.com/kalis26/iTuneUp/releases/download/v1.2.5/iTuneUp-Setup.exe" />
            </div>
        </div>
    );
}