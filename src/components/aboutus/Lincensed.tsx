import Card from "../Card";

export default function ServiceSection() {
  const Services = [
    {
      iconimg: "./greenmedal.svg",
      title: "Licensed Umrah Agent",
      content:
        "Officially recognized by the Ministry of Hajj & Umrah. License #12459.",
    },
    {
      iconimg: "./greenverified.svg",
      title: "Verified Travel Agency",
      content:
        "Checked and verified for financial security, ATOL protected for your safety.",
    },
    {
      iconimg: "./greenworld.svg",
      title: "IATA Accredited",
      content:
        "Meeting international standards for aviation and travel services globally.",
    },
  ];

  return (
    <div className="w-full py-16 lg:py-24 px-4 lg:px-10 bg-[#f7f7f7]" id="services">
      <div className="layout-container flex justify-center">
        <div className="flex flex-col max-w-[1080px] w-full gap-12">
          {/* Heading */}
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-[#131811] text-3xl md:text-4xl font-black">
              Licensed & Verified
            </h2>
            <p className="text-[#6b8961] text-lg max-w-[750px] text-center">
            We are fully accredited to ensure your peace of mind and financial security during your sacred journey.
            </p>
          </div>

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
  );
}
