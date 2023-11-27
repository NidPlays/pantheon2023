import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards"
import Footer2 from "../components/Footer2";
import Logos from "../components/Logos";
import { SEO } from "../components/SEO";
function EventsPage() {
    return (
        <>
            <div className="overflow-x-hidden bg-black">
                <SEO title="Events | Pantheon 2023" description="Embark on a journey through the enchanting realms of Mystic Memoirs at Pantheon, the bi-annual cultural fest hosted by RNS Institute of Technology. Explore a tapestry of captivating events, each a unique chapter in our vibrant celebration of diversity and creativity. Join us for an immersive experience where traditions, art forms, and cultural expressions converge, creating unforgettable memories at every event" keywords="Mystic Memoirs events, Cultural fest RNSIT, Diversity and creativity showcase, Artistic traditions celebration, Pantheon fest RNS Institute of Technology, Enchanting cultural expressions, Immersive event experiences, Student-led fest activities, Bi-annual fest highlights, Creative showcase at Pantheon" canonicalUrl="/events"
                />
                <Navbar />
                <div className="w-screen min-h-screen text-2xl text-white bg-black pb-6"><Cards /></div>
                <Logos backgroundColor="bg-black" />
                {/* New footer removed old one */}
                <Footer2 backgroundColor="bg-black" />
            </div>
        </>
    );
}

export default EventsPage;
