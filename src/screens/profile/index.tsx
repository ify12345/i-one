/* eslint-disable @typescript-eslint/no-unused-vars */
import HomeLayout from '@/components/layouts/HomeLayout'
import React, { useState } from 'react'
import PlayerImg from '@/assets/images/ororo.png'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useAppSelector } from '@/redux/store'
import { logout } from '@/redux/reducers/auth'
import { MdLogout } from 'react-icons/md'
import LogoutModal from '@/components/LogoutModal'

export default function Profile() {
  const { user } = useAppSelector(state => state.auth)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  return (
    <HomeLayout>
      <div className="flex flex-col md:flex-row gap-14 justify-center w-full mx-auto px-5 md:px-[120px]">
        <div className="bg-white rounded-lg shadow-md p-10 sm:p-8 flex flex-col  max-w-[614px] w-full  overflow-hidden md:w-1/2">
          <div className="flex justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
              Profile
            </h2>
            <Link to="/profile-stats">
              <div className=" flex text-gray-500 hover:text-gray-700 text-sm sm:text-base">
                <span className="text-base">Stats</span> <GoArrowUpRight />
              </div>
            </Link>
          </div>
          <div className="z-10 flex flex-col items-center">
            <img
              src={PlayerImg}
              alt="Player Illustration"
              className="w-[362px] h-[361px] object-contain mb-4"
            />
            <p className="text-lg sm:text-xl font-medium text-black">Ororo</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between md:w-1/2">
          <div className="z-10 flex flex-col gap-4 text-sm sm:text-base">
            <div className="flex justify-between gap-4">
              <span className="text-gray-600">First Name:</span>
              <span className="text-black font-semibold">{user.firstName}</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-600">Nickname:</span>
              <span className="text-black font-semibold">{user.nickname}</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-600">Position:</span>
              <span className="text-black font-semibold">{user.position}</span>
            </div>
          </div>

          <div className="z-10 flex flex-col gap-4 text-sm sm:text-base">
            <div className="flex justify-between gap-4">
              <span className="text-gray-600">Last Name:</span>
              <span className="text-black font-semibold">{user.lastName}</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-600">Phone:</span>
              <span className="text-black font-semibold">
                {user.phoneNumber}
              </span>
            </div>

            <button
              onClick={() => setIsLogoutModalOpen(true)}
              className="flex items-center gap-1 text-danger font-semibold hover:scale-95  transition duration-500"
            >
              Logout
              <MdLogout size={20} color="#ff0011" />
            </button>
          </div>
        </div>
      </div>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      />
    </HomeLayout>
  )
}
