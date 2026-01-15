import { useState } from "react";
import Button from "../Button";

export default function Reviews() {
    const items = [
        {
            mainimg: "./nightview.png",
            Catogery: "vip",
            rateicon: "./stars.svg",
            content: "Everything was perfectly organized. The bus was comfortable and the hotels were amazing.",
            name: "Brother Yousuf",
            circlebg: "./mirrorhotel.png"
        },
        {
            mainimg: "./nightview.png",
            Catogery: "vip",
            rateicon: "./stars.svg",
            content: "Everything was perfectly organized. The bus was comfortable and the hotels were amazing.",
            name: "Brother Yousuf",
             circlebg: "./mirrorhotel.png"
        },
        {
            mainimg: "./nightview.png",
            Catogery: "solo",
            rateicon: "./stars.svg",
            content: "Everything was perfectly organized. The bus was comfortable and the hotels were amazing.",
            name: "Brother Yousuf", circlebg: "./mirrorhotel.png"
        },
        {
            mainimg: "./nightview.png",
            Catogery: "family",
            rateicon: "./stars.svg",
            content: "Everything was perfectly organized. The bus was comfortable and the hotels were amazing.",
            name: "Brother Yousuf",
            circlebg: "./mirrorhotel.png"
        },
        {
            mainimg: "./nightview.png",
            Catogery: "family",
            rateicon: "./stars.svg",
            content: "Everything was perfectly organized. The bus was comfortable and the hotels were amazing.",
            name: "Brother Yousuf",
            circlebg: "./mirrorhotel.png"
        },
        {
            mainimg: "./nightview.png",
            Catogery: "family",
            rateicon: "./stars.svg",
            content: "Everything was perfectly organized. The bus was comfortable and the hotels were amazing.",
            name: "Brother Yousuf",
            circlebg: "./mirrorhotel.png"
        },
        {
            mainimg: "./nightview.png",
            Catogery: "solo",
            rateicon: "./stars.svg",
            content: "Everything was perfectly organized. The bus was comfortable and the hotels were amazing.",
            name: "Brother Yousuf",
            circlebg: "./mirrorhotel.png"
        }
    ];

    const [active, setActive] = useState("all");

    const filteredItems = active === "all" ? items : items.filter(item => item.Catogery === active); 

    return (
        <>
            <div className="w-full bg-background-light dark:bg-[#ededed] py-12 md:py-20">
                <div className="flex justify-center">
                    <div className="container px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                            <div>
                                <h2 className="text-[#131811] text-3xl font-bold mb-2">Recent Stories</h2>
                                <p className="text-black">Read verified reviews from our community.</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Button text="All Reviews" padding="10px 12px" onClick={() => setActive("all")} />
                                <Button text="VIP Packages" padding="10px 12px" onClick={() => setActive("vip")} />
                                <Button text="Family Groups" padding="10px 12px" onClick={() => setActive("family")} />
                                <Button text="Solo Travels" padding="10px 12px" onClick={() => setActive("solo")} />
                            </div>
                        </div>
                        <div className="grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-6">
                            {filteredItems.map((item, index) => (
                                <div key={index} className="break-inside-avoid bg-white rounded-xl border border-gray-100 dark:border-gray-800 p-4 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="rounded-lg overflow-hidden w-full h-40 mb-3">
                                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.mainimg})` }}
                                        ></div>
                                    </div>
                                    <div className="flex text-primary mb-2">
                                        <img src={item.rateicon} alt="stars" className="w-16" />
                                    </div>
                                    <p className="text-[#131811] text-sm leading-relaxed mb-3">{item.content}</p>
                                    <div className="flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                                        <div
                                            className="size-6 rounded-full bg-gray-200 bg-cover bg-center"
                                            style={{ backgroundImage: `url(${item.circlebg || '/mirrorhotel.png'})` }}
                                        ></div>
                                        <span className="text-xs font-bold text-[#131811]">{item.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
}
