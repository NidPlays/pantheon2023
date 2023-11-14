import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"
import Artists from "./components/Artists"
import Sponsors from "./components/Sponsors"
import ScrollToTopButton from "./components/ScrollToTop"
import Footer2 from "./components/Footer2"
export default function App() {
  return (
    <>
    <div className="bg-[#151515] overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <About />
    <Carousel />
    <Artists />
    <Contact />
    <Sponsors />
    <Footer2 />
    {/* <Test /> */}
    {/* <ScrollToTopButton /> */}
    </div>
    </>
  )
}
