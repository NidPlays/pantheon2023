

function Navbar() {
  return (
    <nav className="bg-white">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <div className="logo-text md:text-2xl sm:text-base inline-flex justify-start">
        Pantheon
      </div>
            <a href="#" className="border-b-2 border-transparent dark:hover:text-gray-200 hover:border-blue-500 transition-all mx-1.5 sm:mx-6">home</a>
    
            <a href="#" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 transition-all mx-1.5 sm:mx-6">Events</a>
    
            <a href="#" className="custom-line border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 transition-all mx-1.5 sm:mx-6">Gallery</a>
        </div>
    </nav>
  );
}

export default Navbar;
