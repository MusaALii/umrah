import Button from "../Button"
export default function Banner() {
    return (
        <>
            <div className="relative flex w-full flex-col overflow-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="flex flex-1 justify-center">
                        <div className="layout-content-container flex flex-col w-full flex-1">
                            <div className="@container">
                                <div className="">
                                    <div className="flex min-h-[560px] flex-col gap-6 bg-[url('/banner__bg.png')] bg-cover bg-center bg-no-repeat items-center justify-center p-4 relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                                        <div className="flex flex-col gap-4 text-center max-w-[800px] z-10">
                                            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                                                Honored to Serve the Guests of the Most Merciful
                                            </h1>
                                            <h2 className="text-white/90 text-lg md:text-xl font-normal leading-relaxed">
                                                Your trusted partner for a spiritual journey of a lifetime. We handle the logistics so you can focus on your worship.
                                            </h2>
                                        </div>
                                        <div className="flex gap-4 z-10 mt-4">
                                            <Button text="View our story" bgColor="greeny" padding="10px 14px"/>
                                        </div>
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