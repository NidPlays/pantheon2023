import Navbar from "../components/Navbar";
import React from "react";
import Footer2 from "../components/Footer2";
import Logos from "../components/Logos";

const EventSchedulePage = () => {
  return (
    <div>
      <main className=" bg-[#151515] text-white p-8 max-w-7xl mx-auto">
        <Navbar />
        <style>{"body { background-color: #151515; }"}</style>
        <h1 className="font-poppins text-4xl mb-8 px-4 max-w-7xl md:px-8">Schedule</h1>

        {/* First Section */}
        <section className="h-auto mb-8 px-4 max-w-7xl md:px-8">
          <h2 className="text-amber-600 font-poppins font-semibold text-2xl">
            15 December
          </h2>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">Saraswathi</h3>
              <h2 className="font-poppins text-lg">MBA Seminar</h2>
              <p className="text-gray-300">11:00 AM - 12:30 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Mythological Reincarnation
              </h3>
              <h2 className="font-poppins text-lg">Mech Gallery</h2>
              <p className="text-gray-300">12:00 PM - 2:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Kronos’ Time Trials
              </h3>
              <h2 className="font-poppins text-lg">Mech Quadrangle</h2>
              <p className="text-gray-300">2:00 PM - 5:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Celestial Contrast
              </h3>
              <h2 className="font-poppins text-lg">Mech Classroom</h2>
              <p className="text-gray-300">12:00 PM - 1:30 PM</p>
              {/*<img src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg" alt="Black and white photo of a lake" className="w-full rounded-md" />*/}
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Hayagreeva’s Verdict
              </h3>
              <h2 className="font-poppins text-lg">EC Hi-Tech Lab</h2>

              <p className="text-gray-300">3:00 PM - 5:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Epic Conquest
              </h3>
              <h2 className="font-poppins text-lg">Basket Ball Court</h2>

              <p className="text-gray-300">12:00 PM - 4:30 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Suicide Chess Saga
              </h3>
              <h2 className="font-poppins text-lg">Admin Block Classes</h2>

              <p className="text-gray-300">3:00 PM - 5:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Battle of Titans
              </h3>
              <h2 className="font-poppins text-lg">EC Hi-Tech Hall</h2>

              <p className="text-gray-300">12:00 PM - 2:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">Mono Act</h3>
              <h2 className="font-poppins text-lg">MBA Seminar</h2>

              <p className="text-gray-300">1:00 PM - 2:30 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Classical Solo Music
              </h3>
              <h2 className="font-poppins text-lg">MBA Seminar</h2>

              <p className="text-gray-300">12:00 PM - 2:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Newspaper Vogue
              </h3>
              <h2 className="font-poppins text-lg">Mech Classroom</h2>

              <p className="text-gray-300">2:00 PM - 4:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Fitness Witness
              </h3>
              <h2 className="font-poppins text-lg">Basket Ball Court</h2>

              <p className="text-gray-300">2:00 PM - 4:30 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Fashion Show
              </h3>
              <h2 className="font-poppins text-lg">Main Stage</h2>

              <p className="text-gray-300">4:00 PM - 6:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Reels Featuring Pantheon
              </h3>
              <h2 className="font-poppins text-lg">Gallery</h2>

              <p className="text-gray-300">11 AM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Anime Quiz{" "}
              </h3>
              <h2 className="font-poppins text-lg">CSE Edusat Hall</h2>

              <p className="text-gray-300">2:30 PM - 4:30 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Photography
              </h3>
              <h2 className="font-poppins text-lg">Gallery</h2>

              <p className="text-gray-300">10:00 AM - 11:00 AM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Group Dance
              </h3>
              <h2 className="font-poppins text-lg">Main Stage</h2>

              <p className="text-gray-300">2:00 PM - 4:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Western Dance Solo
              </h3>
              <h2 className="font-poppins text-lg">Main Stage</h2>

              <p className="text-gray-300">12:30 PM - 2:30 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Where is Waldo{" "}
              </h3>
              <h2 className="font-poppins text-lg">Gallery</h2>

              <p className="text-gray-300">12:30 PM - 2:00 PM</p>
            </article>
          </div>
        </section>

        <section className="h-auto mb-8 px-4 max-w-7xl md:px-8">
          <h2 className="text-amber-600 font-poppins font-semibold text-2xl">
            16 December
          </h2>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Western Vocal Solo music
              </h3>
              <h2 className="font-poppins text-lg">Admin Block Seminar Hall</h2>

              <p className="text-gray-300">1:00 PM - 3:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Dumb charades
              </h3>
              <h2 className="font-poppins text-lg">CS Edusat Hall</h2>

              <p className="text-gray-300">10:00 AM - 12:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Fandom Quiz
              </h3>
              <h2 className="font-poppins text-lg">EC Hi-Tech Lab</h2>

              <p className="text-gray-300">1:00 PM - 3:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Face painting
              </h3>
              <h2 className="font-poppins text-lg">Gallery</h2>

              <p className="text-gray-300">11:00 AM - 1:00 PM</p>
              {/*<img src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg" alt="Black and white photo of a lake" className="w-full rounded-md" />*/}
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">Shark tank</h3>
              <h2 className="font-poppins text-lg">MBA Seminar Hall</h2>

              <p className="text-gray-300">10:00 AM - 1:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Semi Classical Solo
              </h3>
              <h2 className="font-poppins text-lg">CS Edusat Hall</h2>

              <p className="text-gray-300">12:00 PM - 2:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Intrumental music
              </h3>
              <h2 className="font-poppins text-lg">Admin Block Seminar Hall</h2>

              <p className="text-gray-300">10:00 AM - 1:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Street play
              </h3>
              <h2 className="font-poppins text-lg">Basket Ball Court</h2>

              <p className="text-gray-300">11:00 AM - 2:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Beg Borrow Steal{" "}
              </h3>
              <h2 className="font-poppins text-lg">Mech Classroom</h2>

              <p className="text-gray-300">12:00 PM - 2:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Battle of Bands
              </h3>
              <h2 className="font-poppins text-lg">Mech Quadrangle</h2>

              <p className="text-gray-300">1:00 PM - 3:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">Stand Up</h3>
              <h2 className="font-poppins text-lg">MBA Seminar Hall</h2>

              <p className="text-gray-300">1:00 PM - 3:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Beat Boxing{" "}
              </h3>
              <h2 className="font-poppins text-lg">Main Stage</h2>

              <p className="text-gray-300">10:00 AM - 12:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">
                Indian Cinema Music
              </h3>
              <h2 className="font-poppins text-lg">EC Hi-Tech Lab</h2>

              <p className="text-gray-300">10:00 AM - 12:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">Valorant </h3>
              <h2 className="font-poppins text-lg">Online</h2>

              <p className="text-gray-300">12:00 PM - 2:00 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">BGMI </h3>
              <h2 className="font-poppins text-lg">CSE Block</h2>

              <p className="text-gray-300">10:00 AM - 2:30 PM</p>
            </article>

            <article className="pb-4 border-b border-gray-700">
              <h3 className="font-poppins font-semibold text-lg">Smoked 23</h3>
              <h2 className="font-poppins text-lg">Mech Quadrangle</h2>

              <p className="text-gray-300">11:00 PM - 3:30 PM</p>
            </article>
          </div>
        </section>
      </main>
      <Logos />
      {/* New footer removed old one */}
      <Footer2 />
    </div>
  );
};

export default EventSchedulePage;
