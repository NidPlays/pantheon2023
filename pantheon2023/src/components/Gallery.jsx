import React from 'react'
import Img1 from '../assets/carousel/1.webp'
import Img2 from '../assets/carousel/2.webp'
import Img3 from '../assets/carousel/3.webp'
import Img4 from '../assets/carousel/4.webp'
import Img5 from '../assets/carousel/5.webp'
import Img6 from '../assets/carousel/6.webp'
import Img7 from '../assets/carousel/7.webp'
import Img8 from '../assets/carousel/8.webp'
import Img9 from '../assets/carousel/9.webp'
import Img10 from '../assets/carousel/10.webp'

const galleryData = [
    { id: 1, src: Img1, hash:"LADRs-*z0JQ5-pvxM_K,0JP9-YiL" },
    { id: 2, src: Img2, hash:"L7Duc1Io00%30}s.[Ej?00t7_NIU" },
    { id: 3, src: Img3, hash:"LQIX58}@?GInR4IoM}xZtJtjNsog" },
    { id: 4, src: Img4, hash:"LfHxjCtm%Nof.Txvs:jZp0oMM{Rj" },
    { id: 5, src: Img5, hash:"LDDlZn~V-=xH9YtOt3-oO[pJx]xv" },
    { id: 6, src: Img6, hash:"LBA^,,.T00MbgPadMwSi00Mw.ApJ" },
    { id: 7, src: Img7, hash:"L3BCSq~V044U};t7-n=tRzE0=_?H" },
    { id: 8, src: Img8, hash:"L3A+:9Dg0NI{00OZxvwG0;R6}q?Z" },
    { id: 9, src: Img9, hash:"LPG6#-A6B@S^JHS?Oa=f:,NEWoIp" },
    { id: 10, src: Img10, hash: "LuMNuy|GVxN2E{%0n6w{OqOBxYWV" },
  ];


const Gallery = () => {
  return (
    <div class=" py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

        {galleryData.map((item) => (
            <a key={item.id} href="#" className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${item.id % 2 === 0 ? 'md:col-span-2' : ''}`}>
              <img src={item.src} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </a>
          ))}


        </div>

    </div>
</div>

  )
}

export default Gallery
