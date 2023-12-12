import Image from "../assets/Pantheon.png";
import Events from ".././assets/events_list.json";
import { MdAppRegistration } from "react-icons/md"
import { BiCategoryAlt } from "react-icons/bi"
import { FaPlaceOfWorship } from "react-icons/fa"
import { BsTrophy } from "react-icons/bs"
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
function Cards({ searchTerm, selectedDay }) {
    const filteredEvents = Events.events.filter((event) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const dayMatches =
            selectedDay === "all" || event.day.toString() === selectedDay
        return (
            dayMatches &&
            (event.event_name.toLowerCase().includes(lowerCaseSearchTerm) ||
                event.common_name.toLowerCase().includes(lowerCaseSearchTerm))
        );
    }
    );
    return (
        <>
            <motion.div layout className="cards">
                <AnimatePresence>
                    {filteredEvents.length === 0 ? (
                        <motion.div layout className="text-white">No events found :)</motion.div>
                    ) : (
                        filteredEvents.
                            map((event) => {
                                return (
                                    <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className="information [ card ]" key={event.id}>
                                        <img
                                            src={`src/assets/event_posters/${event.id}.jpg`}
                                            alt=""
                                            className="mx-auto h-full w-full object-cover"
                                        />
                                        <div className="text-lg p-2">{event.event_name.split("-", 1)[0]}</div>
                                        <div className="text-sm text-gray-50 p-2">
                                            {event.common_name}
                                        </div>
                                        <span className="tag m-1 inline-flex"><BiCategoryAlt size={18} className="mr-1" />{event.category}</span>
                                        {event.prize_amount["1st"] !== "NA" ? (
                                            <span className="tag m-1 inline-flex"><BsTrophy size={18} className="mr-1" />Prize {event.prize_amount["1st"]}</span>
                                        ) : (
                                            <div />
                                        )}
                                        <span className="tag m-1 inline-flex"><MdAppRegistration size={18} className="mr-1" />Registration {event.registration_fee}</span>
                                        <span className="tag m-1 inline-flex"><FaPlaceOfWorship size={18} className="mr-2" />{event.venue}</span>
                                        <div className="grid-container">
                                            <Link to={`/events/${event.id}`} className="button-86 grid-item" role="button">View More</Link>
                                            <Link to={event.registration_link} target="_blank">
                                                <button className="button-86 grid-item" role="button">
                                                    Register
                                                </button></Link>
                                        </div>
                                    </motion.div>
                                )
                            })
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}

export default Cards;
