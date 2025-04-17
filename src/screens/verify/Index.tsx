/* eslint-disable @typescript-eslint/no-unused-vars */
import Footer2 from '@/components/Footer2'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../AuthLayout/Index'

const Verify: React.FC = () => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value
    if (/^\d$/.test(value)) {
      if (index < 4 && inputsRef.current[index + 1]) {
        inputsRef.current[index + 1]?.focus()
      }
    } else {
      e.target.value = ''
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  return (
    <AuthLayout hideLeft>
      <div className="w-full min-h-screen">
        <div className="h-screen flex justify-center p-6 items-center w-full">
          <div className="bg-[white] rounded-[30px] p-[20px] md:p-[100px] shadow-lg md:max-w-[694px] w-full">
            <h1 className="text-[24px] sm:text-[28px] w-full text-center md:text-[36px] lg:text-[44px] font-extrabold">
              i-<span className="text-primary">o</span>ne
            </h1>
            <div className="w-full flex flex-col mt-[30px] text-center">
              <h1 className="md:text-[34px] text-[20px] font-[600]">
                Enter Verification Code
              </h1>
              <p className="md:text-[16px] text-[12px] text-[#AEAEAE]">
                A code has been sent to{' '}
                <span className="text-[black]">abc@gmail.com</span>
              </p>
            </div>

            <div className="flex gap-7 mt-[30px] w-full  mx-auto justify-center">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  ref={(el: HTMLInputElement | null) => {
                    inputsRef.current[i] = el
                  }}
                  onChange={e => handleChange(e, i)}
                  onKeyDown={e => handleKeyDown(e, i)}
                  className="md:w-[60px] w-[40px] h-[40px] md:h-[60px] text-center text-[24px] border-[2px] border-[#E3E3E3] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-primary"
                  type="text"
                  inputMode="numeric"
                />
              ))}
            </div>

            <div className="mt-[30px]">
              <button className="md:max-w-[494px] w-full bg-primary text-[#007745] py-3 px-4 shadow-lg rounded-md hover:bg-primary-dark transition duration-200  focus:outline-none focus:ring-0">
                Verify
              </button>
            </div>
            <div className="w-full mt-[32px] flex items-center justify-center">
              <p className="w-full flex items-center gap-[2px] font-[400] text-[14px] sm:text-[16px] justify-center">
                Didnt receive any code?{' '}
                <Link className="underline text-[#769B8A] " to="">
                  {' '}
                  Resend Code
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Verify
