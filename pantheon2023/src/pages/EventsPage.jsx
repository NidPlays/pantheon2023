import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards"
function EventsPage() {
    return (
        <>
            <div className="overflow-x-hidden bg-black">
                <Navbar />
                <div className="w-screen min-h-screen text-2xl text-white bg-black pb-6"><Cards /></div>
                <Footer />
            </div>
        </>
    );
}

export default EventsPage;
