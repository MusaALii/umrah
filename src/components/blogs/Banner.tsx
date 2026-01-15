import Button from "../Button";
export default function Banner() {
    return (
        <>
            <div className="relative  px-4 md:px-10 lg:px-40 py-8 bg-[url('/banner__bg.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/30  transition-transform duration-700 group-hover:scale-105"></div>
             <div className="container rounded-2xl overflow-hidden  flex items-end justify-start group">
           
                        <div className="relative z-10 p-8 md:p-12 flex flex-col gap-4 items-start max-w-3xl">
                            <span className="bg-[#131811] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Featured Guide</span>
                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                                The Ultimate Step-by-Step Umrah Guide for 2024
                            </h1>
                            <h2 className="text-gray-200 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
                                Everything you need to know before embarking on your spiritual journey, from Ihram rules to performing Tawaf safely and correctly.
                            </h2>
                           <Button text="Read Full Guide" bgColor="greeny" padding="10px 14px"/>
                        </div>
                        
                    </div>
                </div>
            
        </>
    )
}