/* eslint-disable @typescript-eslint/no-unused-vars */
import Footer2 from '@/components/Footer2'
import React, { useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthLayout from '../AuthLayout/Index'
import { useAppDispatch } from '@/redux/store'
import { showToast } from '@/components/Toast'
import { verifyOtp } from '@/api/auth'
import Loader from '@/components/Loader'

interface ForgotPasswordFormValues {
  email: string
  otp: string
}

export default function Verify() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])
  const [loading, setLoading] = useState(false)
  const emailInput = location.state?.input ?? ''

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

  const handleSubmit = () => {
    const otp = inputsRef.current.map(input => input?.value).join('')
    if (otp.length !== 5) {
      showToast({ type: 'error', msg: 'Please enter a valid 5-digit OTP.' })
      return
    }

    const payload: ForgotPasswordFormValues = {
      email: emailInput,
      otp: otp,
    }

    setLoading(true)
    dispatch(verifyOtp(payload))
      .unwrap()
      .then(response => {
        setLoading(false)
        showToast({ type: 'success', msg: response.message })
        navigate('/reset')
      })
      .catch(error => {
        setLoading(false)
        const errorMsg = error?.msg || error?.response?.data?.detail
        showToast({ type: 'error', msg: errorMsg })
        console.error('Forgot password error:', error)
      })
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
                <span className="text-[black]">{emailInput}</span>
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
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="md:max-w-[494px] w-full bg-primary text-[#007745] py-3 px-4 shadow-lg rounded-md hover:bg-primary-dark transition duration-200  focus:outline-none focus:ring-0"
              >
                {loading ? 'Verifying...' : 'Verify'}
              </button>
            </div>

            <div className="w-full mt-[32px] flex items-center justify-center">
              <p className="w-full flex items-center gap-[2px] font-[400] text-[14px] sm:text-[16px] justify-center">
                Didn’t receive any code?{' '}
                <Link className="underline text-[#769B8A]" to="">
                  Resend Code
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Loader visible={loading} />
    </AuthLayout>
  )
}


