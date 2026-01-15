import Navbar from '../Navbar'
import Banner from "../Testimonials/Banner"
import Trustus from "../Testimonials/Trustus"
import Watch from "../Testimonials/Watch"
import Reviews from "../Testimonials/Reviews"
import FooterCta from "../Testimonials/FooterCta"
import Footer from "../Footer"
export default function TestimonilasSection(){
    return(
        <>
        <Navbar/>
        <Banner/>
        <Trustus/>
        <Watch/>
        <Reviews/>
        <FooterCta/>
        <Footer/>
        </>
    )
}