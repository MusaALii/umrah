export default function () {
    return (
        <>
            <div className=" bg-white  py-12">
                <div className="flex justify-center w-full">
                    <div className="container px-4">
                        <h2 className="text-[#131811]  text-3xl font-bold leading-tight mb-8">Watch Real Experiences</h2>
                        <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
                            <div className="snap-center shrink-0 w-[300px] md:w-[360px] flex flex-col gap-3 group cursor-pointer">
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200">
                                    <div className="absolute inset-0 bg-[url('/faimly-umrah.png')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="size-12 bg-green-500/30 rounded-full flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors">
                                            <span className="material-symbols-outlined text-[#131811] text-2xl fill-current"><img src="./play.svg" alt="" className="w-6 h-6" /></span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded text-white text-xs font-medium">1:45</div>
                                </div>
                                <div>
                                    <h3 className="text-[#131811]  text-lg font-bold group-hover:text-primary transition-colors">The Ahmed Family's Umrah</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Dec 2023 • VIP Package</p>
                                </div>
                            </div>
                            <div className="snap-center shrink-0 w-[300px] md:w-[360px] flex flex-col gap-3 group cursor-pointer">
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200">
                                    <div className="absolute inset-0 bg-[url('/mirrorhotel.png')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Older couple standing near Mount Uhud looking peaceful"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="size-12 bg-green-500/30 p-6 rounded-full flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors">
                                            <span className="material"><img src="./play.svg" alt="" className="w-4 h-4" /></span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded text-white text-xs font-medium">2:10</div>
                                </div>
                                <div>
                                    <h3 className="text-[#131811]  text-lg font-bold group-hover:text-primary transition-colors">My First Spiritual Journey</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Nov 2023 • Deluxe Group</p>
                                </div>
                            </div>
                            <div className="snap-center shrink-0 w-[300px] md:w-[360px] flex flex-col gap-3 group cursor-pointer">
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200">
                                    <div className="absolute inset-0 bg-[url('/singleman.png')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Group of pilgrims in ihram standing in a circle listening to a guide"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="size-12 bg-green-500/30 rounded-full flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors">
                                            <span className="material-symbols-outlined text-[#131811] text-2xl fill-current"><img src="./play.svg" alt="" className="w-4 h-4" /></span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded text-white text-xs font-medium">3:05</div>
                                </div>
                                <div>
                                    <h3 className="text-[#131811] d text-lg font-bold group-hover:text-primary transition-colors">London Group Ziyarat Tour</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Oct 2023 • Group Package</p>
                                </div>
                            </div>
                      
                            <div className="snap-center shrink-0 w-[300px] md:w-[360px] flex flex-col gap-3 group cursor-pointer">
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200">
                                    <div className="absolute inset-0  bg-[url('/whitelibas.png')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Inside a luxury hotel room with a view of the Haram" ></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="size-12 bg-primary/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors">
                                            <span className="material-symbols-outlined text-[#131811] text-2xl fill-current"><img src="./play.svg" alt="" className="w-4 h-4" /></span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded text-white text-xs font-medium">0:58</div>
                                </div>
                                <div>
                                    <h3 className="text-[#131811]  text-lg font-bold group-hover:text-primary transition-colors">5-Star Hotel Experience</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Jan 2024 • Luxury Package</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}