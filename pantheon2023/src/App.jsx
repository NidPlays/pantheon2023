import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Contact from "./components/Contact"
export default function App() {
  return (
    <>
    <div className="bg-black">
    <Navbar />
    <HeroSection />
    <About />
    <Contact />
    </div>
    </>
  )
}
