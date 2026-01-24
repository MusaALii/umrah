import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const gallery = [
        { src: "/gal-1.png", group: "Group 1", title: "Arrival at Makkah" },
        { src: "/gal-2.png", group: "Group 1", title: "Arrival at Makkah" },
        { src: "/gal-3.png", group: "Group 1", title: "Arrival at Makkah" },
        { src: "/gal-3.png", group: "Group 1", title: "Arrival at Makkah" },
        { src: "/gal-3.png", group: "Group 1", title: "Arrival at Makkah" },
    ]
    return (
        <>
            <div className="w-full py-16 px-4 lg:px-10 ">
                <div className="layout-container flex justify-center">
                    <div className="flex flex-col max-w-[1080px] w-full gap-8">
                        <div className="text-center">
                            <h2 className="text-[#131811] text-3xl font-black mb-4">Glimpses of the Holy Land</h2>
                            <p className="text-black">Moments of peace and spirituality captured.</p>
                        </div>
                        <div className="w-full gap-2 rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                            {gallery.map((item, i) => (
                                <div key={i} onClick={() => { setIndex(i); setOpen(true) }} className="relative w-full sm:first:row-span-2 sm:first:col-span-2" data-alt="Stunning night view of the Holy Mosque in Makkah lit up brightly">
                                    <img src={item.src} className="w-full h-full rounded-lg object-cover" />
                                    <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded text-white text-xs font-medium">{item.title}</div>
                                </div>
                            ))}
                        </div>
                        <Lightbox open={open} close={() => setOpen(false)} slides={gallery} index={index} />
                    </div>
                </div>
            </div>
        </>
    )
}