import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import Packagesservices from "./components/pages/Packagesservices"
import Spacific from "./components/pages/Spacific"
import Ourservices from "./components/pages/Ourservices"
import AboutusSection from "./components/pages/AboutusSection"
import ContactUs from "./components/pages/ContactUs";
import FaqsSection from "./components/pages/FaqsSection"
import BlogSection from "./components/pages/BlogSection";
import GallerySection from "./components/pages/GallerySection";
import JourneySection from "./components/pages/JourneySection";
import TestimonilasSection from "./components/pages/TestimonialsSection";

function App() {
  return (
    <>
      <Router>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packagesservices />} />
          <Route path="/spacific" element={<Spacific />} />
          <Route path="/services" element={<Ourservices />} />
          <Route path="/about" element={<AboutusSection />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FaqsSection />} />
          <Route path="/blogs" element={<BlogSection />} />
          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/journey" element={<JourneySection />} />
          <Route path="/testimonial" element={<TestimonilasSection />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
