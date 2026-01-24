import Button from "../Button"
export default function JourneySection() {
    return (
        <>
            <section className="w-full flex justify-center py-10 mb-10">
                <div className="layout-content-container flex flex-col max-w-[1040px] w-full px-4 md:px-10">
                    <div className="bg-[#0b3200]  dark:bg-primary/10 rounded-2xl overflow-hidden p-8 md:p-12 relative">
                        
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[#081f01]  rounded-full blur-3xl">
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex flex-col gap-4 text-center md:text-left max-w-lg  ">
                                <h2 className="text-white text-3xl font-bold tracking-tight">Ready to start your spiritual
                                    journey?</h2>
                                <p className="text-gray-300">Contact our team today for a custom quote tailored to your specific
                                    needs and dates.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto items-center">
                              <Button text="Whatsapp US" href="https://wa.me/923001234567?text=Hello"  padding="7px 14px" iconSrc="chat.svg"/>
                               <Button text="Custom Quote" padding="10px 14px"/>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}