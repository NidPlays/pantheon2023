

function Navbar() {
  return (
    <nav className="relative bg-transparent backdrop-blur-sm top-0 z-50">
        <div className="container flex items-center justify-center p-3 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <div className="logo-text inline-flex justify-start">
        Pantheon
      </div>
            <a href="#" className="custom-css-nav-text text-white border-b-2 border-transparent hover:border-blue-500 transition-all mx-1.5 sm:mx-6">home</a>
    
            <a href="#" className="custom-css-nav-text text-white border-b-2 border-transparent hover:border-blue-500 transition-all mx-1.5 sm:mx-6">Events</a>
    
            <a href="#" className="custom-css-nav-text text-white custom-line border-b-2 border-transparent hover:border-blue-500 transition-all mx-1.5 sm:mx-6">Gallery</a>
        </div>
    </nav>
  );
}

export default Navbar;
