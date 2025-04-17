/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import ball from '@/assets/images/g8.png'
import { IoEyeOffOutline } from 'react-icons/io5'
import { IoEyeOutline } from 'react-icons/io5'
import Footer2 from '@/components/Footer2'
import CustomInput from '@/components/CustomInput'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthLayout from '../AuthLayout/Index'
import { useAppDispatch } from '@/redux/store'
import { FormData } from '@/components/typings'
import { showToast } from '@/components/Toast'
import { RegisterPayload } from '@/components/typings/api'
import { register } from '@/api/auth'

const SignUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const owner = location.state?.owner ?? false
  // console.log(owner);

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    nickName: '',
    position: '',
    address: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const payload: RegisterPayload = {
      email: formData.email,
      password: formData.password,
      isOwner: owner,
      nickName: formData.nickName,
      position: formData.position,
      phoneNumber: formData.phone,
      location: formData.location,
      address: formData.address,
    }

    console.log(payload)
    setLoading(true)

    dispatch(register(payload))
      .unwrap()
      .then(response => {
        setLoading(false)
        console.log('Success:', response)
        showToast({ type: 'success', msg: response.message })
        navigate('/sign-in')
      })
      .catch(err => {
        setLoading(false)
        const errorMessage =
          err?.msg || err?.response?.data?.detail || 'An error occurred'
        console.error('Error:', err)
        showToast({ type: 'error', msg: errorMessage })
      })
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

              <form
                onSubmit={handleSubmit}
                className="flex flex-col mt-[30px] sm:mt-[52px] gap-[20px] sm:gap-[28px]"
              >
                <div className="flex flex-col 2xl:flex-row gap-3">
                  <CustomInput
                    label="Nick name"
                    type="text"
                    name="nickName"
                    placeholder="Enter nick name"
                    value={formData.nickName}
                    onChange={handleChange}
                    required
                  />

                  <CustomInput
                    label="Position"
                    type="text"
                    name="position"
                    placeholder="ST"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col 2xl:flex-row gap-3">
                  <CustomInput
                    label="Location"
                    type="text"
                    name="location"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />

                  <CustomInput
                    label="Address"
                    type="text"
                    name="address"
                    placeholder="Enter address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <CustomInput
                  label="Phone number"
                  type="number"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <CustomInput
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="Enter company email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                {/* Password */}
                <CustomInput
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                {/* Buttons */}
                <button
                  className="w-full bg-primary text-[#007745] py-3 px-4 rounded-md hover:bg-primary-dark transition duration-200 mt-4 sm:mt-6 mb-4 focus:outline-none focus:ring-0 shadow-xl"
                  disabled={loading}
                >
                  {loading ? 'Signing up...' : 'Create Account'}
                </button>

                <div className="w-full flex items-center justify-center">
                  <p className="w-full flex items-center gap-[2px] text-[14px] sm:text-[16px] justify-center">
                    Have an Account?{' '}
                    <Link className="underline font-bold" to={'/sign-in'}>
                      {' '}
                      Login Here
                    </Link>
                  </p>
                </div>

                {/* Checkboxes */}
                {/* <div className="space-y-3 pt-2">
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
                </div> */}
              </form>
            </div>
          </div>

          {/* Footer - Now placed outside the main content container */}
        </div>
      </div>
    </AuthLayout>
  )
}

export default SignUp
