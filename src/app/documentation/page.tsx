export default function Page() {
    return (
        <div className="flex flex-col gap-6 md:pt-20 pt-10 md:pl-10 md:pr-10 pl-4 pr-4 items-center justify-center">
            <h1 className="md:text-6xl text-5xl font-semibold text-[#1D1D1F] text-center lg:max-w-2/3">Want more?</h1>
            <p className="md:text-4xl text-3xl font-semibold text-[#6E6E73] text-center lg:max-w-2/3">All of 
                iTuneUp&apos;s documentation is available on GitHub — with setup instructions, feature guides, 
                and everything you need to get started.
            </p>
            <a href="https://github.com/kalis26/iTuneUp/blob/main/README.md" target="blank" className={`no-underline hover:underline text-center md:text-left font-semibold md:text-3xl text-2xl text-[rgb(0,102,204)] p-6`}>Read the full documentation on GitHub &gt;</a>
        </div>
    );
}