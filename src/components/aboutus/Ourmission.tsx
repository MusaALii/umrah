import Card from "../Card";

export default function ServiceSection() {
  const Services = [
    {
      iconimg: "./handshake.svg",
      title: "Trust (Amanah)",
      content:
        "Upholding the highest standards of integrity in every transaction and promise.",
    },
    {
      iconimg: "./sofa.svg",
      title: "Comfort",
      content:
        "Providing premium accommodation and transport for a restful journey.",
    },
    {
      iconimg: "./compass.svg",
      title: "Guidance",
      content:
        "Expert religious guides to lead you through every step of the rituals.",
    },
    {
      iconimg: "./agent.svg",
      title: "Guest Care",
      content:
        "Dedicated support team available 24/7 for your needs in Makkah and Madinah.",
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
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
