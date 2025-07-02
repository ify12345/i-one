/* eslint-disable @typescript-eslint/no-unused-vars */
import CustomInput from '@/components/CustomInput'
import Footer2 from '@/components/Footer2'
import { useAppDispatch } from '@/redux/store'
import { Formik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { showToast } from '@/components/Toast'
import { reset } from '@/api/auth'
import Loader from '@/components/Loader'

interface FormValues {
  email: string
  newpassword: string
  confirmpassword: string
}
const ResetPassword = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  const initialValues = {
    email: '',
    newpassword: '',
    confirmpassword: '',
  }

  const resetSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    newpassword: Yup.string()
      .required('Required')
      .matches(/^.*(?=.{4,})/, 'Password must contain at least 4 characters'),
    confirmpassword: Yup.string()
      .required('Please confirm your password')
      .oneOf([Yup.ref('newpassword')], "Passwords don't match"),
  })

  const handleSubmit = (values: FormValues) => {
    const payload = {
      email: values.email,
      newPassword: values.newpassword,
      confirmPassword: values.confirmpassword,
    }
    console.log(payload)
    setLoading(true)
    dispatch(reset(payload))
      .unwrap()
      .then(response => {
        console.log(response)
        showToast({ type: 'success', msg: response.message })
        navigate('/reset-success')
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
        const errorMessage = err?.msg.message || err?.response?.data?.detail
        showToast({ type: 'error', msg: errorMessage })
      })
  }

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
          <Formik
            initialValues={initialValues}
            validationSchema={resetSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <form
                className="flex-grow overflow-y-auto"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col  mt-[30px] gap-[32px] w-full max-w-[494px] mx-auto">
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
                    label="New Password"
                    name="newpassword"
                    value={values.newpassword}
                    onChange={handleChange}
                    error={touched.newpassword && errors.newpassword}
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
                </div>

                <div className="flex gap-[12px] mt-[30px] w-full">
                  <Link
                    to="/forgot-password"
                    className="w-full flex justify-center border-[#5C5C5C57] border rounded-[5px] py-3 px-4  transition duration-200 mt-4 sm:mt-6 mb-4 focus:outline-none focus:ring-0"
                  >
                    Cancel
                  </Link>
                  <button
                    className="w-full bg-primary text-[#007745] py-3 px-4 rounded-md hover:bg-primary-dark transition duration-200 mt-4 sm:mt-6 mb-4 focus:outline-none focus:ring-0"
                    style={{
                      boxShadow:
                        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    {loading ? 'Changing...' : 'Continue'}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <Footer2 />
      <Loader visible={loading}/>
    </div>
  )
}

export default ResetPassword
