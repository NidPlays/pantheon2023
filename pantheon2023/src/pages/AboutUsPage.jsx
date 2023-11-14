import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Sponsors from "../components/Sponsors";

function AboutUsPage() {
  return (
    <>
      <div className="overflow-x-hidden bg-[#151515]">
        <Navbar />

        <div className="flex-wrap px-4 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9">
          <div className="flex min-[280px]:flex-col place-items-center justify-between gap-8 lg:flex-row">
            <div className="flex flex-col justify-center w-full lg:w-5/12">
              <h1 className="pb-4 text-3xl font-bold leading-9 text-white lg:text-4xl">
                About <span className="gold-text">RNSIT</span>
              </h1>
              <p className="text-base font-normal leading-6 text-white ">
                RNS Institute of Technology (RNSIT) was founded by the honorable
                Chairman of the Group, Dr. R.N. Shetty in the year 2001. The RN
                Shetty Group has since contributed significantly in various
                fields like education, technology and management. RNSIT was
                established with a desire to provide quality education to
                society, to nourish and advance the best engineering talents in
                the country. RNSIT is accredited by the NBA and ranked ‘A+’ by
                NAAC. With an overwhelming number of recognitions, RNSIT is one
                of the best engineering colleges in Bengaluru and well on its
                way to becoming the best college in Karnataka.
              </p>
            </div>
            <div className="w-full lg:w-8/12">
              <img
                className="w-full"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="A group of People"
              />
            </div>
          </div>

          <div className="flex min-[280px]:flex-col place-items-center justify-between gap-8 pt-20 lg:flex-row">
            <div className="w-full lg:w-8/12">
              <img
                className="w-full"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="A group of People"
              />
            </div>
            <div className="flex flex-col max-[1024px]:-order-1 justify-center w-full lg:w-5/12">
              <h1 className="pb-4 text-3xl font-bold leading-9 text-white lg:text-4xl">
                About <span className="gold-text">Pantheon</span>
              </h1>
              <p className="text-base font-normal leading-6 text-white ">
                Pantheon is a bi-annual inter-college fest organised by RNS
                Institute of Technology that is a source of pride for both
                students and the Cultural Activity Team. The term Pantheon
                refers to the collective deities of a religion, and it is safe
                to say that it lives up to its name. It&apos;s our enthralling
                cultural festival, a celebration of diversity and innovation!
                Our festival is an enticing display of many customs, art forms,
                and cultural expressions that combine to offer an immersive
                experience for all attendees. Many hours are spent preparing and
                organising the festival, but the end result is well worth it.
                Every time, Pantheon draws a crowd of around 6000 people and
                never fails to impress.
              </p>
            </div>
          </div>

          <div className="flex min-[280px]:flex-col place-items-center justify-between gap-8 pt-20 lg:flex-row">
            <div className="flex flex-col justify-center w-full lg:w-5/12">
              <h1 className="pb-4 text-3xl font-bold leading-9 text-white lg:text-4xl">
                About <span className="gold-text">Parichay</span>
              </h1>
              <p className="text-base font-normal leading-6 text-white ">
                Parichay is an intra-college festival held at RNS Institute of
                Technology every other year. Parichay throws all of the
                college&apos;s branches against one other in a tough fight for
                two trophies, The Spirit of Parichay and The Talent of Parichay.
                It proudly hosts various events organised by the Cultural
                Activity Team&apos;s Events committee. The Spirit of Parichay is
                given to the branch with the most participation in all events,
                while the Talent of Parichay is given to the branch that wins
                the most events. During Parichay, a variety of sporting and
                cultural events take place. This festival lasts approximately a
                week and brings together the majority of the kids to demonstrate
                their talents.
              </p>
            </div>
            <div className="w-full lg:w-8/12 ">
              <img
                className="w-full"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="A group of People"
              />
            </div>
          </div>
          <div className="flex min-[280px]:flex-col place-items-center justify-between gap-8 pt-20 lg:flex-row">
            <div className="w-full lg:w-8/12 ">
              <img
                className="w-full"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="A group of People"
              />
            </div>
            <div className="flex flex-col max-[1024px]:-order-3 justify-center w-full lg:w-5/12">
              <h1 className="pb-4 text-3xl font-bold leading-9 text-white lg:text-4xl">
                About <span className="gold-text">CAT</span>
              </h1>
              <p className="text-base font-normal leading-6 text-white ">
                Cultural activities make a campus very vibrant and RNSIT gets
                its energy from various cultural activities. May it be singing,
                dancing, acting, poetry, drawing RNSITians live their life to
                the fullest in these cultural extravaganza. All these activities
                are coordinated through respective clubs such as Synapse and
                Natarang for dance, Dhwani for music, Aura for Fashion,
                Chiranuthana for Kannada to name a few. Enthusiasts can join
                these clubs through proper Auditions and interviews. Students
                will get a great exposure being in these clubs and emerge as
                competent team players.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center place-items-center justify-between gap-8 pt-12 pb-20">
            <div className="justify-center w-full">
              <h1 className="pb-4 text-3xl font-bold leading-9 text-white lg:text-4xl">
                <span className="gold-text">Website by</span>
              </h1>
              <p className="text-base font-normal leading-6 text-white ">
                Nidish G, Phanish S N, Subramanya Rao,
                Shodan Shetty, R Tushar.
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
        <Sponsors />
        <Footer2 />
      </div>
    </>
  );
}

export default AboutUsPage;
