import { Link } from "react-router-dom";

export default function Footer() {
    const Quicklinks = [
        { title: "Home",  url: "/" },
        { title: "Packages", url: "/packages" },
        { title: "Services", url: "/services"  },
        { title: "Blog", url: "/blogs" },
        { title: "journey", url: "/journey" },
        { title: "Testimonlials", url: "/testimonial" },
    ]
    const Supports = [
        { title: "Contact Us", url: "/contact" },
        { title: "Spacific", url: "/spacific" },
        { title: "FAQs", url: "/faq" },
        { title: "Terms & Conditions", url: "/" },
        { title: "Privacy Policy", url: "/" },
        { title: "Gallery", url: "/gallery" },
    ]

    return (
        <>
            <footer className="bg-[#ffffff] text-black pt-16 pb-8 px-4 lg:px-10 mt-auto">
                <div className="container flex justify-center">
                    <div className="flex flex-col container">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-black">
                                    <div className="size-6 text-primary">
                                        <span className="material-symbols-outlined text-2xl"></span>
                                    </div>
                                    <h2 className="text-lg font-bold">Umrah Travel</h2>
                                </div>
                                <p className="text-black text-sm leading-relaxed">Your trusted partner for spiritual journeys
                                    to the Holy Land. We strive to make your pilgrimage comfortable and memorable.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-lg font-bold">Quick Links</h3>      
                                <div className="flex flex-col gap-2 text-black text-sm">
                                    {Quicklinks.map(link =>
                                        <Link className="hover:text-primary transition-colors" to={link.url}>{link.title}</Link>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-lg font-bold">Support</h3>
                                <div className="flex flex-col gap-2 text-black text-sm">
                                    {Supports.map(link =>
                                        <Link className="hover:text-primary transition-colors" to={link.url}>{link.title}</Link>
                                    )}

                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-lg font-bold">Contact</h3>
                                <div className="flex flex-col gap-3 text-black text-sm">
                                    <p className="flex items-center gap-2"><span
                                        className="material-symbols-outlined text-base"><img src="./location.svg" alt="" className="w-6 h-6" /></span> 123 Travel St,
                                        London, UK</p>
                                    <p className="flex items-center gap-2"><span
                                        className="material-symbols-outlined text-base"><img src="./call.svg" alt="" className="w-6 h-6" /></span> +44 20 1234 5678</p>
                                    <p className="flex items-center gap-2"><span
                                        className="material-symbols-outlined text-base"><img src="./mail.svg" alt="" className="w-6 h-6" /></span> info@umrahtravel.com</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-black">
                            <p>© 2024 Umrah Travel. All rights reserved.</p>
                            <div className="flex gap-4">
                                <Link className="hover:text-white" to="#">Facebook</Link>
                                <Link className="hover:text-white" to="#">Twitter</Link>
                                <Link className="hover:text-white" to="#">Instagram</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Link aria-label="Contact us on WhatsApp"
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full bg-[#154a00] text-[#131811] shadow-2xl hover:scale-110 transition-transform cursor-pointer group"
                to="#">
                <div
                    className="absolute opacity-0 group-hover:opacity-100 right-16 bg-[#131811] text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-opacity">
                    Chat with us</div>
                <span className="material-symbols-outlined text-3xl"><img src="./bubble.svg" alt="" className="w-10 h-10" /></span>
            </Link>

        </>
    )
}