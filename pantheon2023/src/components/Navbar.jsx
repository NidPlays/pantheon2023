import Pantheon from "../assets/Pantheon.png"
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav-image">
      <img loading="lazy" src={Pantheon} className="ml-6 relative z-10 h-28 w-28 mr-2" />
      </div>
      <ul className="nav-links ml-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
