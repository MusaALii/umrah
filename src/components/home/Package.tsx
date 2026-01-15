import {Link} from "react-router-dom";

import Button from "../Button"
export default function Packages() {
    const Packages = [
        {
            index: 1,
            bg: "/Kabbaview.jpg",
            iconimg: "./calender.svg",
            days: "10 Days",
            flightname: "Inc. Flights",
            imgicon: "./up-flight.svg",
            title: "Ramadan Essentials",
            content: "A spiritual 10-day journey during the last days of Ramadan with proximity to Haram.",
            price: "$1,299",
            tag: "Economy"
        },
        {
            index: 2,

            bg: "/madina.jpg",
            iconimg: "./calender.svg",
            days: "14 Days",
            flightname: "5-Star",
            imgicon: "./rate.svg",
            title: "Deluxe Makkah & Madinah",
            content: "Experience luxury with 5-star accommodations steps away from the Holy Mosques.",
            price: "$2,450",
            tag: "Premium"
        },
        {
            index: 3,

            bg: "/inside-view.jpg",
            iconimg: "./calender.svg",
            days: "12 Days",
            flightname: "Guided",
            imgicon: "./group.svg",
            title: "Family & Group Special",
            content: "Ideal for families and groups, featuring guided tours and shared accommodation options.",
            price: "$1,650",
            tag: "Group"
        }

    ]
    return (
        <>
            <div className="w-full bg-[#f6f8f6] dark:bg-[#f7f7f7] py-16 lg:py-24 px-4 lg:px-10">
                <div className="layout-container flex justify-center">
                    <div className="flex flex-col max-w-[1080px] w-full gap-12">
                        <div className="flex justify-between items-end flex-wrap gap-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[#131811]  text-3xl md:text-4xl font-black leading-tight">Popular Packages</h2>
                                <p className="text-[#6b8961] dark:text-[#131811]">Hand-picked packages for the upcoming season.</p>
                            </div>
                            <Link className="text-[#131811] font-bold hover:underline flex items-center gap-1" to="#">
                                View all packages
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Packages.map((Package) => (
                                <div key={Package.index} className="bg-white dark:bg-[#142210] rounded-2xl overflow-hidden border border-[#dee6db]  shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                                    <div className={`relative h-48 w-full`}>
                                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Package.bg})` }}></div>
                                        <div className="absolute top-4 right-4 bg-white backdrop-blur text-[#131811] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{Package.tag}</div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1 bg-white">
                                        <div className="flex items-center gap-2  dark:text-gray-400 text-sm mb-3">
                                            <span className="material-symbols-outlined text-base"><img src={Package.iconimg} alt="" className="w-4 h-4" /></span>
                                            <span className="text-black ">{Package.days}</span>
                                            <span className="mx-1">•</span>
                                            <span className="material-symbols-outlined text-base"><img src={Package.imgicon} alt="" className="w-4 h-4" /></span>
                                            <span className="text-black ">{Package.flightname}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#ffffff] dark:text-[#131811] mb-2">{Package.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-[#131811] mb-6 line-clamp-2">{Package.content}</p>
                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#f1f4f0] dark:border-[#2a3825]">
                                            <div className="flex flex-col">
                                                <span className="text-xs text-black  dark:text-black font-medium">From</span>
                                                <span className="text-lg font-black text-primary">{Package.price}</span>
                                            </div>
                                            <Button text="Details " padding="7px " bgColor="white" />
                                        </div>

                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}