import React, { useState } from 'react'
import RoleLayout from '../RoleLayout/Index'
import BallSvg from '@/assets/svg/BallSvg'
import CalendarSvg from '@/assets/svg/CalendarSvg'

const Role = () => {
    const [radio, setRadio] = useState('player')

    const HandleRadio = (role:string) => {
        setRadio(role)
    }
  return (
    <RoleLayout>
      <div className="h-screen">
        <div className="h-full flex flex-col items-center justify-center ">
          <div className="md:max-w-[490px] p-4 sm:p-6 md:p-0  w-full">
            <h1 className="text-[24px] sm:text-[28px] w-full text-left md:text-[36px] lg:text-[44px] font-extrabold">
              i-<span className="text-primary">o</span>ne
            </h1>
            <div className='md:mt-[65px] mt-[40px] flex flex-col gap-[30px] md:gap-[68px]'>
              <div className='flex flex-col '>
                <h1 className="md:text-[36px] text-[20px] font-[800]">
                  How Do You Want to Join?
                </h1>
                <p className="md:text-[16px] text-[12px] text-[#9F9F9F]">
                  Choose your role for the best experience in the app!
                </p>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <div onClick={() => HandleRadio('player')} className={`w-full border rounded-[10px] ${radio === 'player' ? 'border-[#00FF94]' : 'border-[#CED3D0]'} `}>
                  <div className="flex gap-[8px] p-[16px] ">
                    <div>
                      {' '}
                      <BallSvg />
                    </div>
                    <div className="w-full flex flex-col gap-[4px] max-w-[398px]">
                      <p className="text-[16px] leading-[20px]">As a Player</p>
                      <p className="text-[12px]">
                        Perfect for those who just want to play and find teams
                        without managing matches!
                      </p>
                    </div>
                  
                    <div>
                      <label
                        htmlFor=""
                        className="flex items-center cursor-pointer gap-2"
                      >
                        <input
                          type="radio"
                          name="custom-radio"
                          id="custom-radio"
                          className="custom-radio hidden"
                        />

                        <span className={`radio-container w-4 h-4 rounded-full border ${radio === 'player' ? 'border-[#00FF94]' : 'border-[#AAAAAA]'}  flex items-center justify-center`}>
                          <span className={`inner-circle w-2 ${radio === 'player' ? 'bg-[#00FF94]' : ''} h-2 rounded-full`}></span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div onClick={() => HandleRadio('organizer')} className={`w-full border rounded-[10px] ${radio === 'organizer' ? 'border-[#00FF94]' : 'border-[#CED3D0]'} `}>
                  <div className="flex gap-[8px] p-[16px] ">
                    <div>
                      {' '}
                      <CalendarSvg />
                    </div>
                    <div className="w-full flex flex-col gap-[4px] max-w-[398px]">
                      <p className="text-[16px] leading-[20px]">As an Organizer / Admin</p>
                      <p className="text-[12px]">
                      Ideal for those who want to organize games schedule and recruit players!
                      </p>
                    </div>
                  
                    <div>
                      <label
                        htmlFor=""
                        className="flex items-center cursor-pointer gap-2"
                      >
                        <input
                          type="radio"
                          name="custom-radio"
                          id="custom-radio"
                          className="custom-radio hidden"
                        />

<span className={`radio-container w-4 h-4 rounded-full border ${radio === 'organizer'  ? 'border-[#00FF94]' : 'border-[#AAAAAA]'}  flex items-center justify-center`}>

                        <span className={`inner-circle w-2 ${radio === 'organizer' ? 'bg-[#00FF94]' : ''} h-2 rounded-full`}></span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
               
              </div>
              <button
                  className="w-full bg-primary text-[#007745] py-3 px-4 rounded-md hover:bg-primary-dark transition duration-200 mt-4 sm:mt-6 mb-4 focus:outline-none focus:ring-0"
                  style={{
                    boxShadow:
                      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                >
              Continue
                </button>
            </div>
          </div>
        </div>
      </div>
    </RoleLayout>
  )
}

export default Role
