/* eslint-disable @typescript-eslint/no-unused-vars */
import Footer2 from '@/components/Footer2'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ball from '@/assets/images/success.png'

import { useAppDispatch } from '@/redux/store'

const ResetSuccess = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return (
    <div className="flex signin-container flex-col min-h-screen">
      <div className="flex flex-col xl:flex-row flex-grow w-full">
        <div className="hidden xl:flex xl:w-1/2 relative bg-[#F0FFF9] flex-col">
          <div className="flex-1 absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center overflow-hidden">
            <img
              className="w-full h-full max-w-[890px] object-contain"
              src={ball}
              alt="Football"
              style={{ maxHeight: '60vh' }}
            />
          </div>
        </div>

        {/* Right Side - Form Content */}
        <div className="w-full h-screen xl:w-1/2 flex flex-col">
          <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="flex-grow overflow-y-auto">
              <div className="h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="max-w-md w-full">
                  <h1 className="text-[24px] sm:text-[28px] w-full text-left md:text-[36px] lg:text-[44px] font-extrabold">
                    i-<span className="text-primary">o</span>ne
                  </h1>

                  <div className="flex flex-col">
                    <h2 className="text-2xl lg:text-5xl leading-[80px] mt-[40px] sm:mt-[70px] font-bold mb-6">
                      Password Reset Successfully
                    </h2>
                    <p className="text-[16px] lg:text-3xl text-[#878887] text-[400]">
                      Redirecting....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - always at bottom */}
      <Footer2 />
    </div>
  )
}

export default ResetSuccess
