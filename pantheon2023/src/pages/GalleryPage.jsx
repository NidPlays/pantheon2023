import React from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer2 from "../components/Footer2";
import Logos from "../components/Logos";
import { SEO } from "../components/SEO";
import { useEffect } from "react";

function GalleryPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <>
            <div className="overflow-x-hidden bg-[#151515]">
                <SEO title="Gallery | Pantheon 2023" description="Step into the visual tapestry of RNS Institute of Technology's vibrant journey through our captivating Gallery page. Immerse yourself in a visual feast that captures the essence of Pantheon, our bi-annual inter-college fest. From the mystic moments of Mystic Memoirs events to the energetic displays at Parichay festival, our gallery showcases the diverse talents and cultural expressions that define RNSIT. Explore the captivating visuals of student-led activities, cultural clubs, and the dynamic life on campus. Join us in reliving the enchanting memories created during Pantheon, celebrating the spirit of creativity, diversity, and innovation that pulses through every corner of RNSIT."
                keywords="RNSIT Gallery, Pantheon visuals, Mystic Memoirs moments, Parichay festival highlights, Student activities showcase, Cultural clubs display, Campus life visuals, RNSIT diversity, Creative expressions, Pantheon memories, Bi-annual fest visuals, RNSITians talent, Cultural extravaganza, Campus vibrancy, Mystic Memoirs gallery, Parichay festival gallery, Pantheon fest snapshots, RNSIT events, Cultural diversity showcase, Student-led activities, RNSIT cultural clubs, Bi-annual fest captures, Campus life images." canonicalUrl="/gallery" />
                <Navbar />
                <div className="w-screen min-h-screen text-2xl text-white bg-[#151515] pb-6"><Gallery /></div>
                <Logos />
                <Footer2 />
            </div>
        </>
    );
}

export default GalleryPage;
