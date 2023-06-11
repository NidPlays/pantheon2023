import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUsPage() {
    return (
        <>
            <div className="overflow-x-hidden bg-black">
                <Navbar />
                <div className="w-screen h-screen text-2xl text-white bg-black">About Us Page</div>
                <Footer />
            </div>
        </>
    );
}

export default AboutUsPage;
