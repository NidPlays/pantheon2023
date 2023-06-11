import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const goToTop = () => {
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        window.scroll(0, 0);
      }
    };

  return (
    <>
      {isVisible && (
        <button
          id="to-top-button"
          onClick={goToTop}
          title="Go To Top"
          className="fixed overflow-x-hidden z-[9999] bottom-8 right-8 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-red-600 hover:bg-red-700 text-white text-lg font-semibold transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
          </svg>
          <span className="sr-only">Go to top</span>
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
