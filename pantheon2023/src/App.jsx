import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Contact from "./components/Contact"
import Carousel from "./components/Carousel"
import Artists from "./components/Artists"
import ScrollToTopButton from "./components/ScrollToTop"
import Footer2 from "./components/Footer2"
import Logos from "./components/Logos"
import { SEO } from "./components/SEO"
import { useEffect } from "react"
export default function App() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <>
            <div className="bg-[#151515] overflow-x-hidden">
                <SEO title="Pantheon 2023 | RNSIT" description="Pantheon is a bi-annual inter college fest organized by RNS Institute of Technology and is the pride and joy of both the students as well as the Cultural Activity Team. The word Pantheon refers to the deities of a religion collectively and it is safe to say that it Lives up to its name. It is our vibrant and captivating cultural fest, a celebration of diversity and creativity! Our fest is an enchanting showcase of various traditions, art forms, and cultural expressions that come together to create an immersive experience for all attendees." keywords="Pantheon, RNSIT, 2023, college fest, Bengaluru, Mystic Memoirs, cultural events, diversity celebration, creative showcase, art forms, student activities, bi-annual fest, immersive experiences, traditions, enchanting memories" canonicalUrl="/"
                />
                <Navbar />
                <HeroSection />
                <About />
                <Carousel />
                <Artists />
                <Contact />
                <Logos />
                <Footer2 />
                {/* <ScrollToTopButton /> */}
            </div>
        </>
    )
}
