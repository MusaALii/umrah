import Button from "../Button";

export default function Banner() {
    return (
        <>

            <div className="relative w-full">
                <div className="w-full min-h-[480px] flex flex-col items-center justify-center bg-[url('./banner__bg.png')] bg-cover bg-center bg-no-repeat relative">
                    <div className="absolute inset-0 bg-black/45"></div>
                    <div className="relative z-10 flex flex-col gap-4 text-center max-w-[800px] px-4">
                        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mx-auto w-fit">
                            <span className="material-symbols-outlined text-primary text-sm"><img src="./greencamera.svg" alt="" className="w-5 h-5" /></span>
                            <span className="text-white text-xs font-medium uppercase tracking-wider">Visual Diary</span>
                        </div>
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                            Experience the Journey
                        </h1>
                        <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                            Explore our visual diary featuring moments from previous groups, luxury accommodation tours, and the serenity of sacred sites.
                        </p>
                        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                          <Button text="Virtual Start Tour" padding="10px 16px"/>
                            <Button text="View Latest Groups" bgColor="greeny" padding="10px 14px"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}