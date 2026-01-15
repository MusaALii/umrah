export default function Certificates() {
    return (
        <>

        <div className="w-full py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-black/2">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <h3 className="text-center text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest mb-8">Official Partners &amp; Accreditations</h3>
                <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-4xl"><img src="./flight.svg " className="w-12 h-12" alt="" /></span>
                        <span className="font-bold text-xl">IATA</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-4xl"><img src="./min-hajj.svg " className="w-12 h-12" alt="" /></span>
                        <span className="font-bold text-xl">Ministry of Hajj</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-4xl"><img src="./verified.svg " className="w-12 h-12" alt="" /></span>
                        <span className="font-bold text-xl">ATOL Protected</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-4xl"><img src="./rate-star.svg " className="w-12 h-12" alt="" /></span>
                        <span className="font-bold text-xl">5-Star Services</span>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}