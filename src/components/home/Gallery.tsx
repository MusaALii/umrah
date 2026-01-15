export default function Gallery() {
    return (
        <>
            <div className="w-full py-16 px-4 lg:px-10 ">
                <div className="layout-container flex justify-center">
                    <div className="flex flex-col max-w-[1080px] w-full gap-8">
                        <div className="text-center">
                            <h2 className="text-[#131811] text-3xl font-black mb-4">Glimpses of the Holy Land</h2>
                            <p className="text-black">Moments of peace and spirituality captured.</p>
                        </div>
                        <div className="w-full gap-2 overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[3/1] grid grid-cols-2 md:grid-cols-4 grid-rows-2">
                            <div className="relative w-full h-full bg-[url('/gallery__img.png')]  bg-center bg-no-repeat bg-cover row-span-2 col-span-2" data-alt="Stunning night view of the Holy Mosque in Makkah lit up brightly">
                                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded text-white text-xs font-medium">Makkah Al-Mukarramah</div>
                            </div>

                            <div className="relative w-full h-full  bg-[url('/gal-side.png')]   bg-center bg-no-repeat bg-cover" >
                                <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-white text-[10px] font-medium" data-location="Madinah" >Madinah</div>
                            </div>
                            <div className="relative w-full h-full  bg-[url('/side-kabba.png')]   bg-center bg-no-repeat bg-cover">
                            </div>
                            <div className="relative w-full h-full  bg-[url('/Ahram.png')]   bg-center bg-no-repeat bg-cover col-span-2 md:col-span-1">
                                <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-white text-[10px] font-medium" data-location="Makkah" >Tawaf</div>
                            </div>
                            <div className="relative w-full h-full  bg-[url('./White-mosuqe.png')]   bg-center bg-no-repeat bg-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}