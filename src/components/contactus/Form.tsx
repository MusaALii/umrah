import Button from "../Button";
export default function(){
    return(
        <>      
        <section
            className="flex-grow bg-white  py-16 px-4 sm:px-10">
            <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
              
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="mb-8">
                        <h2 className="text-[#131811] text-3xl font-bold mb-3 tracking-tight">Send an
                            Inquiry</h2>
                        <p className="text-[#000000] ">Fill out the form below and our team will get back
                            to you within 24 hours.</p>
                    </div>
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row gap-5">
                            <label className="flex flex-col flex-1 gap-2">
                                <span className="text-[#131811]  text-sm font-semibold">Full Name</span>
                                <input
                                    className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-[#d4e9f2] border border-[#d4e9f2]  focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#000000]"
                                    placeholder="e.g. Ahmed Ali" type="text" />
                            </label>
                            <label className="flex flex-col flex-1 gap-2">
                                <span className="text-[#131811]  text-sm font-semibold">Phone
                                    Number</span>
                                <input
                                    className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-[#d4e9f2] border border-[#d4e9f2]  focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#000000]"
                                    placeholder="+1 (555) 000-0000" type="tel" />
                            </label>
                        </div>
                        <label className="flex flex-col gap-2">
                            <span className="text-[#131811]  text-sm font-semibold">Email Address</span>
                            <input
                                className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-[#d4e9f2] border border-[#dee6db] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#000000]"
                                placeholder="you@example.com" type="email" />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-[#131811]  text-sm font-semibold">Package
                                Interest</span>
                            <div className="relative">
                                <select
                                    className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-[#d4e9f2] border border-[#d4e9f2]  focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none cursor-pointer text-[#131811] ">
                                    <option>Standard Umrah Package</option>
                                    <option>Premium Umrah Package</option>
                                    <option>Family Group Package</option>
                                    <option>Custom Itinerary</option>
                                </select>
                                <span
                                    className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black"><img src="./direction.svg" alt="" className="w-5 h-5 rotate-90 " /></span>
                            </div>
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-[#131811]  text-sm font-semibold">Message</span>
                            <textarea
                                className="w-full min-h-[140px] p-4 rounded-lg bg-background-light dark:bg-[#d4e9f2] border border-[#d4e9f2] focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-y placeholder:text-[#000000]"
                                placeholder="Please provide any specific requirements or questions..."></textarea>
                        </label>
                       <Button text="Send Message" bgColor="greeny" padding="10px 14px"/>
                    </form>
                </div>
              
                <div className="w-full lg:w-1/2 h-full min-h-[400px] flex flex-col gap-6">
                    <div
                        className="flex-1 w-full bg-gray-100  rounded-2xl overflow-hidden relative shadow-inner border border-[#dee6db] dark:border-[#bab5b5]">
                      
                        <div className="absolute inset-0  bg-cover bg-center opacity-80"
                            data-alt="Map view showing city streets and office location pin"
                            data-location="Office Map View"></div>
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                         <iframe  className="absolute inset-0 w-full h-full"  src="https://www.google.com/maps?q=Mecca&output=embed" ></iframe>
                            <div
                                className="bg-white  p-4 rounded-xl shadow-lg flex flex-col items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-4xl"><img src="greenlocation.svg" alt="" className="w-6 h-6" /></span>
                                <p className="font-bold  dark:text-black">Our Office Location</p>
                               <Button text="Open in Map" href="https://www.google.com/maps/@?api=1&map_action=map&parameters" bgColor="greeny" padding="6px 7px"/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div
                            className="bg-background-light dark:bg-[#ffffff] p-4 rounded-xl border border-[#dee6db] dark:border-[#2a3c25] flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary mt-1"><img src="greentime.svg" alt="" className="w-6 h-6" /></span>
                            <div>
                                <h4 className="font-bold text-black mb-1">Office Hours</h4>
                                <p className="text-xs text-black">Mon - Fri: 09:00 - 18:00</p>
                                <p className="text-xs text-black">Sat: 10:00 - 14:00</p>
                            </div>
                        </div>
                        <div
                            className="bg-background-light dark:bg-[#ffffff] p-4 rounded-xl border border-[#dee6db] dark:border-[#2a3c25] flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary mt-1"><img src="./greenverified.svg" alt="" className="w-6 h-6" /></span>
                            <div>
                                <h4 className="font-bold text-sm text-[#131811] mb-1
                                ">Trust &amp; Safety
                                </h4>
                                <p className="text-xs text-black">Certified Travel Agency.</p>
                                <p className="text-xs text-black">Licensed for Umrah Services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>           
        </>
    )
}