import Navbar from "../Navbar"
import Banner from "../services/Banner"
import ServiceSection from "../services/ServiceSection"
import TrustedSection from "../services/TrustedSection"
import GallerySection from "../services/GallerySection"
import JourneySection from "../services/JourneySection"
import Footer from "../Footer"
export default function Ourservices(){


    return(
        <>
        <Navbar/>
        <Banner/>
        <ServiceSection />
        <TrustedSection/>
        <GallerySection/>
        <JourneySection/>
        <Footer/>
        </>
    )
}