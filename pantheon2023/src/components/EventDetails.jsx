import React, { useEffect } from 'react'
import NavBar from './Navbar'
import Events from ".././assets/events_list.json";
import brodhav from "../assets/brodhav.jpeg";
import { SEO } from './SEO';
import { Link, useNavigate} from "react-router-dom";

function EventDetails({ id }) {
    let navigate = useNavigate();
    const [event, setEvent] = React.useState({});
    const eventID = parseInt(id);
    useEffect(() => {
        const event = Events.events.find((event) => event.id === eventID);
        setEvent(event);
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <SEO title={`${event.event_name} | Pantheon 2023`} description={`${event.description}`} canonicalUrl={`${event.event_name}`} />
            <div className='overflow-x-hidden bg-[#151515] text-white p-10'>
               <div className='px-5 md:px-10'>
               <button type="button" onClick={() => navigate(-1)} class="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-100">
                    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go back</span>
                </button>
               </div>
                <article className='col-span-9 mt-12 justify-center flex'>
                    <div className=''>
                        <div>
                            <h1 className="text-white font-bold text-4xl md:text-5xl xl:text-6xl">{event.event_name}<span className="text-primary text-[red]">.</span></h1>

                            <div className='text-center'>
                                <div className='flex items-center justify-center mb-2 space-x-2 text-lg'>
                                    <p className='m-0 text-lg mt-4 md:text-xl'>{event.common_name}</p>
                                    {/* <p className='m-0 mt-2'>•</p> */}
                                </div>
                            </div>
                        </div>
                        <div className='my-12 flex flex-col items-center justify-center'>
                            <img
                                className='rounded-xl w-1/2 object-fit'
                                src={brodhav}
                                alt={'article cover'}
                                priority
                            />
                            <div className="mt-8 flex flex-col items-center justify-center md:w-2/3 md:flex-row md:items-center md:justify-between">
                                <p className="flex items-center text-gray-500 mb-4 md:mb-0">
                                    <svg className="text-white mr-2 md:mr-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bi bi-calendar-day" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z" fill="white"></path>
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" fill="white"></path>
                                    </svg>
                                    {event.day === '1' ? '15th' : '16th'}
                                </p>
                                <p className="flex items-center text-gray-500 mb-4 md:mb-0">
                                    <svg className="text-white mr-2 md:mr-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bi bi-clock-fill" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" fill="white"></path>
                                    </svg>
                                    {event.time}
                                </p>
                                <p className="flex items-center text-gray-500">
                                    <svg className="text-white mr-2 md:mr-4 md:w-6 md:h-6 lg:w-8 lg:h-8" width="25" height="25" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="white" d="M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"></path>
                                    </svg>
                                    {event.venue}
                                </p>
                            </div>

                        </div>



                    </div>

                </article >
                <div className="mt-6 lg:p-10 ">
                    <div className="space-y-4">
                        <div className="p-5 md:p-10 ">
                            <h4 className='text-3xl  font-bold font-headings md:text-5xl'>
                                About Event.
                            </h4>

                            <p className='md:px-5 text-justify mt-6 md:mt-8'><span className="font-medium text-gray-100">Category</span>{" "} <span className="gold-text font-bold">{event.category}</span></p>
                            <p className='md:px-5 text-justify mt-6 md:mt-8'>{event.description}</p>
                        </div>

                        <div className="p-5 md:p-10">
                            <h4 className='text-3xl font-bold  font-headings md:text-5xl'>
                                Rules and Regulations</h4>

                            {/*
                                time_limit: '4+1 minutes',
                                participants_per_team: '1',
                                registration_fee: 'Rs.150',
                                prize_amount: { '1st': 'Rs.1000', '2nd': 'Rs.500' }, */}
                            <ul className="list-disc lg:pl-4 mt-5 ">
                                {/* {event.rules.map((item, index) => (
                                    <li className='lg:p-2 text-justify lg:ml-10' key={index}>{item}</li>
                                ))} */}
                                <li className='lg:p-2 text-justify lg:ml-10'><span className="font-medium text-gray-400">Time Limit</span> <span className="text-gray-100 font-semibold">{event.time_limit}</span></li>
                                <li className='lg:p-2 text-justify lg:ml-10'><span className="font-medium text-gray-400">Participants Per Team</span> <span className="text-gray-100 font-semibold">{event.participants_per_team}</span></li>
                                <li className='lg:p-2 text-justify lg:ml-10'><span className="font-medium text-gray-400">Registration Fee</span> <span className="text-gray-100 font-semibold">{event.registration_fee}</span></li>
                            </ul>
                        </div>
                        <div className="p-5 md:p-10">
                            <h4 className='text-3xl font-bold  font-headings md:text-5xl'>
                                Student Coordinators</h4>
                            <div className="space-y-2 mt-5">
                                {event?.coordinator?.map((item, index) => (
                                    <p className='lg:p-2 lg:ml-10 text-justify' key={index}>
                                        {item.name} (<a href={`tel:${item.contact}`}>{item.contact}</a>)
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                   <Link to={event?.registration_link} target='_blank'>
                   <button className='inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                       Register Now
                    </button>
                   </Link>
                </div>
            </div >
        </>

    )
}

export default EventDetails
