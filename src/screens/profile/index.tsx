import HomeLayout from '@/components/layouts/HomeLayout';
import React from 'react';
import PlayerImg from '@/assets/images/ororo.png';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <HomeLayout>
      <div className="flex flex-col md:flex-row  gap-14 ">
        <div className="bg-white rounded-lg shadow-md p-10 sm:p-8 flex flex-col  max-w-[614px] w-full  overflow-hidden mx-auto md:ml-[125px]">

          <div className="flex justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Profile</h2>
            <Link to="/profile-stats">
              <div className=" flex text-gray-500 hover:text-gray-700 text-sm sm:text-base">
                <span className='text-base'>Stats</span> <GoArrowUpRight />
              </div>
            </Link>
          </div>
          <div className="z-10 flex flex-col items-center">
            <img src={PlayerImg} alt="Player Illustration" className="w-[362px] h-[361px] object-contain mb-4" />
            <p className="text-lg sm:text-xl font-medium text-black">Ororo</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full justify-between gap-7'>
          <div className="z-10 flex flex-col gap-7 text-sm sm:text-base mx-auto w-[80%] ">
            <div className="flex justify-between gap-4">
              <span className="text-gray-600">First Name:</span>
              <span className="text-black font-semibold">John</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-600">Nickname:</span>
              <span className="text-black font-semibold">Ororo</span>
            </div>


            <div className="flex justify-between gap-4">
              <span className="text-gray-600">Position:</span>
              <span className="text-black font-semibold">Striker</span>
            </div>

          </div>
          <div className="z-10 flex flex-col gap-7 text-sm sm:text-base mx-auto w-[80%]">

            <div className="flex justify-between gap-4">
              <span className="text-gray-600">Last Name:</span>
              <span className="text-black font-semibold">Doe</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-600">DOB:</span>
              <span className="text-black font-semibold">07.10.1999</span>
            </div>


            <div className="flex justify-between gap-4">
              <span className="text-gray-600">POB:</span>
              <span className="text-black font-semibold">Brazil</span>
            </div>
          </div>

        </div>

      </div>
    </HomeLayout>
  );
}