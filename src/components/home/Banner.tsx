import { Link } from "react-router-dom";
import Button from "../Button";
export default function Banner() {
  return (
    <div className="relative w-full bg-[url('/banner__bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute dark:bg-[#131811]/30 backdrop-blur-sm w-full h-full"></div>
      <div className="relative flex min-h-[600px] flex-col items-center justify-center p-4">
        <div className="relative z-10 flex flex-col gap-6 text-center max-w-[800px]">
          <h1 className="text-white text-4xl md:text-6xl font-black">
            Experience a Spiritual Journey Like No Other
          </h1>
          <h2 className="text-white/90 text-lg md:text-xl">
            Your Trusted Partner for Exclusive Umrah Packages
            </h2>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Button text="Book Now" bgColor="white" padding="10px 14px" />
            <Link to="/contact">
              <Button text="Contact us" padding="10px 14px" href="/contact" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
