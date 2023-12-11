import React from "react";
import Navbar from "../components/Navbar";
import Footer2 from "../components/Footer2";
import Logos from "../components/Logos";
import { SEO } from "../components/SEO";
import { useEffect } from "react";
import { Dev } from "../components/Dev";
import Team from "../components/Team";
import campus from "../assets/abtus/campus.jpg";
import pantheon from "../assets/Pantheon.png";
import parichay from "../assets/abtus/parichayy.webp";
import cat from "../assets/CAT-LOGO-WHITE.png";

function AboutUsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="overflow-x-hidden bg-[#151515]">
        <SEO
          title="About Us | Pantheon 2023"
          description="Discover the vibrant spirit of RNS Institute of Technology (RNSIT) through our About Us page. Founded in 2001 by Dr. R.N. Shetty, RNSIT stands as a beacon of quality education and technological innovation. Dive into the heart of Pantheon, our bi-annual inter-college fest, and explore the enthralling cultural experiences that define our institution. From the captivating mystique of Mystic Memoirs events to the intra-college festival, Parichay, our page narrates the rich tapestry of talent and diversity. Join us in celebrating cultural expressions, art forms, and the dynamic life at RNSIT through various clubs like Synapse, Natarang, Dhwani, Aura, and Chiranuthana. Immerse yourself in the vibrant cultural extravaganza that shapes the campus life of RNSITians."
          keywords="RNSIT, RNS Institute of Technology, Pantheon, Mystic Memoirs events, Parichay festival, Cultural activities, Synapse, Natarang, Dhwani, Aura, Chiranuthana, Diversity, Artistic traditions, Student activities, Bi-annual fest, Campus life, Talent showcase, Cultural expressions, About RNSIT, About Pantheon, About Parichay, Cultural clubs, RNSITians, Campus vibrancy, Technological innovation, Quality education"
          canonicalUrl="/aboutus"
        />
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
                src={campus}
                alt="RNSIT logo"
              />
            </div>
          </div>

          <div className="flex min-[280px]:flex-col place-items-center justify-between gap-8 pt-20 lg:flex-row">
            <div className="w-full lg:w-8/12">
              <img
                className="w-full"
                src={pantheon}
                alt="Pantheon logo"
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
                src={parichay}
                alt="Parichay Logo"
              />
            </div>
          </div>
          <div className="flex min-[280px]:flex-col place-items-center justify-between gap-8 pt-20 lg:flex-row">
            <div className="w-full lg:w-8/12 ">
              <img
                className="w-full"
                src={cat}
                alt="CAT Logo"
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
        <Team />

        <div className="text-center place-items-center justify-between gap-8 pt-12 pb-12">
          <div className="justify-center w-full">
            <h1 className="pb-4 text-3xl font-bold leading-9 text-white lg:text-4xl">
              <span className="gold-text">Website by</span>
            </h1>
            <Dev />
          </div>
        </div>
        <Logos />
        <Footer2 />
      </div>
    </>
  );
}

export default AboutUsPage;
