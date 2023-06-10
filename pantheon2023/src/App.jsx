import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
export default function App() {
  return (
    <>
    <div className="bg-black">
    <Navbar />
    <HeroSection />
    <About />
    </div>
    </>
  )
}
