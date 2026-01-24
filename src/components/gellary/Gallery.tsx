import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Button from "../Button";

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [active, setActive] = useState("all");

    const gallery = [
        { src: "/gal-1.png", group: "Group 1", title: "Arrival at Makkah", cat:"hotel" }, 
        { src: "/gal-2.png", group: "Group 1", title: "Arrival at Makkah", cat:"hotel" }, 
        { src: "/gal-3.png", group: "Group 1", title: "Arrival at Makkah", cat:"hotel" }, 
        { src: "/gal-3.png", group: "Group 1", title: "Arrival at Makkah", cat:"hotel" }, 
        { src: "/gal-3.png", group: "Group 1", title: "Arrival at Makkah", cat:"ziarat" }, 
        { src: "/gal-3.png", group: "Group 1", title: "Arrival at Makkah", cat:"ziarat" }, 
        { src: "/gal-3.png", group: "Group 1", title: "Arrival at Makkah", cat:"ziarat" }, 
        { src: "/gal-4.png", group: "Group 1", title: "Arrival at Makkah", cat:"ziarat" }, 
        { src: "/gal-5.png", group: "Group 1", title: "Arrival at Makkah", cat:"ziarat" }, 
        { src: "/gal-5.png", group: "Group 1", title: "Arrival at Makkah", cat:"tour" }, 
        { src: "/gal-5.png", group: "Group 1", title: "Arrival at Makkah", cat:"tour" }, 
        { src: "/gal-5.png", group: "Group 1", title: "Arrival at Makkah", cat:"tour" }, 
        { src: "/gal-5.png", group: "Group 1", title: "Arrival at Makkah", cat:"tour" }, 
        { src: "/gal-5.png", group: "Group 1", title: "Arrival at Makkah", cat:"tour" }, 
        { src: "/gal-5.png", group: "Group 1", title: "Arrival at Makkah", cat:"tour" }, 
        { src: "/gal-5.png", group: "Group 1", title: "Arrival at Makkah", cat:"group" }, 
        { src: "/gal-5.png", group: "Group 1", title: "Arrival at Makkah", cat:"group" }, 
        { src: "/gal-5.png", group: "Group 1", title: "Arrival at Makkah", cat:"group" }, 
        { src: "/gal-5.png", group: "Group 1", title: "Arrival at Makkah", cat:"group" }, 
        { src: "/gal-6.png", group: "Group 1", title: "Arrival at Makkah", cat:"group" }, 
        { src: "/gal-7.png", group: "Group 1", title: "Arrival at Makkah", cat:"group" }, 
        { src: "/gal-3.png", group: "Group 1", title: "Arrival at Makkah", cat:"ziarat" }, 
        { src: "/gal-9.png", group: "Group 1", title: "Arrival at Makkah", cat:"ziarat" }, 
        { src: "/gal-10.png",group: "Group 1", title: "Arrival at Makkah", cat:"ziarat" },
    ]
    const galleryFilter = active == 'all'? gallery : gallery.filter(item => item.cat === active  )

    return (
        <>

            <div className="container flex flex-col items-start w-full py-5 px-5 ">
                    <div className="flex flex-col md:flex-row md:items-end justify-between  gap-4">
                        <div>
                            <h2 className="text-[#131811] text-2xl md:text-3xl font-bold leading-tight mb-2">Captured Moments</h2>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="flex   mb-4">
                            <h3 className="text-lg font-bold text-[#131811]  flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary"></span>
                                Interactive Tours
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-6">
                            <Button text="all photos" padding="10px 14px" onClick={() => setActive("all")}/>
                            <Button bgColor="greeny" text="Previous Groups" padding="10px 14px"  onClick={() => setActive("group")} />
                            <Button bgColor="greeny" text="Hotels" padding="10px 14px"  onClick={() => setActive("hotel")} />
                            <Button bgColor="greeny" text="ziyarat" padding="10px 14px"  onClick={() => setActive("ziarat")} />
                            <Button bgColor="greeny" text="Virtual Tours" padding="10px 14px"  onClick={() => setActive("tour")} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-4">
                        {galleryFilter.map((item, i) => (
                            <div key={i} onClick={() => { setIndex(i); setOpen(true) }} className="relative group rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <img alt={item.title} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Pilgrims in Ihram gathering near Kaaba" src={item.src} />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                    <span className="text-white text-xs font-bold uppercase mb-1">{item.group}</span>
                                    <h4 className="text-white font-bold">{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={gallery}
                index={index}
            />
        </>
    )
}