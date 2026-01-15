import Navbar from "../Navbar"
import Banner from "../aboutus/Banner"
import Lincensed from"../aboutus/Lincensed"
import Ourstory from "../aboutus/Ourstory"
import Ourmissions from"../aboutus/Ourmission"
import Certificates from "../aboutus/Certificates"
import FooterCta from "../aboutus/FooterCta"
import Footer from "../Footer"
export default function AboutusSection(){
    return(
        <>
        <Navbar/>
        <Banner/>
        <Lincensed/>
        <Ourstory/>
        <Ourmissions/>
        <Certificates/>
        <FooterCta/>
        <Footer/>
        </>
    )
}