import { Link } from "react-router-dom";
import Button from "../Button";
export default function Ourstory() {
    return (
        <>
            <div className="relative flex w-full flex-col">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 md:px-10 flex flex-1 justify-center py-5">
                        <div className="container flex flex-col  flex-1">
                            <div className="@container">
                                <div className="flex flex-col gap-10 px-4 py-16 md:flex-row items-center">
                                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                                        <div className="flex flex-col gap-4 text-left">
                                            <h2 className="text-primary text-sm font-bold tracking-wider uppercase">Our Story</h2>
                                            <h1 className="text-black text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                                                15 Years of Serving Pilgrims
                                            </h1>
                                            <p className="text-black text-lg font-normal leading-relaxed">
                                                Founded with a singular vision: to facilitate the journey of the guests of Allah. With over 15 years of experience, we have had the privilege of serving
                                                thousands of pilgrims, ensuring their comfort and spiritual focus from departure to return.
                                            </p>
                                            <p className="text-black text-base font-normal leading-relaxed">
                                                What started as a small family-run service has grown into a leading agency, but our core values remain the same: sincerity, integrity, and dedication to the Sunnah.
                                            </p>
                                        </div>
                                        <div className="flex gap-4 pt-2">
                                            <Link to="/services">
                                           <Button text="view our services" padding="10px 14px" href="/services" bgColor="greeny"/>
                                           </Link>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 relative pl-0 md:pl-10">
                                        <div className="bg-[url('./pray-together.png')] bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl h-[400px] w-full relative z-10">
                                        </div>

                                        <div className="absolute -bottom-6 -right-6 md:right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0"></div>
                                        <div className="absolute -top-6 -left-6 md:left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}