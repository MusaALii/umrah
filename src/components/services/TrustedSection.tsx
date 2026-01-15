export default function TrustedSection (){
    return(
        <>
                <section
            className="w-full flex justify-center py-10 bg-[#f9fbf9] dark:bg-[#1a2c15]/50 border-y border-[#f1f4f0] dark:border-[#2a3825]">
            <div className="layout-content-container flex flex-col max-w-[960px] w-full px-4 md:px-10">
                <h2
                    className="text-[#131811] dark:text-white tracking-tight text-[24px] font-bold leading-tight text-center mb-8">
                    Accredited &amp; Trusted By
                </h2>
                <div
                    className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="h-12 w-auto flex items-center justify-center">
                        <img alt="Ministry of Hajj Logo placeholder" className="h-full w-auto"
                            src="hajj.png" />
                    </div>
                    <div className="h-12 w-auto flex items-center justify-center">
                        <img alt="IATA Accredited Agent Logo placeholder" className="h-full w-auto"
                            src="./iata.png" />
                    </div>
                    <div className="h-12 w-auto flex items-center justify-center">
                        <img alt="Saudi Airlines Partner Logo placeholder" className="h-full w-auto"
                            src="sauidi__airline.png" />
                    </div>
                    <div className="h-12 w-auto flex items-center justify-center">
                        <img alt="Hotel Partner Logo placeholder" className="h-full w-auto"
                            src="hotelpartner.png" />
                    </div>
                    <div className="h-12 w-auto flex items-center justify-center">
                        <img alt="Payment Partner Logo placeholder" className="h-full w-auto"
                            src="payment.png" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}