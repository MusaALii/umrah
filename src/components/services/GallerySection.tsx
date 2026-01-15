export default function GallerySection(){
    return(
        <>
         <section className="w-full flex justify-center py-12">
            <div className="layout-content-container flex flex-col max-w-[960px] w-full px-4 md:px-10">
                <div className="flex flex-col gap-4 mb-8">
                    <h2 className="text-[#131811] dark:text-white text-2xl font-bold leading-tight">Moments from the Journey
                    </h2>
                    <p className="text-[#6b8961] dark:text-gray-400">Join thousands of pilgrims who have experienced the
                        serenity of Makkah and Madina with us.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px] md:h-[300px]">
    
                    <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110
                        bg-[url('/banner__bg.png')]"
                          >
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                            <span className="text-white font-medium text-sm flex items-center gap-1"><span
                                    className="material-symbols-outlined text-sm"><img src="location.svg" alt="" className="w-6 h-6 invert" /></span> Makkah</span>
                        </div>
                    </div>
                    
                    <div className="md:col-span-2 relative rounded-xl overflow-hidden group">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110
                         bg-[url('/Paak.png')]"
                            >
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                            <span className="text-white font-medium text-sm flex items-center gap-1"><span
                                    className="material-symbols-outlined text-sm"><img src="location.svg" alt="" className="w-6 h-6 invert" /></span> Madina</span>
                        </div>
                    </div>
                
                    <div className="relative rounded-xl overflow-hidden group">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110
                         bg-[url('/design.png')]"
                           >
                        </div>
                    </div>
                
                    <div className="relative rounded-xl overflow-hidden group">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110
                         bg-[url('/view.png')]">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}