import Card from "../Card";
export default function Trustus() {
    const Services = [
        {
            iconimg: "./greenmedal.svg",
            title: "Verified Reviews",
            content:
                "We display real feedback from confirmed travelers who have completed their Umrah with us.",
        },
        {
            iconimg: "./greenverified.svg",
            title: "Spiritual Guidance",
            content:
                "Our packages are guided by experienced scholars ensuring your rites are performed correctly.",
        },
        {
            iconimg: "./greenworld.svg",
            title: "Seamless Logistics",
            content:
                "From 5-star hotels to private transport, we handle every detail so you can focus on praye",
        },
    ];
    return (
        <>
            <div className="px-5 py-15 bg-[#f7f7f7]" id="services">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="flex flex-col gap-3 max-w-[720px]">
                            <h2 className="text-[#131811]  text-3xl font-bold leading-tight">
                                Why Pilgrims Trust Us
                            </h2>
                            <p className="text-gray-600 dark:text-gray-900 text-lg">Our commitment to service ensures your focus remains on worship.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#131811] dark:text-black">4.9</span>
                            <div className="flex text-primary">
                                <span className="material-symbols-outlined fill-current"><img src="./stars.svg" alt="" /></span>

                            </div>
                            <span className="text-sm text-gray-500 underline decoration-gray-300 underline-offset-4">500+ Reviews</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 mt-15">
                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {Services.map((service, index) => (
                                <Card
                                    key={index}
                                    title={service.title}
                                    content={service.content}
                                    iconimg={service.iconimg}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}