import React from "react";
import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

function AboutUsPage() {
    return (
        <>
            <div className="overflow-x-hidden bg-black">
                <Navbar />

                <div className="px-4 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9">
                    <div className="flex flex-col justify-between gap-8 lg:flex-row">
                        <div className="flex flex-col justify-center w-full lg:w-5/12">
                            <h1 className="pb-4 text-3xl font-bold leading-9 text-red-600 lg:text-4xl">About RNSIT</h1>
                            <p className="text-base font-normal leading-6 text-white ">
                                RNS Institute of Technology (RNSIT) was founded by the honorable Chairman of the Group, Dr. R.N. Shetty in the year
                                2001. The RN Shetty Group has since contributed significantly in various fields like education, technology and
                                management. RNSIT was established with a desire to provide quality education to society, to nourish and advance the
                                best engineering talents in the country. RNSIT is accredited by the NBA and ranked ‘A+’ by NAAC. With an overwhelming
                                number of recognitions, RNSIT is one of the best engineering colleges in Bengaluru and well on its way to becoming the
                                best college in Karnataka.
                            </p>
                        </div>
                        <div className="w-full lg:w-8/12 ">
                            <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-8 pt-20 lg:flex-row">
                        <div className="flex flex-col justify-center w-full lg:w-5/12">
                            <div className="w-full lg:w-8/12 ">
                                <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                            </div>
                            <h1 className="pb-4 text-3xl font-bold leading-9 text-red-600 lg:text-4xl">About Pantheon</h1>
                            <p className="text-base font-normal leading-6 text-white ">
                                Pantheon is a bi-annual inter-college fest organised by RNS Institute of Technology that is a source of pride for both
                                students and the Cultural Activity Team. The term Pantheon refers to the collective deities of a religion, and it is
                                safe to say that it lives up to its name. It&apos;s our enthralling cultural festival, a celebration of diversity and
                                innovation! Our festival is an enticing display of many customs, art forms, and cultural expressions that combine to
                                offer an immersive experience for all attendees. Many hours are spent preparing and organising the festival, but the
                                end result is well worth it. Every time, Pantheon draws a crowd of around 6000 people and never fails to impress.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-8 pt-20 lg:flex-row">
                        <div className="flex flex-col justify-center w-full lg:w-5/12">
                            <h1 className="pb-4 text-3xl font-bold leading-9 text-red-600 lg:text-4xl">About Parichay</h1>
                            <p className="text-base font-normal leading-6 text-white ">
                                Parichay is an intra-college festival held at RNS Institute of Technology every other year. Parichay throws all of the
                                college&apos;s branches against one other in a tough fight for two trophies, The Spirit of Parichay and The Talent of
                                Parichay. It proudly hosts various events organised by the Cultural Activity Team&apos;s Events committee. The Spirit
                                of Parichay is given to the branch with the most participation in all events, while the Talent of Parichay is given to
                                the branch that wins the most events. During Parichay, a variety of sporting and cultural events take place. This
                                festival lasts approximately a week and brings together the majority of the kids to demonstrate their talents.
                            </p>
                        </div>
                        <div className="w-full lg:w-8/12 ">
                            <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-8 pt-20 lg:flex-row">
                        <div className="flex flex-col justify-center w-full lg:w-5/12">
                            <div className="w-full lg:w-8/12 ">
                                <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                            </div>
                            <h1 className="pb-4 text-3xl font-bold leading-9 text-red-600 lg:text-4xl">About CAT</h1>
                            <p className="text-base font-normal leading-6 text-white ">
                                Pantheon is a bi-annual inter-college fest organised by RNS Institute of Technology that is a source of pride for both
                                students and the Cultural Activity Team. The term Pantheon refers to the collective deities of a religion, and it is
                                safe to say that it lives up to its name. It&apos;s our enthralling cultural festival, a celebration of diversity and
                                innovation! Our festival is an enticing display of many customs, art forms, and cultural expressions that combine to
                                offer an immersive experience for all attendees. Many hours are spent preparing and organising the festival, but the
                                end result is well worth it. Every time, Pantheon draws a crowd of around 6000 people and never fails to impress.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-8 pt-12 pb-20 lg:flex-row">
                        <div className="flex flex-col justify-center w-full lg:w-5/12">
                            <h1 className="pb-4 text-3xl font-bold leading-9 text-red-600 lg:text-4xl">Website Design By</h1>
                            <p className="text-base font-normal leading-6 text-white ">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                                layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter
                                confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and
                                her liberties inviolate; and we will that it be thus observed; which is apparent from
                            </p>
                        </div>
                        {/* <div className="w-full lg:w-8/12 lg:pt-8">
                            <div className="grid grid-cols-1 rounded-md shadow-lg md:grid-cols-4 sm:grid-cols-2 lg:gap-4">
                                <div className="flex flex-col items-center justify-center p-4 pb-6">
                                    <img className="hidden md:block" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                                    <img className="block md:hidden" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                                    <p className="mt-4 text-xl font-medium leading-5 text-gray-800">Alexa</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 pb-6">
                                    <img className="hidden md:block" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                                    <img className="block md:hidden" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                                    <p className="mt-4 text-xl font-medium leading-5 text-gray-800">Olivia</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 pb-6">
                                    <img className="hidden md:block" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                                    <img className="block md:hidden" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                                    <p className="mt-4 text-xl font-medium leading-5 text-gray-800">Liam</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 pb-6">
                                    <img className="hidden md:block" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                                    <img className="block md:hidden" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                                    <p className="mt-4 text-xl font-medium leading-5 text-gray-800">Elijah</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <Sponsors />
                <Footer />
            </div>
        </>
    );
}

export default AboutUsPage;
