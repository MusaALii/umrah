import Button from "../Button"
export default function FooterCta() {
    return (
        <>
            <div className="w-full bg-[#f1f7f0]  border-t border-b border-[#e2e8e0] py-16">
                <div className="layout-container flex flex-col items-center justify-center text-center px-4">
                    <div className="size-12 rounded-full bg-green-200 flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-primary text-2xl"><img src="./greenflight.svg" alt="" className="w-6 h-6" /></span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#131811] mb-4">Inspired by our journey?</h2>
                    <p className="text-black max-w-xl mb-8">
                        Join our next group and create your own spiritual memories. Our packages are designed for comfort, devotion, and peace of mind.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button text="Contact Us" padding="10px 14px " bgColor="greeny"/>
                      
                    </div>
                </div>
            </div>
        </>
    )
}