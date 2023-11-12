import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import EventDetails from "../components/EventDetails";
import { useParams } from "react-router-dom";


function EventDetailsPage() {
    const { id } = useParams();
    return (
        <>
            <div className="overflow-x-hidden bg-black">
                <Navbar />
                <div className="w-screen min-h-screen text-2xl text-white bg-black pb-6"><EventDetails id={id} /></div>
                {/* Hidden  */}
                {/* <Sponsors /> */}
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default EventDetailsPage;
