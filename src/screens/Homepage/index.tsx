/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import BellSvg from '@/assets/svg/BellSvg'
import { MdWavingHand } from 'react-icons/md'
import FilterSvg from '@/assets/svg/FilterSvg'
import SwiperComponent from '../../components/Swiper'
import FixturesComponent from '../../components/Fixtures'
//background images for pitch
import lakowePitch from '@/assets/images/pitchImage.jpg'
import victoriaPitch from '@/assets/images/pitchImage1.jpg'
import ekoPitch from '@/assets/images/pitchImage2.jpg'
import osapaPitch from '@/assets/images/pitchImage3.jpg'
import lekkiPitch from '@/assets/images/pitchImage4.jpg'
import HomeLayout from '@/components/layouts/HomeLayout'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { nearBy } from '@/api/sessions'
import { getUser } from '@/api/auth'


//pitches data
const pitches = [
  {
    id: 1,
    name: 'Lakowe Turf',
    location: 'Lakowe Lakes, Lakowe, Lagos',
    booked: true,
    image: lakowePitch,
  },
  {
    id: 2,
    name: 'Victoria Pitch',
    location: 'Victoria Island, Lagos',
    booked: false,
    image: victoriaPitch,
  },
  {
    id: 3,
    name: 'Osapa Field',
    location: 'Osapa London, Lagos',
    booked: true,
    image: osapaPitch,
  },
  {
    id: 4,
    name: 'Lekki Stadium',
    location: 'Elegushi Lekki, Lagos',
    booked: false,
    image: lekkiPitch,
  },
  {
    id: 5,
    name: 'Eko Field',
    location: 'Eko Atlantic, Lagos',
    booked: true,
    image: ekoPitch,
  },
]

const Homepage = () => {
  const { user } = useAppSelector(state => state.auth)
 console.log(user)
  const dispatch = useAppDispatch()
  useEffect(() => {
     dispatch(getUser());

    if(user){
      const payload = {
       lng: user.location.coordinates[0],
       lat: user.location.coordinates[1],
      }
      dispatch(nearBy(payload))
    }
  

  },[])
  return (
    <HomeLayout>
      <div className="flex flex-col lg:flex-row gap-14 mx-5 2xl:mx-[125px] justify-center items-center">
        <div className="w-full lg:w-1/2 max-w-[550px] h-auto rounded-[20px] shadow-md p-6 md:p-[48px_40px] gap-[60px] border">
          <div className="max-w-[470px] md:h-[140px] gap-[32px]">
            {/* Greeting Section */}
            <div className="flex justify-between items-center mb-4 ">
              <div>
                <p className="text-gray-500 text-sm">
                  Hey, {user.firstName} {user.lastName}
                  <span role="img" aria-label="wave">
                    👋
                  </span>
                </p>
                <h1 className="text-2xl font-bold text-black">
                  It's Matchday!
                </h1>
              </div>
              <div className="relative">
                <BellSvg />
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for locations"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <FilterSvg className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Nearby Pitches Section with Swiper */}
          <SwiperComponent pitches={pitches} />
        </div>
        <FixturesComponent />
      </div>

    </HomeLayout>
  )
}

export default Homepage
