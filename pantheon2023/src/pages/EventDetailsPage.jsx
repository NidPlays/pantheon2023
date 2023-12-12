import React from "react";
import Navbar from "../components/Navbar";
import EventDetails from "../components/EventDetails";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function EventDetailsPage() {
    const { id } = useParams();
    return (
        <>
            <div className="overflow-x-hidden bg-[#151515]">
                <Navbar />
                <div className="w-screen min-h-screen text-2xl text-white bg-[#151515] pb-6"><EventDetails id={id} /></div>
                {/* Hidden  */}
                {/* <Sponsors /> */}
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default EventDetailsPage;
