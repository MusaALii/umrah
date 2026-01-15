import Card from "../Card"
export default function services() {
    const Services = [
        {
            iconimg: "./greencall.svg",
            title: "Phone Support",
            content: "Speak directly to our agents.",
        },

        {
            iconimg: "./greenflight.svg",
            title: "Email Us",
            content: "CFor general inquiries & quotes.",
          
        },

        {
            iconimg: "./greenbed.svg",
            title: "WhatsApp",
            content: "Instant chat response.",
          
        },
          {
            iconimg: "./greenbed.svg",
            title: "Visit Office",
            content: "Open Mon-Fri, 9am - 6pm",
          
        }

    ];

    return (
        <div className="w-full py-16 lg:py-24 px-4 lg:px-10 bg-[#f7f7f7]" id="services">
            <div className="layout-container flex justify-center">
                <div className="flex flex-col max-w-[1080px] w-full gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
    );
}
