/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import ball from '@/assets/images/g8.png'
import { IoEyeOffOutline } from 'react-icons/io5'
import { IoEyeOutline } from 'react-icons/io5'
import Footer2 from '@/components/Footer2'
import CustomInput from '@/components/CustomInput'
import { Link } from 'react-router-dom'
import AuthLayout from '../AuthLayout/Index'

const SignUp = () => {
  const inputShadow = {
    boxShadow:
      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  }

  return (
    <AuthLayout>
      <div className="h-screen w-full flex items-center justify-center p-4 ">
        <div className="flex-grow overflow-y-auto">
          <div className="h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="max-w-md w-full">
              <h1 className="text-[24px] sm:text-[28px] w-full text-left md:text-[36px] lg:text-[44px] font-extrabold">
                i-<span className="text-primary">o</span>ne
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-[44px] mt-[40px] sm:mt-[70px] font-bold mb-6">
                Create Account
              </h2>

              <div className="flex flex-col mt-[30px] sm:mt-[52px] gap-[20px] sm:gap-[28px]">
                <CustomInput type="email" label="Email Address" name="email" />
                <CustomInput type="password" label="Password" name="password" />

                {/* Buttons */}
                <button
                  className="w-full bg-primary text-[#007745] py-3 px-4 rounded-md hover:bg-primary-dark transition duration-200 mt-4 sm:mt-6 mb-4 focus:outline-none focus:ring-0"
                  style={{
                    boxShadow:
                      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  Create Account
                </button>

                <div className="w-full flex items-center justify-center">
                  <p className="w-full flex items-center gap-[2px] text-[14px] sm:text-[16px] justify-center">
                    Have an Account?{' '}
                    <Link className="underline font-bold" to={'/signin'}>
                      {' '}
                      Login Here
                    </Link>
                  </p>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-0 focus:outline-none rounded mt-1"
                    />
                    <div>
                      <label
                        htmlFor="rememberMe"
                        className="ml-[4px] block  text-[8px] md:text-[12px] "
                      >
                        By clicking this, I agree to the Terms of Services and
                        Privacy Policy
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-start">
                    <input type="checkbox" className="h-4 w-4 rounded mt-1" />
                    <div>
                      <label
                        htmlFor="newsletter"
                        className="ml-[4px] block text-[8px] md:text-[12px]"
                      >
                        Recieve Emails from our Newsletter
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Now placed outside the main content container */}
        </div>
      </div>
    </AuthLayout>
  )
}

export default SignUp
