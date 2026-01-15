import Button from "../Button"
export default function FooterCta() {
    return (
        <>
            <div className="relative w-full py-16 bg-[#131811] dark:bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/cta__bg.png')] bg-cover bg-center"></div>
                <div className="relative z-10 layout-container flex justify-center w-full">
                    <div className="px-4 w-full max-w-[800px] text-center flex flex-col items-center gap-6">
                        <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">Ready to write your own story?</h2>
                        <p className="text-gray-300 text-lg max-w-lg">Join us for a spiritual journey that you will cherish forever. View our upcoming packages for 2024.</p>
                        <div className="flex gap-4 mt-4">
                          <Button text=" View 2024 Packages" padding="10px 14px" bgColor="greeny"/>
                          <Button text="  Talk to an Expert" padding="10px 14px"/>

                        
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}