import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import { Autoplay } from 'swiper/modules';
import { SlLocationPin } from "react-icons/sl";



// Define the shape of a pitch item
interface Pitch {
  id: number;
  name: string;
  location: string;
  booked: boolean;
  image: string; 
}

// Define props for the Swiper component
interface SwiperComponentProps {
  pitches: Pitch[];
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ pitches }) => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
      modules: [Pagination, Autoplay], 
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 16, 
      slidesPerView: 1, 
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []); 

  return (
    <div className='max-w-[470px] md:h-[321px] gap-[20px]'>
      <h2 className="text-lg font-bold text-black mb-3">Nearby Pitches</h2>
      <div className="swiper">
        {/* Slides wrapper */}
        <div className="swiper-wrapper">
          {pitches.map((pitch) => (
            <div key={pitch.id} className="swiper-slide">
              {/* Pitch Card */}
              <div
                className="relative bg-cover bg-center bg-no-repeat rounded-lg h-60 w-full"
                style={{ backgroundImage: `url(${pitch.image})` }}
              >
                <div className="absolute inset-0   rounded-lg flex flex-col justify-end p-4">
                  <p className="text-white font-semibold mb-auto">
                    {pitch.booked ? 'All Match Time Slots Booked' : 'Slots Available'}
                  </p>
                  <h3 className="text-white font-bold text-lg">{pitch.name}</h3>
                  <div className="flex items-center">
                  <SlLocationPin className='text-white mr-1' />
                    <p className="text-white text-sm">{pitch.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination (carousel dots) */}
        <div className="swiper-pagination mt-auto"></div>
      </div>
    </div>
  );
};

export default SwiperComponent;