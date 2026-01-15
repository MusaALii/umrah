import Button from "../Button"

export default function FooterCta() {
    return (
        <>
            <div className="w-full bg-slate-900  py-16 px-4">
                <div className="max-w-[960px] mx-auto text-center flex flex-col gap-6 items-center">
                    <h2 className="text-white text-3xl md:text-4xl font-bold">Ready to start your spiritual journey?</h2>
                    <p className="text-slate-400 max-w-lg">
                        Explore our upcoming Umrah packages or contact us for a customized itinerary suited to your needs.
                    </p>
                    <div className="flex gap-4 mt-4">
                      <Button text="View Packages" href="/packages" bgColor="greeny" padding="10px 14px"/>
                       <Button text="contact us" href="/contact" padding="10px 14px"/>
                        
                    </div>
                </div>
            </div>
        </>
    )
}