import React from 'react'
import hanu from "../assets/hanu.jpg"
import shivu from "../assets/shivu.jpg"

function Artists() {
    return (
        <div className="mx-auto container px-6 py-12">
        <div className="flex flex-col justify-center items-center w-full">
            <h1 className="font-bold text-2xl lg:text-4xl  xl:text-6xl leading-normal tracking-wide text-gray-100 text-center">Our Artists</h1>
            <p className="lg:text-2xl font-normal tracking-tightt lg:leading-9 py-3 lg:w-3/5 text-gray-100 text-center f-f-l">Dive into our projects from small businesses to Enterprise solutions. Record of delivering</p>
        </div>
        <div className="mt-5 lg:mt-24">
            <div className="flex lg:flex-row flex-col items-center lg:justify-between pb-14">
                <div className="relative flex mb-5 lg:mb-0 w-1/2">
                    <div className>
                        <div className="hidden lg:block absolute top-0 z-0">
                            <svg className xmlns width={403} height={527} viewBox="0 0 403 527" fill="none">
                                <rect x="-1.61167" y="1.37931" width={362} height={497} transform="matrix(-0.996996 -0.077453 -0.077453 0.996996 399.607 28.1496)" stroke="#E97451" strokeWidth={3} />
                            </svg>
                        </div>
                    </div>
                    <div className="z-10 ml-3 mt-4 lg:ml-4 lg:mt-4 hidden lg:block">
                        <img className="w-full" src={hanu} alt />
                    </div>
                    <div className="w-full block lg:hidden">
                        <img className="w-full" src={hanu} alt />
                    </div>
                </div>
                <div className="flex items-center lg:w-1/2">
                    <div className="hidden lg:block lg:pr-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width={151} height={4} viewBox="0 0 151 4" fill="none">
                            <line x1="0.75" y1="1.63696" x2="150.75" y2="1.63696" stroke="#E97451" strokeWidth={3} />
                        </svg>
                    </div>
                    <div className="lg:pt-0 lg:pt-5">
                        <div className="font-normal py-4 text-center lg:text-left f-f-d-s text-gray-200 lg:text-3xl  xl:text-5xl text-2xl">HanuMankind</div>
                        <div className="py-3 xl:text-2xl text-base font-normal text-center lg:text-left xl:leading-9 text-gray-100 f-f-l">Hanumankind is the lyrical rap identity donned by Sooraj Cherukat who’s made a splash of a debut not too long ago. With the debut festival performance at NH7 coinciding with his first release from his debut EP 'Kalari' set the stage for cementing his position as an undeniable force in the space of up and coming independent artists in the subcontinent.</div>
                        <div className="flex lg:block justify-center w-full">
                            <a target='_blank' href="https://www.thewildcity.com/artists/17622-hanumankind">
                                <button className="border-b-2 border-red-500 pt-8 lg:text-2xl text-base focus:outline-none font-bold text-white f-f-l">View Project</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col items-center lg:justify-between py-8">
                <div className="relative lg:hidden flex mb-5 lg:mb-0 flex justify-center pb-8 w-1/2">
                    <img className src={shivu} alt />
                </div>
                <div className="flex items-center md:mt-4 lg:mt-0 lg:w-1/2">
                    <div className="lg:pt-5 lg:pt-0">
                        <div className="font-normal py-4 text-center lg:text-left f-f-d-s text-gray-200 lg:text-3xl  xl:text-5xl text-2xl">Shiva Manvi</div>
                        <div className="py-3 xl:text-2xl text-base font-normal text-center lg:text-left xl:leading-9 text-gray-100 f-f-l">Shiva Manvi is a wedding DJ headquartered in Bangalore's South Bangalore neighborhood with an experience of more than 5 years. If you want to entertain your guests, it is a popular choice for giving DJ services. While you proceed with your wedding procedures and ceremonies, music will keep your guests entertained.</div>
                        <div className="flex lg:block justify-center w-full">
                            <a href="https://shivamanvi.com" target='_blank'>
                                <button className="border-b-2 border-red-500 pt-8 lg:text-2xl text-base focus:outline-none font-bold text-white f-f-l">View Project</button>
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:block pl-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width={151} height={4} viewBox="0 0 151 4" fill="none">
                            <line x1="0.75" y1="1.63696" x2="150.75" y2="1.63696" stroke="#E97451" strokeWidth={3} />
                        </svg>
                    </div>
                </div>
                {/* <div className="relative hidden lg:flex justify-end w-1/2">
                    <div className="z-10 mt-4 ml-4">
                        <img className src="https://i.ibb.co/L6fNj5M/2.png" alt />
                    </div>
                </div> */}

                {/* New code */}
                <div className="relative flex mb-5 lg:mb-0 w-1/2 justify-end">
                    <div className>
                        <div className="hidden lg:block absolute top-0 z-0">
                            <svg className xmlns width={403} height={527} viewBox="0 0 403 527" fill="none">
                                <rect x="-1.61167" y="1.37931" width={362} height={497} transform="matrix(-0.996996 -0.077453 -0.077453 0.996996 399.607 28.1496)" stroke="#E97451" strokeWidth={3} />
                            </svg>
                        </div>
                    </div>
                    <div className="z-10 ml-3 mt-4 lg:ml-4 lg:mt-4 hidden lg:block">
                        <img className="w-full" src={shivu} alt />
                    </div>
                    {/* <div className="w-full block lg:hidden">
                        <img className="w-full" src="https://i.ibb.co/nBpjXrT/1.png" alt />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Artists
