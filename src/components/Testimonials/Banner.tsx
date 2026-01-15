import Button from "../Button"
export default function Banner() {
    return (
        <>
            <div className="flex flex-col  gap-6 bg-[url('/banner__bg.png')] bg-cover bg-center bg-no-repeat  items-center justify-center p-8 md:p-12 relative overflow-hidden  ">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="flex flex-col gap-4 text-center z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 mx-auto w-fit">
                        <span className="material-symbols-outlined text-primary text-sm"><img src="./greenverified.svg" alt="" className="w-5 h-5" /></span>
                        <span className="text-white text-xs font-bold uppercase tracking-wider">Trusted by 10,000+ Guests</span>
                    </div>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                        Journeys of Faith: <br className="hidden md:block" />Hear from our Pilgrims
                    </h1>
                    <h2 className="text-gray-100 text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                        Join thousands of guests who have trusted us with their spiritual journey. Rated <span className="text-[#299200]
                                     font-bold">4.9/5</span> on Google Reviews.
                    </h2>
                </div>
                <div className="flex flex-wrap gap-4 justify-center z-10 mt-4">
                    <Button text="View Packages" href="/packages" bgColor="greeny" padding="10px 14px" />
                    <Button text="Sumbit your story" padding="10px 14px" />
                </div>
            </div>

        </>
    )
}