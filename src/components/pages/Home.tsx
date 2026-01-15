import Navbar from '../Navbar'
import Banner from '../home/Banner'
import Varified from '../home/Verified'
import Services from '../home/Services'
import Packages from '../home/Package'
import Gallery from '../home/Gallery'
import Footer from '../Footer'

export default function Home() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Varified/>
      <Services/>
      <Packages/>
      <Gallery/>
      <Footer/>
    </>
  )
}