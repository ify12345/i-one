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
import { nearBy, nearByLocation } from '@/api/sessions'
import { getUser } from '@/api/auth'
import AdminHomeLayout from '@/components/layouts/AdminHomeLayout'

const AdminHome = () => {
 
  return (
    <AdminHomeLayout>
      <div className="flex flex-col lg:flex-row gap-6 2xl:gap-14 2xl:px-[100px] justify-center ">
        <div className='fixed left-0 px-[50px] xl:px-[200px] top-0 w-full z-50  bg-[#ECF8EF] rounded-b-[20px] border-[#43B75D] border-b-[2px]  h-[80px]'>
<div className='flex flex-col justify-center gap-1 h-full '>
<p className='text-[18px] font-bold'>New Player</p>
<p className='text-[#6D717F] text-[15px]'>[Player Name] has joined your session</p>
</div>

        </div>
        <div className=" xl:w-1/2 w-full h-full rounded-[20px] shadow-md p-6 md:p-[48px_40px] gap-[60px] border">
        <div className="relative w-full h-[480px] rounded-[20px] overflow-hidden">
  {/* Background Image */}
  <img
    src={lakowePitch}
    alt="Pitch"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40" />
<div className='absolute p-6 '>
    <div className='bg-[#FFFFFF33] rounded-[10px] text-center items-center w-auto'>
    <p className='text-white p-2'>Pitch Condition: Excellent</p>
    </div>
</div>
<div className='absolute right-0 p-6 '>
    <div className='bg-[#FFFFFF33] py-[2px] px-[5px] rounded-[10px] text-center items-center w-auto'>
   <BellSvg/>
    </div>
</div>
  {/* Text Content */}
  <div className="bottom-[50px] absolute z-10 flex flex-col justify-end h-full p-6 text-white">
    <div>
   <div className='bg-[#FFFFFF33] rounded-[10px] text-center items-center max-w-auto'>
    <p className='text-white p-2'>Lakowe Lakes, Lakowe, Lagos</p>
    </div>
    </div>
   
  </div>
   <div>
    <p className="text-[50px] text-white font-bold left-6 absolute bottom-0  w-full opacity-90">
     ANT SPORTS
    </p>
    </div>
</div>


        </div>
        <FixturesComponent />
      </div>

    </AdminHomeLayout>
  )
}

export default AdminHome
