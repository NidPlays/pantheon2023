import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import Gallery from "../components/Gallery";

function GalleryPage() {
    return (
        <>
            <div className="overflow-x-hidden bg-[#151515]">
                <Navbar />
                <div className="w-screen min-h-screen text-2xl text-white bg-[#151515] pb-6"><Gallery /></div>
                <Sponsors />
                <Footer />
            </div>
        </>
    );
}

export default GalleryPage;
