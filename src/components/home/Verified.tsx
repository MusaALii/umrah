export default function Varified() {
    return (
        <>
            <div className="relative  z-20 -mt-16 mx-auto   mb-10">
                <div className="layout-container flex justify-center">
                    <div className="w-full max-w-[1080px] bg-white dark:bg-[#1e2e1a] rounded-2xl shadow-xl p-6 border border-[#f1f4f0] dark:border-[#2a3825] py-10 ">
                        <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                            <label className="flex flex-col gap-2">
                                <span className="text-[#131811] dark:text-gray-200 text-sm font-semibold">Departure City</span>
                                <div className="relative">
                                    <select className="select-arrow appearance-none w-full h-12 rounded-lg border border-[#dee6db] dark:border-[#42553b] bg-white dark:bg-[#142210] text-[#131811] dark:text-white pl-4 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow">
                                        <option>London (LHR)</option>
                                        <option>Manchester (MAN)</option>
                                        <option>New York (JFK)</option>
                                        <option>Dubai (DXB)</option>
                                    </select>
                                </div>
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-[#131811] dark:text-gray-200 text-sm font-semibold">Travel Month</span>
                                <div className="relative">
                                    <select className="select-arrow appearance-none w-full h-12 rounded-lg border border-[#dee6db] dark:border-[#42553b] bg-white dark:bg-[#142210] text-[#131811] dark:text-white pl-4 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow">
                                        <option>Ramadan 2024</option>
                                        <option>October 2024</option>
                                        <option>December 2024</option>
                                        <option>January 2025</option>
                                    </select>
                                </div>
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-[#131811] dark:text-gray-200 text-sm font-semibold">Travelers</span>
                                <div className="relative">
                                    <select className="select-arrow appearance-none w-full h-12 rounded-lg border border-[#dee6db] dark:border-[#42553b] bg-white dark:bg-[#142210] text-[#131811] dark:text-white pl-4 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow">
                                        <option>1 Person</option>
                                        <option>2 People</option>
                                        <option>Family (3-5)</option>
                                        <option>Group (5+)</option>
                                    </select>
                                </div>
                            </label>
                            <button className="h-12 w-full rounded-lg bg-[#131811] dark:bg-white text-white dark:text-[#131811] font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2" type="button">
                                Search Packages
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-full border-b border-[#f1f4f0]  bg-white dark:bg-[#ffffff] py-8 mt-10">
                <div className="layout-container flex items-center px-4 lg:px-10">
                    <div className="w-full max-w-[1080px] flex flex-wrap items-center justify-center mx-auto  gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                        <div className="flex items-center gap-2">
                            <span>< img src="./verified.svg" alt="" className="w-8 h-8" /></span>
                            <span className="font-bold text-lg">ATOL Protected</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span ><img src="./flight.svg" alt="" className="w-8 h-8" /></span>
                            <span className="font-bold text-lg">IATA Accredited</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span><img src="./doc-approve.svg" alt="" className="w-8 h-8" /></span>
                            <span className="font-bold text-lg">Ministry Approved</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}