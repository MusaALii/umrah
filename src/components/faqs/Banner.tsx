import Button from "../Button";

export default function Banner() {
    return (
        <>

            <div className="@container">
                <div className="@[480px]">
                    <div className=" relative flex min-h-[400px] flex-col gap-6 bg-[url('./banner__bg.png')] bg-cover bg- bg-center bg-no-repeat @[480px]:gap-8  items-center justify-center p-6 shadow-md">
                    <div className="absolute bg-black/55 w-full h-full"></div>
                        <div className="flex flex-col gap-2 text-center max-w-2xl relative z-10">
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                                Frequently Asked Questions
                            </h1>
                            <h2 className="text-white text-base font-normal leading-relaxed">
                                Everything you need to know for your spiritual journey, from visa requirements to health guidelines.
                            </h2>
                        </div>
                        <label className="flex flex-col w-full max-w-[580px] h-14 @[480px]:h-16 shadow-lg ">
                            <div className="relative z-30 flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
                                <input type="search" className="flex w-full min-w-0 flex-1 resize-none bg-white  text-[#131811] placeholder:text-[#6b8961] dark:placeholder:text-[#6a7c64] px-3 text-base focus:outline-1 border-y border-gray-200 dark:border-[#2a3c26] h-full" placeholder="Search topics'..." value="" />
                                  <Button text="search" bgColor="greeny " padding="14px 14px"/>
                                
                            </div>
                        </label>
                    </div>
                </div>
            </div>

        </>
    )
}