import Button from "../Button"
export default function () {
    return (
        <>
            <section className="relative w-full bg-[url('/banner__bg.png')] py-20  bg-cover bg-center bg-no-repeat flex justify-center bg-white dark:bg-background-dark">
                <div className="layout-container flex flex-col  px-4 md:px-10 py-5">
                             <div className="absolute inset-0 bg-black/40"></div>

                                <div className="relative z-10 flex flex-col gap-4 text-center max-w-[720px]">
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl drop-shadow-lg">
                                        Comprehensive Umrah Services Designed for Your Peace of Mind
                                    </h1>
                                    <h2 className="text-gray-100 text-sm font-normal mb-4 leading-relaxed @[480px]:text-lg max-w-[600px] mx-auto drop-shadow-md">
                                        Experience a spiritual journey with our trusted travel solutions, from visa processing to luxury transport. We handle the details so you can focus on devotion.
                                    </h2>
                                </div>
                                <div className="relative z-10 flex gap-4 flex-col sm:flex-row gap- mx-auto">
                                   
                                   <Button text="Start Planning" padding="10px 12px " bgColor="greeny" />
                                 
                                   <Button text="Contact Support" href="/contact"  padding="10px 12px " />
                                  
                                </div>
                            </div>
            </section>

        </>
    )
}