export default function Faqs(){
    return(
        <>
             <section className="bg-[#ebebeb]  py-16 px-4 sm:px-10">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8 text-[#131811] ">Frequently Asked
                    Questions</h2>
                <div className="space-y-4">
                    <details
                        className="group bg-white dark:bg-[#ffffff] rounded-xl border border-[#dee6db] dark:border-[#d6d7d5] overflow-hidden">
                        <summary
                            className="flex cursor-pointer list-none items-center justify-between p-5 font-medium text-[#131811] ">
                            <span>How quickly do you respond to inquiries?</span>
                            <span className="transition group-open:rotate-180 material-symbols-outlined"><img src="./direction.svg" alt="" className="w-4.5 h-4.5 rotate-90" /></span>
                        </summary>
                        <div className="px-5 pb-5 pt-0 text-black text-sm leading-relaxed">
                            We aim to respond to all emails and form submissions within 24 hours. For urgent matters,
                            please use our WhatsApp chat or call our support line.
                        </div>
                    </details>
                    <details
                        className="group bg-white dark:bg-[#ffffff] rounded-xl border border-[#dee6db] dark:border-[#d6d7d5] overflow-hidden">
                        <summary
                            className="flex cursor-pointer list-none items-center justify-between p-5 font-medium text-[#131811] ">
                            <span>Can I visit your office without an appointment?</span>
                            <span className="transition group-open:rotate-180 material-symbols-outlined"><img src="./direction.svg" alt="" className="w-4.5 h-4.5 rotate-90" /></span>
                        </summary>
                        <div className="px-5 pb-5 pt-0 text-black text-sm leading-relaxed">
                            Yes, walk-ins are welcome during our regular office hours. However, scheduling an
                            appointment ensures that a dedicated agent is available to discuss your specific needs.
                        </div>
                    </details>
                    <details
                        className="group bg-white dark:bg-[#ffffff] rounded-xl border border-[#dee6db] dark:border-[#d6d7d5] overflow-hidden">
                        <summary
                            className="flex cursor-pointer list-none items-center justify-between p-5 font-medium text-[#131811]">
                            <span>Do you offer virtual consultations?</span>
                            <span className="transition group-open:rotate-180 material-symbols-outlined"><img src="./direction.svg" alt="" className="w-4.5 h-4.5 rotate-90" /></span>
                        </summary>
                        <div className="px-5 pb-5 pt-0 text-black text-sm leading-relaxed">
                            Absolutely. We can arrange a video call via Zoom or WhatsApp to walk you through our
                            packages and answer any questions you may have.
                        </div>
                    </details>
                </div>
            </div>
        </section>
        
        </>
    )
}