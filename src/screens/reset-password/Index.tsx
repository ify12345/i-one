import CustomInput from '@/components/CustomInput'
import Footer2 from '@/components/Footer2'
import React from 'react'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="h-screen flex justify-center p-6 items-center bg-[#EFFFF8] w-full">
        <div className="bg-[white] rounded-[30px] p-[20px] md:p-[100px] shadow-lg md:max-w-[694px] w-full">
          <h1 className="text-[24px] sm:text-[28px] w-full text-center md:text-[36px] lg:text-[44px] font-extrabold">
            i-<span className="text-primary">o</span>ne
          </h1>
          <div className="w-full flex flex-col mt-[30px] gap-[10px] text-center">
            <h1 className="md:text-[34px] text-[20px] font-[600]">
              Reset Password
            </h1>
            <p className="md:text-[16px] text-[12px] text-[#AEAEAE]">
              Your Password must be different from old passwords
            </p>
          </div>

          <div className="flex flex-col  mt-[30px] gap-[32px] w-full max-w-[494px] mx-auto">
            <CustomInput
              type="password"
              placeholder=" New password"
              name="password"
            />
            <CustomInput
              type="password"
              placeholder="Confirm password"
              name="password"
            />
          </div>

          <div className="flex gap-[12px] mt-[30px] w-full">
            <button className="w-full border-[#5C5C5C57] border rounded-[5px] py-3 px-4  transition duration-200 mt-4 sm:mt-6 mb-4 focus:outline-none focus:ring-0">
              Cancel
            </button>
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
      <Footer2 />
    </div>
  )
}

export default ResetPassword
