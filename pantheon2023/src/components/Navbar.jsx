
import {MdOutlineHouse, MdEmojiEvents} from 'react-icons/md'
import { GrGallery } from 'react-icons/gr'
import { Link as a } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-text">
        Pantheon
      </div>
      <ul className="nav-links ml-5">
        <li>
          <a className='inline-flex'><MdOutlineHouse size={22} className='icon-margin' />&nbsp;Home</a>
        </li>
        <li>
        <a className='inline-flex'><MdEmojiEvents size={22} className='icon-margin' />&nbsp;Events</a>
        </li>
        <li>
        <a  className='inline-flex'><GrGallery size={22} className='icon-margin' />&nbsp;Gallery</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
