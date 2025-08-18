import { SfProDisplay } from "@/fonts";
import Image from "next/image";

export default function FeatureConversion() {
    return (
        <div className="flex flex-col gap-6 items-center">
            <Image 
                src="/images/iTuneUp.png"
                width={512}
                height={512}
                alt="iTuneUp logo"
                className="w-16 h-16"
            />
            <div className="flex flex-col items-center md:max-w-2/3 lg:max-w-1/2">
                <h1 className={`${SfProDisplay.className} font-semibold text-center text-black text-4xl md:text-5xl`}>The clarity you expect.</h1>
                <h1 className={`${SfProDisplay.className} font-semibold text-center text-4xl md:text-5xl text-[#4e949f]`}>The format you need.</h1>
            </div>
            <div className={`flex flex-row gap-6 md:max-w-2/3 lg:max-w-1/2 ${SfProDisplay.className} font-semibold text-lg text-[#6e6e73] flex-wrap md:flex-nowrap`}>
                <p className="p-4">Every track comes in the same <strong className="text-black/90">crisp</strong>, <strong className="text-black/90">high-quality</strong> format used by Apple Music — <strong className="text-black/90">AAC in .m4a</strong>. So your collection doesn’t just sound complete. It sounds incredible. And thanks to AAC, every note stays true. From the deepest bass to the highest detail. All while keeping file sizes light, so your library grows without compromise.</p>
                <p className="p-4">And because it’s the same format Apple Music uses, every track fits seamlessly into your library. Ready to <strong className="text-black/90">sync</strong>. Ready to <strong className="text-black/90">play</strong>. On every Apple device you own. No conversions. No adjustments. Just music that works everywhere you do. From Mac to iPhone to iPad, your collection follows effortlessly.</p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Advanced_Audio_Coding" target="blank" className={`${SfProDisplay.className} no-underline hover:underline font-semibold text-lg text-[rgb(0,102,204)] p-6`}>Learn more about AAC (Advanced Audio Coding) &gt;</a>
        </div>
    )
}