import pdf from "../assets/eventsBrochure.pdf";
function About() {
  return (
    <div className="flex items-center w-full h-screen custom-css-about ">
      {/* Use this for Shadow */}
      <div className="custom-shadow" />
      <div className="w-2/3 text-justify mx-auto">
        <h1 className="text-white text-center dark:text-white font-bold text-4xl md:text-6xl xl:text-7xl logo-text-abt">
          Pantheon<span className="text-primary bg-custom-gradient"> 2023</span>
        </h1>
        <h4 className="mt-8 text-white dark:text-gray-300">
          Pantheon is a bi-annual inter college fest organized by RNS Institute
          of Technology and is the pride and joy of both the students as well as
          the Cultural Activity Team. The word Pantheon refers to the deities of
          a religion collectively and it is safe to say that it Lives up to its
          name. It is our vibrant and captivating cultural fest, a celebration
          of diversity and creativity! Our fest is an enchanting showcase of
          various traditions, art forms, and cultural expressions that come
          together to create an immersive experience for all attendees. Many
          hours go into the planning and organization of the fest but the
          results make every second worth it. Pantheon includes several events
          and sees a crowd of over 6000 people every time and has never failed
          to impress.
        </h4>
        <div className="flex flex-col gap-4 justify-between mt-10 md:flex lg:flex-row">
          <div className="flex  space-x-2">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span className="text-white">15 & 16 December</span>
          </div>
          <div className="flex space-x-2">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2 C7.03 2 3 6.03 3 11 C3 16.55 12 22 12 22 C12 22 21 16.55 21 11 C21 6.03 16.97 2 12 2 Z"></path>
              <circle cx="12" cy="11" r="4"></circle>
            </svg>
            <span className="text-white">RNS Institute Of Technology</span>
          </div>
        </div>
        {/* Buttons */}

        <div className="flex flex-col items-center gap-2 w-full lg:flex-row mt-8 mb-36 md:mb-4 lg:mb-4">
          {/* 1st section */}
          <div className="w-1/2 flex-col md:w-1/3 lg:w-1/3">
            <h1 className="mx-auto  max-w-4xl font-display text-3xl text-center font-medium tracking-tight text-slate-100 sm:text-4xl">
              Event{" "}
              <span className="relative whitespace-nowrap bg-custom-gradient">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative bg-custom-gradient">Brochure</span>
              </span>{" "}
            </h1>
            <div className="text-center mt-4">
              <button className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <a href={pdf} download>
                  Click Me
                </a>
              </button>
            </div>
          </div>

          {/* 1st section ends*/}

          {/* 2nd section */}
          <div className="w-1/2 flex-col md:w-1/3 lg:w-1/3">
            <h1 className="mx-auto  max-w-4xl font-display text-3xl text-center font-medium tracking-tight text-slate-100 sm:text-4xl">
              Buy{" "}
              <span className="relative whitespace-nowrap bg-custom-gradient">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative bg-custom-gradient">Tickets!</span>
              </span>{" "}
            </h1>
            <div className="text-center mt-4">
              <button className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <a href="https://forms.gle/iH3YkyWyo2D4Sqwh7">Click Me</a>
              </button>
            </div>
          </div>

          {/* second section ends */}

          {/* Last section */}
          <div className="w-1/2 flex-col md:w-1/3 lg:w-1/3">
            <h1 className="mx-auto  max-w-4xl font-display text-3xl text-center font-medium tracking-tight text-slate-100 sm:text-4xl">
              Register{" "}
              <span className="relative whitespace-nowrap bg-custom-gradient">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative bg-custom-gradient">Events</span>
              </span>{" "}
            </h1>
            <div className="text-center mt-4">
              <button className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <a href="/events">Click Me</a>
              </button>
            </div>
          </div>

          {/* Last Section ends */}
        </div>
      </div>
    </div>
  );
}

export default About;
