import Image from "next/image";
import { SfProDisplay } from "@/fonts";
import Button from "@/components/button"
import Feature from "@/components/features";

export default function Home() {
  return (
    <>
      <div className="pt-10 h-full flex flex-col gap-2 items-center justify-center bg-[#F5F5F7]">
        <h1 className={`${SfProDisplay.className} font-bold text-black md:text-6xl text-4xl text-center`}>iTuneUp</h1>
        <h3 className={`${SfProDisplay.className} font-normal text-black md:text-3xl text-xl text-center`}>Your favorite collection. Apple Music ready.</h3>
        <div className="pt-5 pb-5 flex flex-row gap-3">
          <Button tinted={false} label="Learn more" link="/" />
          <Button tinted={true} label="Download" link="https://github.com/kalis26/iTuneUp/releases/download/v1.2.5/iTuneUp-Setup.exe" />
        </div>
        <Image
          src="/images/iPhone.png" 
          width={393}
          height={860}
          priority={true}
          alt="Apple Music application opened on iPhone"
          className="pb-32"
        />
        <Feature />
      </div>
    </>
  );
}
