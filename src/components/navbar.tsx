import Image from "next/image";
import { SfProText } from "@/fonts";

type NavbtnProps = {
    label: string;
    link: string;
};

function Navtbn({label, link}: NavbtnProps) {
    return <a href={link} className={`${SfProText.className} font-light text-xs text-black/80 hover:text-black transition-all duration-200`}>{label}</a>
}

export default function Navbar() {
    return (
        <div className="sticky top-0 flex flex-row items-center justify-center h-11 gap-10 bg-[rgba(250,250,252,0.8)] backdrop-blur-lg">
            <a href="/">
                <Image 
                    src="/images/iTuneUp.png"
                    height={512}
                    width={512}
                    priority={true}
                    alt="The iTuneUp logo"
                    className="h-5 w-5"
                />
            </a>
            <Navtbn label="Home" link="/" />
            <Navtbn label="Features" link="" />
            <Navtbn label="Documentation" link="/documentation" />
            <Navtbn label="Support" link="/support" />
        </div>
    );
}