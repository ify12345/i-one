import Footer2 from '@/components/Footer2'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ball from '@/assets/images/Group (1).png'
import CustomInput from '@/components/CustomInput'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { showToast } from '@/components/Toast'
import { useAppDispatch } from '@/redux/store'
import { forgotPassword } from '@/api/auth'

interface ForgotPasswordFormValues {
  email: string
}

const ForgetPassword = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState<boolean>(false)

  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
  })

  // Initial form values
  const initialValues: ForgotPasswordFormValues = {
    email: '',
  }

  const handleSubmit = (values: ForgotPasswordFormValues) => {
    setLoading(true)

    dispatch(forgotPassword({ email: values.email }))
      .unwrap()
      .then(response => {
        setLoading(false)
        showToast({ type: 'success', msg: response.message })
        navigate('/verification', { state: { input: values.email } })
      })

      .catch(error => {
        setLoading(false)
        const errorMsg =
          error?.msg ||
          error?.response?.data?.detail
        showToast({ type: 'error', msg: errorMsg })
        console.error('Forgot password error:', error)
      })
  }

  // Handle cancel button
  const handleCancel = () => {
    navigate('/sign-in')
  }

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
                    <h2 className="text-xl sm:text-2xl md:text-[44px] mt-[40px] sm:mt-[70px] font-bold mb-6">
                      Forgot Password?
                    </h2>
                    <p className="text-[16px] text-[#878887] text-[400]">
                      Enter your email to reset password
                    </p>
                  </div>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({
                      handleChange,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                    }) => (
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col mt-[30px] sm:mt-[52px] gap-[20px] sm:gap-[28px]"
                      >
                        <CustomInput
                          type="email"
                          label="Email Address"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          error={touched.email && errors.email}
                          required
                        />

                        <div className="flex gap-[12px] w-full">
                          <button
                            type="button"
                            className="w-full border-[#5C5C5C57] border rounded-[5px] py-3 px-4 transition duration-200 mt-4 sm:mt-6 mb-4 focus:outline-none focus:ring-0"
                            onClick={handleCancel}
                            disabled={loading}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="w-full bg-primary text-[#007745] py-3 px-4 rounded-md hover:bg-primary-dark transition duration-200 mt-4 sm:mt-6 mb-4 focus:outline-none focus:ring-0"
                            style={{
                              boxShadow:
                                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                            }}
                            disabled={loading}
                          >
                            {loading ? 'Sending...' : 'Get Code'}
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
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

export default ForgetPassword
