import Image from "../assets/Pantheon.png";
import Events from ".././assets/events_list.json";
import { MdAppRegistration } from "react-icons/md"
import { BiCategoryAlt } from "react-icons/bi"
import { FaPlaceOfWorship } from "react-icons/fa"
import { BsTrophy } from "react-icons/bs"
function Cards() {
  return (
    <>
      <div className="cards">
        {Events.events.map((event) => {
          return (
            <article className="information [ card ]" key={event.id}>
              <img
                src={Image}
                alt=""
                className="h-48 relative z-50 inline-flex lg:h-48  xl:h-72 "
              />
              <div className="text-lg p-2">{event.event_name.split("-", 1)[0]}</div>
              <div className="text-sm text-gray-50 p-2">
                {event.common_name}
              </div>
              <span className="tag m-1 inline-flex"><BiCategoryAlt size={18} className="mr-1" />{event.category}</span>
              {event.prize_amount["1st"] !== "NA" ? (
                <span className="tag m-1 inline-flex"><BsTrophy size={18} className="mr-1" />Price {event.prize_amount["1st"]}</span>
              ) : (
                <div />
              )}
              <span className="tag m-1 inline-flex"><MdAppRegistration size={18} className="mr-1" />Registration {event.registration_fee}</span>
              <span className="tag m-1 inline-flex"><FaPlaceOfWorship size={18} className="mr-2" />{event.venue}</span>
              <div className="grid-container">
              <button className="button-86 grid-item" role="button">View More</button>
              <button className="button-86 grid-item" role="button">Register</button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
