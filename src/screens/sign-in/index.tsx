/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from '@/components/CustomInput'
import AuthLayout from '../AuthLayout/Index'
import { login } from '@/api/auth'
import { showToast } from '@/components/Toast'
import { useAppDispatch } from '@/redux/store'
import { Formik } from 'formik'
import * as Yup from 'yup'

interface FormValues {
  email: string
  password: string
  confirmpassword: string
}

const SignIn = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const initialValues: FormValues = {
    email: '',
    password: '',
    confirmpassword: '',
  }

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Required')
      .matches(/^.*(?=.{4,})/, 'Password must contain at least 4 characters'),
    confirmpassword: Yup.string()
      .required('Please confirm your password')
      .oneOf([Yup.ref('password')], "Passwords don't match"),
  })

  const handleSubmit = (values: FormValues) => {
    const payload = {
      email: values.email,
      password: values.password,
    }
    console.log(payload)
    setLoading(true)
    dispatch(login(payload))
      .unwrap()
      .then(response => {
        console.log(response)
        showToast({ type: 'success', msg: response.message || 'Login successful' })
        navigate('/')
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
        const errorMessage = err?.msg || err?.response?.data?.detail
        showToast({ type: 'error', msg: errorMessage })
      })
  }

  return (
    <AuthLayout>
      <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <form className="flex-grow overflow-y-auto" onSubmit={handleSubmit}>
              <div className="h-full flex items-center justify-center">
                <div className="max-w-md w-full">
                  <h1 className="text-[24px] sm:text-[28px] w-full text-left md:text-[36px] lg:text-[44px] font-extrabold">
                    i-<span className="text-primary">o</span>ne
                  </h1>

                  <h2 className="text-xl sm:text-2xl md:text-[44px] mt-[40px] sm:mt-[70px] font-bold mb-6">
                    Welcome Back!
                  </h2>

                  <div className="flex flex-col mt-[30px] sm:mt-[52px] gap-[20px] sm:gap-[28px]">
                    <CustomInput
                      type="email"
                      label="Email Address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && errors.email}
                      required
                    />

                    <CustomInput
                      type="password"
                      label="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      error={touched.password && errors.password}
                      required
                    />
                    <CustomInput
                      type="password"
                      label="Confirm Password"
                      name="confirmpassword"
                      value={values.confirmpassword}
                      onChange={handleChange}
                      error={touched.confirmpassword && errors.confirmpassword}
                      required
                    />

                    <button
                      type="submit"
                      className="w-full bg-primary text-[#007745] py-3 shadow-lg px-4 rounded-md hover:bg-primary-dark transition duration-200 mt-4 sm:mt-6 mb-4 focus:outline-none focus:ring-0"
                      disabled={loading}
                    >
                      {loading ? 'Logging in...' : 'Log in'}
                    </button>

                    <div className="w-full flex items-center justify-center">
                      <Link
                        to={'/forgot-password'}
                        className="w-full underline flex items-center gap-[2px] text-[14px] sm:text-[16px] justify-center"
                      >
                        Forgot Password
                      </Link>
                    </div>

                    <div className="w-full flex items-center justify-center">
                      <p className="w-full flex items-center gap-[2px] text-[14px] sm:text-[16px] justify-center">
                        Don't have an account?
                        <Link className="underline font-bold" to={'/role'}>
                          Sign up Here
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  )
}

export default SignIn
