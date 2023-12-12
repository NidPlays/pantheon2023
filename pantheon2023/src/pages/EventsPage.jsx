import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards"
import Footer2 from "../components/Footer2";
import Logos from "../components/Logos";
import { SEO } from "../components/SEO";
import InputPulseBorder from "../components/InputPulseBorder";
function EventsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDay, setSelectedDay] = useState("all");

    const handleDayChange = (day) => {
        setSelectedDay(day);
    };
    return (
        <>
            <div className="overflow-x-hidden bg-black">
                <SEO title="Events | Pantheon 2023" description="Embark on a journey through the enchanting realms of Mystic Memoirs at Pantheon, the bi-annual cultural fest hosted by RNS Institute of Technology. Explore a tapestry of captivating events, each a unique chapter in our vibrant celebration of diversity and creativity. Join us for an immersive experience where traditions, art forms, and cultural expressions converge, creating unforgettable memories at every event" keywords="Mystic Memoirs events, Cultural fest RNSIT, Diversity and creativity showcase, Artistic traditions celebration, Pantheon fest RNS Institute of Technology, Enchanting cultural expressions, Immersive event experiences, Student-led fest activities, Bi-annual fest highlights, Creative showcase at Pantheon" canonicalUrl="/events"
                />
                <Navbar />

                <div className="w-screen min-h-screen text-2xl text-white bg-black pb-6">
                    <div className="w-screen flex my-[10vh] items-center justify-center">
                        <InputPulseBorder value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for an event" />
                    </div>

                    {/* Tabs for filtering events based on the day */}
                    <div className="flex justify-center space-x-4">
                        <button
                            className={`py-2 px-4 inline-flex items-center gap-x-2 text-base font-semibold  rounded-full border-[#1F2937] border-2 text-yellow-600`}
                            style={selectedDay === "all" ? { backgroundColor: "#ffa720", color: "#1F2937" } : {}}
                            onClick={() => handleDayChange("all")}
                        >
                            All Events
                        </button>
                        <button
                            className={`py-2 px-4 inline-flex items-center gap-x-2 text-base font-semibold  rounded-full border-[#1F2937] border-2 text-yellow-600`}
                            style={selectedDay === "1" ? { backgroundColor: "#ffa720", color: "#1F2937" } : {}}
                            onClick={() => handleDayChange("1")}
                        >
                            Day 1
                        </button>
                        <button
                            className={`py-2 px-4 inline-flex items-center gap-x-2 text-base font-semibold  rounded-full border-[#1F2937] border-2 text-yellow-600`}
                            onClick={() => handleDayChange("2")}
                            style={selectedDay === "2" ? { backgroundColor: "#ffa720", color: "#1F2937" } : {}}
                        >
                            Day 2
                        </button>
                    </div>

                    {/* Exp ends */}
                    <Cards searchTerm={searchTerm} selectedDay={selectedDay} />
                </div>
                <Logos backgroundColor="bg-black" />
                {/* New footer removed old one */}
                <Footer2 backgroundColor="bg-black" />
            </div>
        </>
    );
}

export default EventsPage;
