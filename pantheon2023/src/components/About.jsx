import React from 'react'

function About() {
    return (
        <div className='flex items-center w-full h-screen custom-css-about'>
        <div className="w-2/3 text-justify mx-auto">
            <h1 className="text-white text-center dark:text-white font-bold text-4xl md:text-6xl xl:text-7xl logo-text-abt">Pantheon<span className="text-primary text-[#EACD69]"> 2023</span></h1>
            <h4 className="mt-8 text-white dark:text-gray-300">
                Pantheon is a bi-annual inter college fest organized by RNS Institute of Technology and is the pride and joy of both the students as well as the Cultural Activity Team.
                The word Pantheon refers to the deities of a religion
                collectively and it is safe to say that it Lives up to its name.
                It is our vibrant and captivating cultural fest, a celebration of diversity and creativity! Our fest is an enchanting showcase of various traditions, art forms, and cultural expressions that come together to create an immersive experience for all attendees.
                Many hours go into the planning and organization of the fest but the results make every second worth it. Pantheon includes several events and sees a crowd of over 6000 people every time and has never failed to impress.
            </h4>
            <div className='flex flex-col gap-4 justify-between mt-10 md:flex lg:flex-row'>
                <div className="flex  space-x-2">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="text-white">23 & 24 June</span>
                </div>
                <div className="flex space-x-2">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2 C7.03 2 3 6.03 3 11 C3 16.55 12 22 12 22 C12 22 21 16.55 21 11 C21 6.03 16.97 2 12 2 Z"></path>
                        <circle cx="12" cy="11" r="4"></circle>
                    </svg>
                    <span className="text-white">RNS Institute Of Technology</span>
                </div>
            </div>

        </div>
        </div>

    )
}

export default About
