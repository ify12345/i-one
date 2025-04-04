import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CustomInput from '@/components/CustomInput'
import AuthLayout from '../AuthLayout/Index'

const SignIn = () => {
  return (
    <AuthLayout>
      <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="flex-grow overflow-y-auto">
          <div className="h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="max-w-md w-full">
              <h1 className="text-[24px] sm:text-[28px] w-full text-left md:text-[36px] lg:text-[44px] font-extrabold">
                i-<span className="text-primary">o</span>ne
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-[44px] mt-[40px] sm:mt-[70px] font-bold mb-6">
                Welcome Back!
              </h2>

              <div className="flex flex-col mt-[30px] sm:mt-[52px] gap-[20px] sm:gap-[28px]">
                <CustomInput type="email" label="Email Address" name="email" />
                <CustomInput type="password" label="Password" name="password" />

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
                  <Link
                    to={''}
                    className="w-full underline flex items-center gap-[2px] text-[14px] sm:text-[16px] justify-center"
                  >
                    Forgot Password
                  </Link>
                </div>

                <div className="w-full flex items-center justify-center">
                  <p className="w-full flex items-center gap-[2px] text-[14px] sm:text-[16px] justify-center">
                    Have an Account?{' '}
                    <Link
                      className="underline font-bold"
                      to={'/create-account'}
                    >
                      {' '}
                      Sign up Here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default SignIn
