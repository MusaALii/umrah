import Button from "../Button";

export default function FooterCta() {
    return <>
    <div className="container">
        <div className=" bg-[url('./shadow.png') ] bg-center bg-no-repeat p-4 mt-8 mb-8 ">
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#131811]  rounded-2xl p-8 gap-6 shadow-xl relative overflow-hidden">  
                <div className="absolute inset-0 bg-gradient-to-r from-[#131811] to-transparent pointer-events-none"></div>
                <div className="flex flex-col gap-2 relative z-10 text-center md:text-left">
                    <h3 className="text-white text-2xl font-bold">Still have questions?</h3>
                    <p className="text-gray-300 text-sm max-w-md">Our expert team is available 24/7 to guide you through every step of your spiritual journey.</p>
                </div>
                  
                <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
                  <Button text=" Contact Support" href="/contact " iconSrc="./agent.svg" padding=" 10px 14px" />
                   <Button text=" whatsapp Us" href="https://wa.me/923001234567" iconSrc="./chat.svg" padding=" 10px 14px" />
                   
                </div>
          </div>
        </div>
        </div>
    </>
}