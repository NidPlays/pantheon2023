import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";

function EventsPage() {
    return (
        <>
            <div className="overflow-x-hidden bg-black">
                <Navbar />
                <div className="w-screen h-screen text-2xl text-white bg-black">Events Page</div>
                <Sponsors />
                <Footer />
            </div>
        </>
    );
}

export default EventsPage;
