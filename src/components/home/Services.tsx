import Card from "../Card"

export default function Services() {
  const Services = [
    { iconimg: "./label.svg",
      title: "Affordable Rates",
      content: "Competitive pricing..." },

    { iconimg: "./bed.svg",
      title: "5-Star Hotels",
      content: "Luxury accommodation..." },

    { iconimg: "./compass.svg",
       title: "Guided Tours", 
       content:"Experienced guides..." },
  ];

  return (
    <div className="w-full py-16 lg:py-24 px-4 lg:px-10 bg-[#f7f7f7]" id="services">
      <div className="layout-container flex justify-center">
        <div className="flex flex-col max-w-[1080px] w-full gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-[#1e2e1a] font-bold uppercase tracking-wider text-sm">Our Services</span>
            <h2 className="text-[#131811] dark:text-black text-3xl md:text-4xl font-black leading-tight">
              Why Choose Umrah Travel?
            </h2>
            <p className="text-[#6b8961] dark:text-gray-400 text-lg max-w-[600px]">
              We provide the most reliable, comfortable, and spiritually rewarding journeys with complete peace of mind.
            </p>
          </div>

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
