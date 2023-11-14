import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards"
import Sponsors from "../components/Sponsors";
import Footer2 from "../components/Footer2";
function EventsPage() {
    return (
        <>
            <div className="overflow-x-hidden bg-black">
                <Navbar />
                <div className="w-screen min-h-screen text-2xl text-white bg-black pb-6"><Cards /></div>
                <Sponsors />
                {/* New footer removed old one */}
                <Footer2 backgroundColor="bg-black"/>
            </div>
        </>
    );
}

export default EventsPage;
