import React from 'react'
import Img1 from '../assets/carousel/1.JPG'
import Img2 from '../assets/carousel/2.JPG'
import Img3 from '../assets/carousel/3.JPG'
import Img4 from '../assets/carousel/4.JPG'
import Img5 from '../assets/carousel/5.JPG'
import Img6 from '../assets/carousel/6.JPG'
import Img7 from '../assets/carousel/7.JPG'
import Img8 from '../assets/carousel/8.JPG'
import Img9 from '../assets/carousel/9.JPG'
import Img10 from '../assets/carousel/10.JPG'

const galleryData = [
    { id: 1, src: Img1 },
    { id: 2, src: Img2 },
    { id: 3, src: Img3 },
    { id: 4, src: Img4 },
    { id: 5, src: Img5 },
    { id: 6, src: Img6 },
    { id: 7, src: Img7 },
    { id: 8, src: Img8 },
    { id: 9, src: Img9 },
    { id: 10, src: Img10 },
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
