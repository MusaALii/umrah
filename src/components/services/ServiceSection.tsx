import Card from "../Card"

export default function ServiceSection() {
    const Services = [
        {
            iconimg: "./greenfile.svg",
            title: "Visa Processing",
            content: "Hassle-free electronic visa issuance for individuals and groups with quick turnaround times.",
            linkname:"learn more",
            arrowimg:"./greenarrow.svg"
        },

        {
            iconimg: "./greenflight.svg",
            title: "Airline Tickets",
            content: "Competitive rates on top airlines (Saudia, Emirates, Qatar) with flexible dates and direct flights.",
            linkname:"Check flights",
            arrowimg:"greenarrow.svg"
        },

        {
            iconimg: "./greenbed.svg",
            title: "Hotel Booking",
            content: "Proximity to Haram with 3-5 star options tailored to your budget. Haram view rooms available.",
            linkname:"view hotels",
            arrowimg:"./greenarrow.svg"
        },


        {
            iconimg: "./greenmosque.svg",
            title: "Ziyarat Tours",
            content: "Guided visits to historical holy sites like Quba Mosque, Mount Uhud, and Cave of Hira with knowledgeable guides..",
            linkname:"Explore tours",
            arrowimg:"./greenarrow.svg"
        },

        {
            iconimg: "./greenbus.svg",
            title: "Transport Services",
            content: "Private cars (GMC, Camry) and luxury buses for comfortable travel between Jeddah, Makkah, and Madina.",
            linkname:"Transport options",
            arrowimg:"./greenarrow.svg"
        },
        {
            iconimg: "./greenstat.svg",
            title: "Special Packages",
            content: "VIP, Group, and Family tailored solutions. We customize every detail for a personalized experience.",
            linkname:"Customize package",
            arrowimg:"./greenarrow.svg"
        },
    ];

    return (
        <div className="w-full py-16 lg:py-24 px-4 lg:px-10 bg-[#f7f7f7]" id="services">
            <div className="container flex justify-center">
                <div className="flex flex-col  full gap-12">
                    <div className="flex flex-col gap-4  ">
                        <h2 className="text-[#131811] dark:text-black text-3xl md:text-4xl font-black leading-tight">
                          Our Core Services  
                        </h2>
                        <p className="text-[#6b8961] dark:text-black text-lg max-w-[750px]">
                            We offer a complete range of services to ensure your pilgrimage is smooth, comfortable, and spiritually fulfilling.
                        </p> 
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Services.map((service, index) => (
                            <Card
                                key={index}
                                title={service.title}
                                content={service.content}
                                iconimg={service.iconimg}
                                linkname={service.linkname}
                                arrowimg={service.arrowimg}

                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
