import { SfProText, SfProDisplay } from '@/fonts'

type ButtonProps = {
    tinted?: boolean;
    label: string;
    link: string;
};

export default function Button({tinted, label, link}: ButtonProps) {
    return (
        <a href={link} className={`${SfProDisplay.className} font-normal antialiased rounded-3xl px-4 py-2 border-[1px] transition-all duration-300 ${tinted ? "bg-[#0091FF] border-white/15 text-white hover:bg-[#2ea5ff]" : "bg-[#F7F7F7] border-black/5 text-black hover:bg-[#eaeaea]"}`}>{label}</a>
    );
}