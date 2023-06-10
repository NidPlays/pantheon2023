import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"
export default function App() {
  return (
    <>
    <div className="bg-black">
    <Navbar />
    <HeroSection />
    <About />
    <Carousel />
    <Contact />
    <Footer />
    </div>
    </>
  )
}
