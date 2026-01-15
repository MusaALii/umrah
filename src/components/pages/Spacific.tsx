import Button from "../Button";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {Link} from "react-router-dom";


export default function Spacific(){
    return(
        <>
        <Navbar/>
         <div className="container px-4 py-4 ">
            <div className="flex  gap-2">
                <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400" to="#">Home</Link>
                <span className="text-sm font-medium text-gray-400">/</span>
                <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400" to="#">Packages</Link>
                <span className="text-sm font-medium text-gray-400">/</span>
                <span className="text-sm font-medium text-primary">Premium 14-Day Umrah</span>
            </div>
        </div>
        <main className="flex flex-1 flex-col px-4 pb-20 lg:px-40">
            <div className="mx-auto flex w-full container flex-col gap-8 lg:flex-row">
                <div className="flex flex-1 flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                            <img alt="Kaaba View" className="h-full w-full object-cover"
                                src="./Whitekabba.png" />
                            <div className="absolute bottom-0 left-0 z-20 p-6 md:p-8">
                                <div className="mb-3 flex items-center gap-2">
                                    <span
                                        className="flex items-center gap-1 rounded bg-white/20 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-sm text-yellow-400"><img src="./yellowstar.svg" alt="" className="w-6 h-6" /></span>
                                        5.0 (124 Reviews)
                                    </span>
                                    <span className="rounded bg-primary px-2 py-1 text-xs font-bold text-[#131811]">
                                        Best Seller
                                    </span>
                                </div>
                                <h1 className="text-3xl font-black leading-tight text-white md:text-5xl">
                                    14-Day Premium Umrah
                                </h1>
                                <p className="mt-2 text-lg font-medium text-gray-200">
                                    Spiritual journey with 5-star comfort close to Haram
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            <div className="flex flex-col gap-1 rounded-lg bg-white p-4 shadow-sm dark:bg-white/5">
                                <span className="material-symbols-outlined text-primary"><img src="./calender.svg" alt=""className="w-8 h-8"  /></span>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Duration</p>
                                <p className="font-bold">14 Days</p>
                            </div>
                            <div className="flex flex-col gap-1 rounded-lg bg-white p-4 shadow-sm dark:bg-white/5">
                                <span className="material-symbols-outlined text-primary"><img src="./bed.svg" alt=""className="w-8 h-8"  /></span>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Accommodation</p>
                                <p className="font-bold">5-Star Hotels</p>
                            </div>
                            <div className="flex flex-col gap-1 rounded-lg bg-white p-4 shadow-sm dark:bg-white/5">
                                <span className="material-symbols-outlined text-primary"><img src="./up-flight.svg" alt=""className="w-8 h-8"  /></span>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Flights</p>
                                <p className="font-bold">Direct (SV)</p>
                            </div>
                            <div className="flex flex-col gap-1 rounded-lg bg-white p-4 shadow-sm dark:bg-white/5">
                                <span className="material-symbols-outlined text-primary"><img src="./verified.svg" alt=""className="w-8 h-8"  /></span>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Visa</p>
                                <p className="font-bold">Included</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-white/5">
                        <h3 className="mb-4 text-xl font-bold">Package Overview</h3>
                        <p className="leading-relaxed text-black">
                            Embark on a transformative 14-day journey to the holy cities of Makkah and Madinah. This
                            premium package is designed for pilgrims seeking comfort and convenience, featuring
                            accommodation in top-rated 5-star hotels located just steps away from the Haram boundaries.
                            With direct flights, luxury ground transportation, and guided Ziyarat tours, we handle all
                            logistics so you can focus entirely on your worship.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-6 text-xl font-bold">Daily Itinerary</h3>
                        <div className="relative flex flex-col gap-4 pl-4 md:pl-0">
                            <div
                                className="absolute bottom-0 left-[27px] top-4 w-[2px] bg-gray-200 md:left-[27px] dark:bg-white/10">
                            </div>
                            <details className="group relative z-10" >
                                <summary className="flex cursor-pointer list-none items-center gap-4">
                                    <div
                                        className="flex size-[56px] shrink-0 items-center justify-center rounded-full border-4 border-white bg-primary text-xl font-bold text-[#131811] shadow-sm group-open:bg-[#131811] group-open:text-primary dark:border-background-dark">
                                        01
                                    </div>
                                    <div
                                        className="flex flex-1 items-center justify-between rounded-lg bg-white p-4 shadow-sm transition hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10">
                                        <div>
                                            <p className="text-sm font-semibold text-primary">Day 1</p>
                                            <h4 className="font-bold">Arrival in Jeddah &amp; Transfer to Makkah</h4>
                                        </div>
                                        <span
                                            className="material-symbols-outlined transition-transform group-open:rotate-180"><img src="./direction.svg" alt=""className="w-3 h-3 -rotate-270" /></span>
                                    </div>
                                </summary>
                                <div
                                    className="ml-[28px] border-l-2 border-dashed border-gray-300 pl-10 pt-4 dark:border-white/10">
                                    <div className="mb-4 flex flex-col gap-3 rounded-lg bg-gray-50 p-4 dark:bg-white/5">
                                        <div className="flex gap-3">
                                            <span
                                                className="material-symbols-outlined mt-1 text-gray-400"><img src="./up-flight.svg" alt=""className="w-8 h-8" /></span>
                                            <div>
                                                <p className="font-medium">Arrival at King Abdulaziz International Airport
                                                    (JED)</p>
                                                <p className="text-sm text-gray-500">Meet and greet by our representative.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <span
                                                className="material-symbols-outlined mt-1 text-gray-400"><img src="./bus.svg" alt=""className="w-8 h-8" /></span>
                                            <div>
                                                <p className="font-medium">VIP Transfer to Makkah</p>
                                                <p className="text-sm text-gray-500">Travel via luxury air-conditioned bus
                                                    (approx. 1h 30m).</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <span className="material-symbols-outlined mt-1 text-gray-400"><img src="./bed.svg" alt=""className="w-8 h-8" /></span>
                                            <div>
                                                <p className="font-medium">Hotel Check-in</p>
                                                <p className="text-sm text-gray-500">Swissotel Makkah - Clock Tower View.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </details>
                            <details className="group relative z-10">
                                <summary className="flex cursor-pointer list-none items-center gap-4">
                                    <div
                                        className="flex size-[56px] shrink-0 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-xl font-bold text-gray-500 shadow-sm group-open:bg-[#131811] group-open:text-primary dark:border-background-dark dark:bg-white/10 dark:text-gray-400">
                                        02
                                    </div>
                                    <div
                                        className="flex flex-1 items-center justify-between rounded-lg bg-white p-4 shadow-sm transition hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10">
                                        <div>
                                            <p className="text-sm font-semibold text-primary">Day 2</p>
                                            <h4 className="font-bold">Performing Umrah</h4>
                                        </div>
                                        <span
                                            className="material-symbols-outlined transition-transform group-open:rotate-180"><img src="./direction.svg" alt=""className="w-3 h-3 -rotate-270" /></span>
                                    </div>
                                </summary>
                                <div
                                    className="ml-[28px] border-l-2 border-dashed border-gray-300 pl-10 pt-4 dark:border-white/10">
                                    <p className="mb-4 text-black">
                                        Accompanied by a qualified guide (Mutawwif), the group will proceed to Masjid
                                        al-Haram to perform the rituals of Umrah: Ihram, Tawaf, Sa'i, and Halq/Taqsir.
                                        The rest of the day is free for rest and prayers.
                                    </p>
                                </div>
                            </details>

                            <details className="group relative z-10">
                                <summary className="flex cursor-pointer list-none items-center gap-4">
                                    <div
                                        className="flex size-[56px] shrink-0 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-xl font-bold text-gray-500 shadow-sm group-open:bg-[#131811] group-open:text-primary dark:border-background-dark dark:bg-white/10 dark:text-gray-400">
                                        03
                                    </div>
                                    <div
                                        className="flex flex-1 items-center justify-between rounded-lg bg-white p-4 shadow-sm transition hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10">
                                        <div>
                                            <p className="text-sm font-semibold text-primary">Day 3 - 6</p>
                                            <h4 className="font-bold">Makkah Stay &amp; Ziyarat</h4>
                                        </div>
                                        <span
                                            className="material-symbols-outlined transition-transform group-open:rotate-180"><img src="./direction.svg" alt=""className="w-3 h-3 -rotate-270" /></span>
                                    </div>
                                </summary>
                                <div
                                    className="ml-[28px] border-l-2 border-dashed border-gray-300 pl-10 pt-4 dark:border-white/10">
                                    <ul className="mb-4 list-inside list-disc space-y-2 text-black">
                                        <li>Daily prayers in Masjid al-Haram.</li>
                                        <li><strong>Ziyarat Tour:</strong> Visit to Jabal al-Nour (Cave of Hira), Jabal
                                            Thawr, Mina, Muzdalifah, and Arafat.</li>
                                        <li>Free time for personal ibadah and shopping.</li>
                                    </ul>
                                </div>
                            </details>

                            <details className="group relative z-10">
                                <summary className="flex cursor-pointer list-none items-center gap-4">
                                    <div
                                        className="flex size-[56px] shrink-0 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-xl font-bold text-gray-500 shadow-sm group-open:bg-[#131811] group-open:text-primary dark:border-background-dark dark:bg-white/10 dark:text-gray-400">
                                        07
                                    </div>
                                    <div
                                        className="flex flex-1 items-center justify-between rounded-lg bg-white p-4 shadow-sm transition hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10">
                                        <div>
                                            <p className="text-sm font-semibold text-primary">Day 7</p>
                                            <h4 className="font-bold">Haramain Train to Madinah</h4>
                                        </div>
                                        <span
                                            className="material-symbols-outlined transition-transform group-open:rotate-180"><img src="./direction.svg" alt=""className="w-3 h-3 -rotate-270" /></span>
                                    </div>
                                </summary>
                                <div
                                    className="ml-[28px] border-l-2 border-dashed border-gray-300 pl-10 pt-4 dark:border-white/10">
                                    <p className="text-black">Check-out from Makkah hotel. Transfer to
                                        train station. High-speed Haramain train journey to Madinah (approx 2h 20m).
                                        Check-in at Madinah hotel near Masjid Nabawi.</p>
                                </div>
                            </details>
                            <details className="group relative z-10">
                                <summary className="flex cursor-pointer list-none items-center gap-4">
                                    <div
                                        className="flex size-[56px] shrink-0 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-xl font-bold text-gray-500 shadow-sm group-open:bg-[#131811] group-open:text-primary dark:border-background-dark dark:bg-white/10 dark:text-gray-400">
                                        08
                                    </div>
                                    <div
                                        className="flex flex-1 items-center justify-between rounded-lg bg-white p-4 shadow-sm transition hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10">
                                        <div>
                                            <p className="text-sm font-semibold text-primary">Day 8 - 13</p>
                                            <h4 className="font-bold">Madinah Stay &amp; Ziyarat</h4>
                                        </div>
                                        <span
                                            className="material-symbols-outlined transition-transform group-open:rotate-180"><img src="./direction.svg" alt=""className="w-3 h-3 -rotate-270" /></span>
                                    </div>
                                </summary>
                                <div
                                    className="ml-[28px] border-l-2 border-dashed border-gray-300 pl-10 pt-4 dark:border-white/10">
                                    <ul className="mb-4 list-inside list-disc space-y-2 text-black">
                                        <li>Salam to the Prophet (PBUH) and companions.</li>
                                        <li>Visit to Rawdah (permit required).</li>
                                        <li><strong>Ziyarat Tour:</strong> Masjid Quba (first mosque), Mount Uhud,
                                            Masjid Qiblatain, and the Seven Mosques.</li>
                                    </ul>
                                </div>
                            </details>
                            <details className="group relative z-10">
                                <summary className="flex cursor-pointer list-none items-center gap-4">
                                    <div
                                        className="flex size-[56px] shrink-0 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-xl font-bold text-gray-500 shadow-sm group-open:bg-[#131811] group-open:text-primary dark:border-background-dark dark:bg-white/10 dark:text-gray-400">
                                        14
                                    </div>
                                    <div
                                        className="flex flex-1 items-center justify-between rounded-lg bg-white p-4 shadow-sm transition hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10">
                                        <div>
                                            <p className="text-sm font-semibold text-primary">Day 14</p>
                                            <h4 className="font-bold">Departure</h4>
                                        </div>
                                        <span
                                            className="material-symbols-outlined transition-transform group-open:rotate-180"><img src="./direction.svg" alt=""className="w-3 h-3 -rotate-270" /></span>
                                    </div>
                                </summary>
                                <div
                                    className="ml-[28px] border-l-2 border-dashed border-gray-300 pl-10 pt-4 dark:border-white/10">
                                    <p className="text-Black">Check-out from Madinah hotel. Transfer
                                        to Madinah Airport (MED) or Jeddah Airport (JED) for your return flight home.
                                    </p>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold">Premium Accommodation</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="group overflow-hidden rounded-xl bg-white shadow-sm dark:bg-white/5">
                                <div className="relative h-48 overflow-hidden">
                                    <img alt="Makkah Hotel"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        data-alt="Luxurious bedroom interior of Swissotel Makkah with a view"
                                        src="./building.png" />
                                    <div
                                        className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                        Makkah</div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-bold">Swissotel Makkah</h4>
                                            <div className="flex text-yellow-400 text-sm"><img src="./stars.svg" alt="" className="w-18 h-4" /></div>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">Located within the Abraj Al Bait complex,
                                        directly facing the Haram. 0 mins walk.</p>
                                </div>
                            </div>
                            <div className="group overflow-hidden rounded-xl bg-white shadow-sm dark:bg-white/5">
                                <div className="relative h-48 overflow-hidden">
                                    <img alt="Madinah Hotel"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        data-alt="Modern exterior of Anwar Al Madinah Movenpick Hotel"
                                        src="madina-hotel.png" />
                                    <div
                                        className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                        Madinah</div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-bold">Anwar Al Madinah</h4>
                                            <div className="flex text-yellow-400 text-sm"><img src="./stars.svg" alt="" className="w-18 h-4" /></div>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">The largest hotel in Madinah, connected to the
                                        mosque courtyard. 1 min walk.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-white/5">
                        <h3 className="mb-6 text-xl font-bold">Package Details</h3>
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <h4 className="mb-4 flex items-center gap-2 font-bold text-primary">
                                    <span className="material-symbols-outlined"><img src="./circle-ticket.svg" alt="" className="w-6 h-6" /></span> Included
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-black">
                                        <span className="material-symbols-outlined text-green-500 text-[20px]"><img src="./greentick.svg" alt="" className="w-6 h-6" /></span>
                                        Umrah Visa processing
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-black">
                                        <span className="material-symbols-outlined text-green-500 text-[20px]"><img src="./greentick.svg" alt="" className="w-6 h-6" /></span>
                                        Return direct flights (Saudi Airlines)
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-black">
                                        <span className="material-symbols-outlined text-green-500 text-[20px]"><img src="./greentick.svg" alt="" className="w-6 h-6" /></span>
                                        5-Star Hotels with Breakfast
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-black">
                                        <span className="material-symbols-outlined text-green-500 text-[20px]"><img src="./greentick.svg" alt="" className="w-6 h-6" /></span>
                                        Haramain High-Speed Train tickets
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-black">
                                        <span className="material-symbols-outlined text-green-500 text-[20px]"><img src="./greentick.svg" alt="" className="w-6 h-6" /></span>
                                        Guided Ziyarat tours in AC bus
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-4 flex items-center gap-2 font-bold text-red-600">
                                    <span className="material-symbols-outlined"><img src="./cross.svg" alt="" className="w-6 h-6" /></span> Excluded
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-black">
                                        <span className="material-symbols-outlined text-gray-400 text-[20px]"><img src="./cutt.svg" alt="" className="w-6 h-6" /></span>
                                        Lunch and Dinner
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-black">
                                        <span className="material-symbols-outlined text-gray-400 text-[20px]"><img src="./cutt.svg" alt="" className="w-6 h-6" /></span>
                                        Personal expenses (laundry, phone)
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-black">
                                        <span className="material-symbols-outlined text-gray-400 text-[20px]"><img src="./cutt.svg" alt="" className="w-6 h-6" /></span>
                                        Travel Insurance
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full lg:w-[380px]">
                    <div className="sticky top-24 flex flex-col gap-6">
                        <div
                            className="flex flex-col overflow-hidden rounded-xl bg-white shadow-xl dark:bg-[rgb(255,255,255)] border border-[#131811] dark:border-[#131811]">
                            <div className="bg-[#000000] p-4 text-center">
                                <span className="text-sm font-medium text-white">Limited Seats Available</span>
                            </div>
                            <div className="flex flex-col gap-6 p-6">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Starting price per person</p>
                                    <div className="flex items-end gap-2">
                                        <h3 className="text-4xl font-black text-[#131811] dark:text-black">£1,450</h3>
                                        <span className="mb-1 text-sm font-medium line-through text-black">£1,650</span>
                                    </div>
                                    <p className="mt-1 text-xs text-gray-400">*Based on quad occupancy</p>
                                </div>
                                <div className="space-y-3 rounded-lg bg-gray-50 p-4 dark:bg-white/5">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">Departure</span>
                                        <span className="font-bold">10 Feb 2024</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">Return</span>
                                        <span className="font-bold">24 Feb 2024</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">Airline</span>
                                        <span className="font-bold">Saudi Airlines</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                   <Button text="Book Now" padding="10px 7px"/>
                                   <Button text="Enquire on Whatsapp" href="https://wa.me/923001234567" iconSrc="./chat.svg" padding="10px 7px" />
                                </div>
                                <div
                                    className="flex items-center justify-center gap-4 border-t border-gray-100 pt-4 dark:border-white/5">
                                    <div className="flex items-center gap-1">
                                        <span
                                            className="material-symbols-outlined text-xl text-gray-400"><img src="./verified.svg" alt="" className="h-5 w-5" /></span>
                                        <span className="text-xs font-medium text-gray-500">ATOL Protected</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xl text-gray-400"><img src="./flight.svg" alt="" className="h-5 w-5" /></span>
                                        <span className="text-xs font-medium text-gray-500">Hajj Ministry Approved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="rounded-xl bg-[#e9fcfd] p-6 shadow-[0_10px_12px_rgba(0,0,0,0.2)]">
                            <h4 className="mb-2 font-bold">Need assistance?</h4>
                            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">Speak to our expert travel
                                consultants for customized packages.</p>
                            <div className="flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/10">
                                    <span className="material-symbols-outlined text-primary"><img src="./call.svg" alt="" className="h-10 w-10" /></span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 ">Call us 24/7</p>
                                    <p className="font-bold text-[#131811] text-black">+44 20 1234 5678</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        
        </>
    )
    
}