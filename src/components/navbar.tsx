'use client'

import Image from "next/image";
import { SfProText } from "@/fonts";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type NavbtnProps = {
    tinted?: boolean;
    label: string;
    link?: string;
    internal?: boolean;
    onClick?: () => void;
};

function Navtbn({label, link, tinted, internal, onClick}: NavbtnProps) {
    const baseClassName = `${SfProText.className} text-left cursor-pointer font-light text-sm transition-all duration-200 ${tinted ? "bg-[#0091FF] text-white hover:bg-[#2ea5ff] border-white/15 border-[1px] hover:text-white px-2 py-1 rounded-2xl" : "text-black/80 hover:text-black "}`;
    
    if (onClick) {
        return <button onClick={onClick} className={baseClassName}>{label}</button>
    }
    if (!internal) {
        return <a href={link} className={baseClassName}>{label}</a>
    } else {
        return <Link href={link || "/"} className={baseClassName}>{label}</Link>
    }
    
}

export default function Navbar() {

    const [ showOverlay, setShowOverlay ] = useState(false);
    const [ shouldScrollToFeatures, setShouldScrollToFeatures ] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleFeaturesClick = () => {
        if (pathname === '/') {
            const featuresElement = document.getElementById('features');
            if (featuresElement) {
                if (showOverlay) setShowOverlay(false);
                featuresElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            setShouldScrollToFeatures(true);
            router.push('/');
        }
    };

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

    useEffect(() => {
        if (pathname === '/' && shouldScrollToFeatures) {
            setTimeout(() => {
                const featuresElement = document.getElementById('features');
                if (featuresElement) {
                    featuresElement.scrollIntoView({ behavior: 'smooth' });
                    setShouldScrollToFeatures(false);
                }
            }, 100);
        }
    }, [pathname, shouldScrollToFeatures]);

    useEffect(() => {
        if (pathname === '/' && window.location.hash === '#features') {
            setTimeout(() => {
                const featuresElement = document.getElementById('features');
                if (featuresElement) {
                    featuresElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [pathname]);

    return (
        <>
            <div className={`sticky top-0 flex flex-row items-center backdrop-blur-lg z-[1000] h-11 transition-opacity duration-300 ${showOverlay ? "bg-white opacity-100" : "bg-[rgba(250,250,252,0.8)]" }`}>
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
                    <Navtbn label="Home" link="/" internal={true} tinted={false} />
                    <Navtbn label="Features" onClick={handleFeaturesClick} tinted={false} />
                    <Navtbn label="Documentation" link="/documentation" internal={true} tinted={false} />
                    <Navtbn label="Support" link="/support" internal={true} tinted={false} />
                </div>
                <div className="flex-1 flex flex-row items-center md:justify-center justify-end gap-4 md:p-0 pr-6">
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setShowOverlay(!showOverlay)} className="cursor-pointer">
                            <svg className={`h-4 w-4 transition-transform duration-300 ${showOverlay ? "rotate-180" : ""}`} viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
                                <polyline stroke="#1D1D1F" strokeLinecap="round" vectorEffect="non-scaling-stroke" strokeLinejoin="round" fill="none" points="15.265 .835 8 8.167 .735 .835" />
                            </svg>
                        </button>
                    </div>
                    <Navtbn tinted={true} label="Download" link="https://github.com/kalis26/iTuneUp/releases/download/v1.2.5/iTuneUp-Setup.exe" />
                </div>
            </div>
            <div className={`fixed inset-0 z-[100] bg-white/50 backdrop-blur-3xl transition-opacity duration-300 ${showOverlay ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="flex flex-col gap-6 pt-16 pl-6 pb-10 bg-white">
                    <Navtbn label="Home" link="/" internal={true} tinted={false} />
                    <Navtbn label="Features" onClick={handleFeaturesClick} tinted={false} />
                    <Navtbn label="Documentation" link="/documentation" internal={true} tinted={false} />
                    <Navtbn label="Support" link="/support" internal={true} tinted={false} />
                </div>
            </div>
        </>
    );
}