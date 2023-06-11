import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GalleryPage() {
    return (
        <>
            <div className="overflow-x-hidden bg-black">
                <Navbar />
                <div className="w-screen h-screen text-2xl text-white bg-black">Gallery Page</div>
                <Footer />
            </div>
        </>
    );
}

export default GalleryPage;