import { Link } from "react-router-dom";
import Button from "../Button"
import Navbar from "../Navbar"
import Footer from "../Footer"
export default function Packagesservices() {

    const packages = [
        {
            mainimg: "./banner__bg.png",
            title: "Deluxe 10 Days Umrah",
            calender: "./calender.svg",
            days: "10 Days / 9 Nights",
            svg: "./Mosque.svg",
            placename: "Makkah",
            placecontent: "Fairmont Clock Tower (5★)",
            makkah: "./Kabba.svg",
            place2: "Madinah",
            placecon2: "Oberoi Hotel (5★)",
            plane: "./up-flight.svg",
            planename: "Turkish",
            bus: "./bus.svg",
            vip: "VIP Bus",
            dinner: "./dinner.svg",
            dinnertime: "Full Board",
            person: "Per Person",
            rate: "$2,450",
        },
        {
            mainimg: "./side-kabba.png",
            title: "Economy Saver Feb",
            calender: "./calender.svg",
            days: "14 Days / 13 Nights",
            svg: "./Mosque.svg",
            placename: "Makkah",
            placecontent: "Emaar Grand (3★)",
            makkah: "./Kabba.svg",
            place2: "Madinah",
            placecon2: "Artal International (3★)",
            plane: "./up-flight.svg",
            planename: "EgyptAir",
            bus: "./bus.svg",
            vip: "AC Bus",
            dinner: "./cup.svg",
            dinnertime: "Breakfast",
            person: "Per Person",
            rate: "$1,250",
        },

        {
            mainimg: "./pack-mosque.png",
            title: "Family Group - March",
            calender: "./calender.svg",
            days: "12 Days / 11 Nights",
            svg: "./Mosque.svg",
            placename: "Makkah",
            placecontent: "Swissotel Makkah (5★)",
            makkah: "./Kabba.svg",
            place2: "Madinah",
            placecon2: "Pullman Zamzam (5★)",
            plane: "./up-flight.svg",
            planename: "Saudia",
            bus: "./bus.svg",
            vip: "Private",
            dinner: "./dinner.svg",
            dinnertime: "Full Board",
            person: "Per Person",
            rate: "$1,950",
        }
    ]


    return (
        <>
         <Navbar />
            <div className="bg-[#f2f2f2]">
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
                    <nav aria-label="Breadcrumb" className="flex mb-6 text-sm">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link className="inline-flex items-center text-black hover:text-primary" to="#">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-black text-lg mx-1"><img src="./direction.svg" alt="" className="w-3 h-3" /></span>
                                    <Link className="text-black hover:text-primary" to="#">packages</Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-black text-lg mx-1"><img src="./direction.svg" alt="" className="w-3 h-3" /> </span>
                                    <span className="text-[#131811] font-bold">All Offers</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <aside className="hidden lg:block lg:col-span-3 space-y-6">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-white dark:bg-[#ffffff] rounded-xl p-5 shadow-sm border border-[#f1f4f0] dark:border-[#eeeeee]">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-bold">Filters</h3>
                                        <button className="text-xs text-[#6b8961] font-medium hover:text-primary">Reset</button>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-sm font-semibold mb-3">Price Range (per person)</p>
                                        <div className="px-2">
                                            <div className="relative h-1 bg-[#dee6db] dark:bg-gray-600 rounded-full mt-6 mb-2">
                                                <div className="absolute left-[20%] right-[30%] h-full bg-primary rounded-full"></div>
                                                <div className="absolute left-[20%] top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-primary rounded-full shadow cursor-pointer">
                                                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-medium bg-[#131811] text-white px-1.5 py-0.5 rounded opacity-0 hover:opacity-100 transition-opacity">$900</span>
                                                </div>
                                                <div className="absolute right-[30%] top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-primary rounded-full shadow cursor-pointer">
                                                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-medium bg-[#131811] text-white px-1.5 py-0.5 rounded opacity-0 hover:opacity-100 transition-opacity">$2400</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-xs text-[#6b8961]">
                                                <span>$500</span>
                                                <span>$5000+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="border-[#f1f4f0] dark:border-[#2a3c25] my-4" />
                                    <div className="mb-6">
                                        <p className="text-sm font-semibold mb-3">Duration</p>
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input className="size-4 rounded border-gray-300 text-primary focus:ring-primary bg-[#f1f4f0] dark:bg-[#2a3c25] dark:border-gray-600" type="checkbox" />
                                                <span className="text-sm text-black group-hover:text-primary transition-colors">Less than 7 days</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input className="size-4 rounded border-gray-300 text-primary focus:ring-primary bg-[#f1f4f0] dark:bg-[#2a3c25] dark:border-gray-600" type="checkbox" />
                                                <span className="text-sm text-black group-hover:text-primary transition-colors">7 - 10 days</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input className="size-4 rounded border-gray-300 text-primary focus:ring-primary bg-[#f1f4f0] dark:bg-[#2a3c25] dark:border-gray-600" type="checkbox" />
                                                <span className="text-sm text-black group-hover:text-primary transition-colors">11 - 14 days</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input className="size-4 rounded border-gray-300 text-primary focus:ring-primary bg-[#f1f4f0] dark:bg-[#2a3c25] dark:border-gray-600" type="checkbox" />
                                                <span className="text-sm text-black group-hover:text-primary transition-colors">15+ days</span>
                                            </label>
                                        </div>
                                    </div>
                                    <hr className="border-[#f1f4f0] dark:border-[#2a3c25] my-4" />
                                    <div className="mb-6">
                                        <p className="text-sm font-semibold mb-3">Hotel Rating</p>
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input className="size-4 rounded border-gray-300 text-primary focus:ring-primary bg-[#f1f4f0] dark:bg-[#2a3c25] dark:border-gray-600" type="checkbox" />
                                                <div className="flex items-center text-yellow-500 text-sm">
                                                    <span className="material-symbols-outlined filled-icon text-[16px]"><img src="./stars.svg" alt="" className="w-20"  /></span>
                                                    <span className="ml-2 text-black font-normal">5 Stars</span>
                                                </div>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input className="size-4 rounded border-gray-300 text-primary focus:ring-primary bg-[#f1f4f0] dark:bg-[#2a3c25] dark:border-gray-600" type="checkbox" />
                                                <div className="flex items-center text-yellow-500 text-sm">
                                                    <span className="material-symbols-outlined filled-icon text-[16px]"><img src="./stars.svg" alt=""className="w-20"  /></span>
                                                    <span className="ml-2 text-black font-normal">4 Stars &amp; up</span>
                                                </div>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input className="size-4 rounded border-gray-300 text-primary focus:ring-primary bg-[#f1f4f0] dark:bg-[#2a3c25] dark:border-gray-600" type="checkbox" />
                                                <div className="flex items-center text-yellow-500 text-sm">
                                                    <span className="material-symbols-outlined filled-icon text-[16px]"><img src="./stars.svg" alt=" "className="w-20"  /></span>

                                                    <span className="ml-2 text-black font-normal">3 Stars &amp; up</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <hr className="border-[#f1f4f0] dark:border-[#2a3c25] my-4" />
                                    <div>
                                        <p className="text-sm font-semibold mb-3">Departure From</p>
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input className="size-4 rounded border-gray-300 text-primary focus:ring-primary bg-[#f1f4f0] dark:bg-[#2a3c25] dark:border-gray-600" type="checkbox" />
                                                <span className="text-sm text-black group-hover:text-primary transition-colors">New York (JFK)</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input className="size-4 rounded border-gray-300 text-primary focus:ring-primary bg-[#f1f4f0] dark:bg-[#2a3c25] dark:border-gray-600" type="checkbox" />
                                                <span className="text-sm text-black group-hover:text-primary transition-colors">London (LHR)</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input className="size-4 rounded border-gray-300 text-primary focus:ring-primary bg-[#f1f4f0] dark:bg-[#2a3c25] dark:border-gray-600" type="checkbox" />
                                                <span className="text-sm text-black group-hover:text-primary transition-colors">Toronto (YYZ)</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#d3e9ec] rounded-xl p-5 border border-[#c4c3c3]">
                                    <div className="flex gap-3 mb-2">
                                        <span className="material-symbols-outlined text-primary"><img src="./agent.svg" alt="" className="w-10 h-10" /></span>
                                        <h4 className="font-bold text-sm">Need Help Booking?</h4>
                                    </div>
                                    <p className="text-xs text-black mb-3">Our expert agents are available 24/7 to guide you through your Umrah journey.</p>
                                    <Button text="View Deal" bgColor="" padding="7px 20px" />
                                </div>
                            </div>
                        </aside>
                        <section className="col-span-1 lg:col-span-9">
                            <div className="mb-6">
                                <h1 className="text-3xl font-black tracking-tight mb-2">Available Umrah packages</h1>
                                <p className="text-[#6b8961] dark:text-gray-400">Find your spiritual journey: 14+ packages tailored to your needs.</p>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 mb-8">
                                <span className="text-sm font-medium mr-2 hidden sm:inline-block">Sort by:</span>
                                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-[#131811] rounded-full text-sm font-bold shadow-sm ring-2 ring-primary">
                                    Lowest Price
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1a2c15] hover:bg-gray-50 dark:hover:bg-white/5 border border-[#f1f4f0] dark:border-[#2a3c25] rounded-full text-sm font-medium transition-colors">
                                    Duration
                                    <span className="material-symbols-outlined text-[18px]"><img src="./scroll-direction.svg" alt="" className="w-6 h-6" /></span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1a2c15] hover:bg-gray-50 dark:hover:bg-white/5 border border-[#f1f4f0] dark:border-[#2a3c25] rounded-full text-sm font-medium transition-colors">
                                    Rating
                                    <span className="material-symbols-outlined text-[18px]"><img src="./scroll-direction.svg" alt="" className="w-6 h-6" /></span>
                                </button>
                                <div className="ml-auto flex items-center gap-2 text-sm text-[#6b8961]">
                                    <span className="hidden sm:inline">Showing 1-12 of 45 results</span>
                                    <button className="lg:hidden flex items-center gap-1 text-primary font-bold">
                                        <span className="material-symbols-outlined text-[20px]">filter_list</span> Filters
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                                {packages.map((pkg) => (
                                    <article className="group bg-white dark:bg-[#ffffff] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#f1f4f0] dark:border-[#e0e2e0] flex flex-col h-full">
                                        <div className="relative h-48 w-full overflow-hidden">

                                            <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={pkg.mainimg} />
                                            <div className="absolute top-3 left-3 bg-primary text-[#131811] text-xs font-bold px-2 py-1 rounded">Premium</div>
                                            <button className="absolute top-3 right-3 p-1.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
                                                <span className="material-symbols-outlined text-[20px]"><img src="./heart.svg" alt="" className="w-8 h-8" /></span>
                                            </button>
                                        </div>
                                        <div className="p-5 flex flex-col flex-1">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{pkg.title}</h3>
                                                    <div className="flex items-center gap-1 text-xs text-[#6b8961] mt-1">
                                                        <span className="material-symbols-outlined text-[16px]"><img src={pkg.calender} alt="" className="w-4 h-4" /></span>{pkg.days}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-3 mb-6">
                                                <div className="flex items-start gap-2 text-sm">
                                                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5"><img src={pkg.svg} alt="" className="w-4 h-4" /></span>
                                                    <div>
                                                        <span className="block text-xs text-[#6b8961]">{pkg.placename}</span>
                                                        <span className="font-medium text-sm">{pkg.placecontent}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-2 text-sm">
                                                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5"><img src={pkg.makkah} alt="" className="w-4 h-4" /></span>
                                                    <div>
                                                        <span className="block text-xs text-[#6b8961]">{pkg.place2}</span>
                                                        <span className="font-medium text-sm">{pkg.placecon2}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 mb-6 pt-4 border-t border-[#f1f4f0] dark:border-[#2a3c25]">
                                                <div className="flex flex-col items-center gap-1" title="Turkish Airlines">
                                                    <span className="material-symbols-outlined text-[#6b8961]"><img src={pkg.plane} alt="" className="w-6 h-6" /></span>
                                                    <span className="text-[10px] text-gray-500">{pkg.planename}</span>
                                                </div>
                                                <div className="w-px h-8 bg-gray-100 dark:bg-gray-700"></div>
                                                <div className="flex flex-col items-center gap-1" title="VIP Bus">
                                                    <span className="material-symbols-outlined text-[#6b8961]"><img src={pkg.bus} alt="" className="w-6 h-6" /></span>
                                                    <span className="text-[10px] text-gray-500">{pkg.vip}</span>
                                                </div>
                                                <div className="w-px h-8 bg-gray-100 dark:bg-gray-700"></div>
                                                <div className="flex flex-col items-center gap-1" title="Full Board">
                                                    <span className="material-symbols-outlined text-[#6b8961]"><img src={pkg.dinner} alt="" className="w-6 h-6" /></span>
                                                    <span className="text-[10px] text-gray-500">{pkg.dinnertime}</span>
                                                </div>
                                            </div>
                                            <div className="mt-auto flex items-end justify-between">
                                                <div>
                                                    <p className="text-xs text-[#6b8961]">{pkg.person}</p>
                                                    <p className="text-2xl font-black text-[#131811] dark:text-white">{pkg.rate}</p>
                                                </div>
                                                <Button text="View Deals" bgColor="#1a2c15" padding="6px 8px" />
                                            </div>

                                        </div>
                                    </article>
                                ))}
                            </div>
                            <div className="bg-white dark:bg-[#f2f2f2] rounded-2xl shadow-sm border border-[#f1f4f0] dark:border-[#dfdfdf] overflow-hidden mb-12">
                                <div className="p-6 border-b border-[#f1f4f0] dark:border-[#a1a1a1]">
                                    <h2 className="text-xl font-bold">Compare Top packages</h2>
                                    <p className="text-sm text-[#6b8961]">Quick comparison of our most popular offerings.</p>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="text-xs text-black uppercase bg-[#f2f2f2] dark:bg-white/5">
                                            <tr>
                                                <th className="px-6 py-4 rounded-tl-lg" scope="col">Features</th>
                                                <th className="px-6 py-4" scope="col">Economy Saver</th>
                                                <th className="px-6 py-4 bg-primary/10" scope="col">Family Group</th>
                                                <th className="px-6 py-4 rounded-tr-lg" scope="col">Premium Deluxe</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[#c7c7c7] dark:divide-[#b4b4b4]">
                                            <tr className="bg-white dark:bg-[#f2f2f2]">
                                                <th className="px-6 py-4 font-medium text-[#131811] dark:text-black whitespace-nowrap" scope="row">
                                                    Price
                                                </th>
                                                <td className="px-6 py-4">$1,250</td>
                                                <td className="px-6 py-4 bg-primary/5 font-bold text-primary">$1,950</td>
                                                <td className="px-6 py-4">$2,450</td>
                                            </tr>
                                            <tr className="bg-white dark:bg-[#f2f2f2]">
                                                <th className="px-6 py-4 font-medium text-[#131811] dark:text-black" scope="row">
                                                    Duration
                                                </th>
                                                <td className="px-6 py-4">14 Days</td>
                                                <td className="px-6 py-4 bg-primary/5">12 Days</td>
                                                <td className="px-6 py-4">10 Days</td>
                                            </tr>
                                            <tr className="bg-white dark:bg-[#f2f2f2]">
                                                <th className="px-6 py-4 font-medium text-[#131811] dark:text-black" scope="row">
                                                    Makkah Hotel
                                                </th>
                                                <td className="px-6 py-4">Emaar Grand (3★)</td>
                                                <td className="px-6 py-4 bg-primary/5">Swissotel (5★)</td>
                                                <td className="px-6 py-4">Fairmont (5★)</td>
                                            </tr>
                                            <tr className="bg-white dark:bg-[#f2f2f2]">
                                                <th className="px-6 py-4 font-medium text-[#131811] dark:text-black" scope="row">
                                                    Distance to Haram
                                                </th>
                                                <td className="px-6 py-4">800m (Shuttle)</td>
                                                <td className="px-6 py-4 bg-primary/5">100m (Walk)</td>
                                                <td className="px-6 py-4">0m (Clock Tower)</td>
                                            </tr>
                                            <tr className="bg-white dark:bg-[#f2f2f2]">
                                                <th className="px-6 py-4 font-medium text-[#131811] dark:text-black" scope="row">
                                                    Airline
                                                </th>
                                                <td className="px-6 py-4">Indirect</td>
                                                <td className="px-6 py-4 bg-primary/5">Direct (Saudia)</td>
                                                <td className="px-6 py-4">Direct (Turkish)</td>
                                            </tr>
                                            <tr className="bg-white dark:bg-[#f2f2f2]">
                                                <th className="px-6 py-4 font-medium text-[#131811] dark:text-black" scope="row">
                                                    Action
                                                </th>
                                                <td className="px-6 py-4"><Link className="text-primary hover:underline font-bold" to="#">View</Link></td>
                                                <td className="px-6 py-4 bg-primary/5"><Link className="text-primary hover:underline font-bold" to="#">View</Link></td>
                                                <td className="px-6 py-4"><Link className="text-primary hover:underline font-bold" to="#">View</Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <nav className="flex items-center gap-2">
                                    <button className="size-10 flex items-center justify-center rounded-lg border border-[#f1f4f0] dark:border-[#2a3c25] bg-white dark:bg-[#1a2c15] text-[#6b8961] hover:bg-gray-50 dark:hover:bg-white/5">
                                        <span className="material-symbols-outlined"><img src="./anti-direction.svg" alt="" className="w-4 h-4" /></span>
                                    </button>
                                    <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-[#131811] font-bold">1</button>
                                    <button className="size-10 flex items-center justify-center rounded-lg border border-[#f1f4f0] dark:border-[#2a3c25] bg-white dark:bg-[#1a2c15] text-[#131811] dark:text-white hover:bg-gray-50 dark:hover:bg-white/ hover:text-black">2</button>
                                    <button className="size-10 flex items-center justify-center rounded-lg border border-[#f1f4f0] dark:border-[#2a3c25] bg-white dark:bg-[#1a2c15] text-[#131811] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5">3</button>
                                    <span className="text-[#6b8961]">...</span>
                                    <button className="size-10 flex items-center justify-center rounded-lg border border-[#f1f4f0] dark:border-[#2a3c25] bg-white dark:bg-[#1a2c15] text-[#6b8961] hover:bg-gray-50 dark:hover:bg-white/5">
                                        <span className="material-symbols-outlined"><img src="./direction.svg" alt="" className="w-4 h-4" /></span>
                                    </button>
                                </nav>
                            </div>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}