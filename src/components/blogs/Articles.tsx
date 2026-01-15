import { useState } from "react";
import Button from "../Button";
import {Link} from "react-router-dom";

export default function Articles() {
    const Articles = [
        {
            sideribon: "Preparation",
            mianimg: "./art-1.png",
            title: "What to Pack for Umrah: The Essential Checklist",
            content: "Don't forget the essentials. Our comprehensive list covers everything from Ihram garments to comfortable footwear and personal care items.",
            link: "Read Article",
            arrow: "./greenarrow.svg",
            catogery:"preparation"
        },
        {
            sideribon: "Travel Tips",
            mianimg: "./art-3.png",
            title: "Travel Tips for First-Timers",
            content: "First time visiting Mecca? Avoid common mistakes with our expert advice on navigating the crowds, managing prayers, and staying healthy.",
            link: "Read Article",
            arrow: "./greenarrow.svg",
              catogery:"preparation"
        },
        {
            sideribon: "Hotels & Logistics",
            mianimg: "./art-4.png",
            title: "Best Hotels Near the Haram",
            content: "A curated list of the best hotels within walking distance of the Grand Mosque, catering to various budgets and needs.",
            link: "Read Article",
            arrow: "./greenarrow.svg",
              catogery:"preparation"
        },
        {
            sideribon: "Spiritual",
            mianimg: "./art-5.png",
            title: "The History of Mecca",
            content: "Explore the rich history of the holy city before you arrive. Understanding the context deepens the spiritual experience.",
            link: "Read Article",
            arrow: "./greenarrow.svg",
              catogery:"tips"
        },
        {
            sideribon: "Preparation",
            mianimg: "./art-6.png",
            title: "Local Food & Etiquette",
            content: "What to eat and how to interact respectfully with locals during your stay in Saudi Arabia.",
            link: "Read Article",
            arrow: "./greenarrow.svg",
              catogery:"tips"
        },
        {
            sideribon: "Culture",
            mianimg: "./art-1.png",
            title: "Local Food & Etiquette",
            content: "What to eat and how to interact respectfully with locals during your stay in Saudi Arabia.",
            link: "Read Article",
            arrow: "./greenarrow.svg",
            catogery:"tips"
        },
           {
            sideribon: "Culture",
            mianimg: "./art-1.png",
            title: "Local Food & Etiquette",
            content: "What to eat and how to interact respectfully with locals during your stay in Saudi Arabia.",
            link: "Read Article",
            arrow: "./greenarrow.svg",
            catogery:"logistic"
        },
    
       {
            sideribon: "Culture",
            mianimg: "./art-1.png",
            title: "Local Food & Etiquette",
            content: "What to eat and how to interact respectfully with locals during your stay in Saudi Arabia.",
            link: "Read Article",
            arrow: "./greenarrow.svg",
            catogery:"logistic"
        },
         {
            sideribon: "Culture",
            mianimg: "./art-1.png",
            title: "Local Food & Etiquette",
            content: "What to eat and how to interact respectfully with locals during your stay in Saudi Arabia.",
            link: "Read Article",
            arrow: "./greenarrow.svg",
            catogery:""
        },
         {
            sideribon: "Culture",
            mianimg: "./art-1.png",
            title: "Local Food & Etiquette",
            content: "What to eat and how to interact respectfully with locals during your stay in Saudi Arabia.",
            link: "Read Article",
            arrow: "./greenarrow.svg",
            catogery:"rituals"
        },
         {
            sideribon: "Culture",
            mianimg: "./art-1.png",
            title: "Local Food & Etiquette",
            content: "What to eat and how to interact respectfully with locals during your stay in Saudi Arabia.",
            link: "Read Article",
            arrow: "./greenarrow.svg",
            catogery:"rituals"
        },
     ];
     const [active, setActive] = useState("all");

    const filteredArticles = active === "all" ? Articles : Articles.filter(article => article.catogery === active); 
    
        
   

    return (
        <>
            <div className="px-4 md:px-10 lg:px-40 my-12">
                <div className="flex flex-col lg:flex-row gap-8 container mx-auto">
                    <div className="flex-1 flex flex-col gap-8">

                        <div className="bg-white  p-6 rounded-xl shadow-sm border border-[#f1f4f0] dark:border-[#2a4025]">
                            <div className="flex flex-col gap-4">

                                <div className="relative w-full">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b8961]"><img src="./search.svg" alt="" className="w-5 h-5" /></span>
                                    <input className="w-full h-12 pl-10 pr-4 bg-[#f1f4f0]  border-none rounded-lg text-[#131811] placeholder:text-[#6b8961] focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Search for guides, tips, or rituals..." type="text" />
                                </div>

                                <div className="flex gap-2 flex-wrap">
                                    <Button text="All Guides" padding="10px 12px"  onClick={() => setActive("all")} />
                                    <Button bgColor="greeny" text="Preparation" padding="10px 12px"  onClick={() => setActive("preparation")} />
                                    <Button bgColor="greeny" text="Rituals" padding="10px 12px"  onClick={() => setActive("rituals")} />
                                    <Button bgColor="greeny" text="Travel Trips" padding="10px 12px" onClick={() => setActive("tips")} />
                                    <Button bgColor="greeny" text="All Logistics" padding="10px 12px" onClick={() => setActive("logistic")} />



                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredArticles.map(article =>


                                <article className="flex flex-col bg-white  rounded-xl overflow-hidden border border-[#f1f4f0] dark:border-[#cfd3ce] hover:shadow-md transition-shadow group">
                                    <div className="h-48 overflow-hidden relative">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                            style={{ backgroundImage:`url(${article.mianimg})` }}
                                        ></div>

                                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-[#131811]">{article.sideribon}</div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">{article.content}</p>
                                        <Link className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all" to="#">
                                            {article.link} <span className="material-symbols-outlined text-sm"><img src={article.arrow} alt="" className="w-4" /></span>
                                        </Link >
                                    </div>
                                </article>
                            )}

                        </div>
                       
                    </div>
                    <div className="w-full  lg:w-[340px] flex flex-col gap-6">
                        <div className=" rounded-xl p-8 text-white relative overflow-hidden bg-[#2a4025]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                            <div className="relative z-10 flex flex-col gap-4 ">
                                <span className="material-symbols-outlined text-primary text-4xl"><img src="./greenflight.svg" alt="" className="w-10 h-10" /></span>
                                <h3 className="text-2xl font-bold">Ready for your spiritual journey?</h3>
                                <p className="text-gray-300 text-sm">We offer all-inclusive Umrah packages tailored to your needs. Let us handle the logistics while you focus on worship.</p>
                                <Button text="View Packages" padding="10px 14px"/>
                                <Button text="Talk to an Agent" padding="10px 14px"/>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-[#f1f4f0] dark:border-[#2a4025]">
                            <h4 className="font-bold text-lg mb-4 border-b border-[#f1f4f0] dark:border-[#2a4025] pb-2">Popular Reads</h4>
                            <div className="flex flex-col gap-4">
                                <Link className="flex gap-3 group" to="#">
                                    <div className="w-16 h-16 rounded-lg  bg-[url('/pop-1.png')] bg-cover bg-center shrink-0" ></div>
                                    <div>
                                        <h5 className="text-sm font-semibold group-hover:text-primary line-clamp-2 transition-colors">Umrah Visa Requirements for 2024</h5>
                                        <span className="text-xs text-gray-500">5 min read</span>
                                    </div>
                                </Link >
                                <Link className="flex gap-3 group" to="#">
                                    <div className="w-16 h-16 rounded-lg  bg-[url('/pop-2.png')] bg-cover bg-center shrink-0"></div>
                                    <div>
                                        <h5 className="text-sm font-semibold group-hover:text-primary line-clamp-2 transition-colors">Healthy Eating During Umrah</h5>
                                        <span className="text-xs text-gray-500">3 min read</span>
                                    </div>
                                </Link >
                                <Link className="flex gap-3 group" to="#">
                                    <div className="w-16 h-16 rounded-lg  bg-[url('/popular_3.png')] bg-cover bg-center shrink-0"></div>
                                    <div>
                                        <h5 className="text-sm font-semibold group-hover:text-primary line-clamp-2 transition-colors">Doas to Recite in Haram</h5>
                                        <span className="text-xs text-gray-500">6 min read</span>
                                    </div>
                                </Link >
                            </div>
                        </div>
                        <div className="bg-[#f6f8f6]  rounded-xl p-6 text-center">
                            <p className="font-bold text-sm mb-4">Follow us for daily tips</p>
                            <div className="flex justify-center gap-4 text-[#131811] dark:text-white">
                                <Link className="p-2 bg-white dark:bg-[#d0d0d0] rounded-full hover:text-primary hover:shadow transition-all" to="#"><span className="material-symbols-outlined"><img src="./greenworld.svg" alt="" className="w-6 h-6" /></span></Link >
                                <Link className="p-2 bg-white dark:bg-[#d0d0d0] rounded-full hover:text-primary hover:shadow transition-all" to="#"><span className="material-symbols-outlined"><img src="./greencamera.svg" alt="" className="w-6 h-6" /></span></Link >
                                <Link className="p-2 bg-white dark:bg-[#d0d0d0] rounded-full hover:text-primary hover:shadow transition-all" to="#"><span className="material-symbols-outlined"><img src="./greenplay.svg" alt="" className="w-6 h-6" /></span></Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}