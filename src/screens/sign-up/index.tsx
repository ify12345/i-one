/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import AuthLayout from '../AuthLayout/Index'
import CustomInput from '@/components/CustomInput'
import { useAppDispatch } from '@/redux/store'
import { showToast } from '@/components/Toast'
import { register } from '@/api/auth'
import GeolocationComponent from '@/components/GetGeoLocation'
import Loader from '@/components/Loader'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const location = useLocation()
  const isOwner = location.state?.owner ?? false
  const [loading, setLoading] = useState(false)
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0])

  const initialValues = {
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    position: '',
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    nickname: Yup.string().required('Nickname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^.*(?=.{6,})/, 'Minimum 6 characters'),
    phoneNumber: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    position: Yup.string().required('Select your position'),
  })

  const handleSubmit = async (values: typeof initialValues) => {
    if (coordinates[0] === 0 && coordinates[1] === 0) {
      showToast({
        type: 'error',
        msg: 'Please get your location coordinates first',
      })
      return
    }

    const payload = {
      ...values,
      isOwner,
      location: {
        type: 'Point',
        coordinates,
      },
    }
    console.log(payload)

    setLoading(true)
    dispatch(register(payload))
      .unwrap()
      .then(response => {
        setLoading(false)
        console.log(response)
        showToast({
          type: 'success',
          msg: response.message || 'User registered successfully',
        })
        navigate('/sign-in');
      })
      .catch(err => {
        setLoading(false)
        console.log('error is', err)
        const message = err?.msg?.message || err?.msg
        showToast({ type: 'error', msg: message })
      })
  }

  // Format coordinates for display
  const formattedCoordinates =
    coordinates[0] !== 0 && coordinates[1] !== 0
      ? `[${coordinates[0].toFixed(6)}, ${coordinates[1].toFixed(6)}]`
      : 'Not set'

  return (
    <AuthLayout>
      <div className="h-svh w-full flex items-center justify-center p-4">
        <div className="max-w-md h-[600px] overflow-y-auto w-full">
          <a href="/" className="text-[24px] sm:text-[28px] text-left md:text-[36px] font-extrabold">
            i-<span className="text-primary">o</span>ne
          </a>
          <h2 className="text-xl md:text-[44px] mt-10 font-bold mb-6">
            Create Account
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col mt-[30px] sm:mt-[52px] gap-[20px] sm:gap-[28px]"
              >
                <div className="flex flex-col 2xl:flex-row gap-3">
                  <CustomInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    onChange={handleChange}
                    error={touched.firstName && errors.firstName}
                    required
                  />
                  <CustomInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    value={values.lastName}
                    onChange={handleChange}
                    error={touched.lastName && errors.lastName}
                    required
                  />
                </div>
                <div className="flex flex-col 2xl:flex-row gap-3">
                  <CustomInput
                    label="Nickname"
                    name="nickname"
                    type="text"
                    value={values.nickname}
                    onChange={handleChange}
                    error={touched.nickname && errors.nickname}
                    required
                  />

                  <CustomInput
                    label="Position"
                    name="position"
                    type="select"
                    value={values.position}
                    onChange={handleChange}
                    options={[
                      { label: 'Goalkeeper (GK)', value: 'GK' },
                      { label: 'Defender (DF)', value: 'DF' },
                      { label: 'Midfielder (MF)', value: 'MF' },
                      { label: 'Forward (FW)', value: 'FW' },
                    ]}
                    placeholder="Select your position"
                    error={touched.position && errors.position}
                  />
                </div>

                {/* Location section */}
                <div className="flex flex-col 2xl:flex-row gap-3 items-center">
                  <div className="w-full">
                    <label className="block text-sm font-light text-prim mb-1">
                      Location*
                    </label>
                    <GeolocationComponent setCoordinates={setCoordinates} />

                    {/* <div className="flex items-center mt-2">
                      <span className="text-sm font-medium mr-2">Current coordinates:</span>
                      <span className="text-sm text-gray-600">{formattedCoordinates}</span>
                    </div> */}
                  </div>

                  <CustomInput
                    label="Address"
                    name="address"
                    type="text"
                    value={values.address}
                    onChange={handleChange}
                    error={touched.address && errors.address}
                    required
                  />
                </div>

                <CustomInput
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  error={touched.phoneNumber && errors.phoneNumber}
                  required
                />

                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && errors.email}
                  required
                />

                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && errors.password}
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-primary text-[#007745] py-3 px-4 rounded-md hover:bg-primary-dark transition duration-200 shadow-xl"
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
              </form>
            )}
          </Formik>
        </div>
      </div>
       <Loader visible={loading}/>
    </AuthLayout>
  )
}

export default SignUp
