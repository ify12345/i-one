import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminAuthLayout from '../AdminAuthLayout/Index'
import CustomInput from '@/components/CustomInput'

const AdminSignUp = () => {
    const [step, setStep] = useState(1)
    const navigate = useNavigate()
    const isInitialMount = useRef(true)

    // Push Step 1 on mount as a separate history entry
    useEffect(() => {
        if (isInitialMount.current) {
            window.history.pushState({ step: 1 }, '')
            isInitialMount.current = false
        }
    }, [])

    // Handle browser back/forward
    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            if (event.state?.step) {
                setStep(event.state.step)
            } else {
                // Always route to /role if back from step 1
                navigate('/role')
            }
        }

        window.addEventListener('popstate', handlePopState)
        return () => window.removeEventListener('popstate', handlePopState)
    }, [navigate])

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault()
        if (step < 3) {
            const nextStep = step + 1
            window.history.pushState({ step: nextStep }, '')
            setStep(nextStep)
        }
    }

    const handleBack = () => {
        if (step > 1) {
            window.history.back()
        } else {
            // Step 1 back → always route to /role
            navigate('/role')
        }
    }

    return (
        <AdminAuthLayout>
            <div className="h-svh w-full flex items-center justify-center p-4">
                <div className="max-w-md xl:max-w-[530px] scrollbar-none h-[600px] overflow-y-auto w-full">
                    <a
                        href="/"
                        className="text-[24px] sm:text-[28px] text-left md:text-[36px] font-extrabold"
                    >
                        i-<span className="text-primary">o</span>ne
                    </a>

                    <h2 className="text-xl md:text-[44px] mt-10 leading-[50px] font-bold mb-6">
                        Complete your profile
                    </h2>

                    {/* Back button */}


                    <form
                        className="flex flex-col mt-[10px] sm:mt-[52px] gap-[20px] sm:gap-[28px]"
                        onSubmit={handleNext}
                    >
                        {step === 1 && (
                            <>
                                <div className="flex flex-col 2xl:flex-row gap-3">
                                    <CustomInput label="First Name" name="firstName" type="text" required />
                                    <CustomInput label="Last Name" name="lastName" type="text" required />
                                </div>

                                <div className="flex flex-col 2xl:flex-row gap-3">
                                    <CustomInput label="Role" name="role" type="text" required />
                                    <CustomInput label="Pitch Name" name="pitchName" type="text" required />
                                </div>
                                   <>
                                <CustomInput label="Location" name="location" type="text" required />
                                <CustomInput label="Phone Number" name="phoneNumber" type="tel" required />
                            </>
                            </>
                        )}

                        {step === 2 && (
                            <><>
                                <CustomInput label="Email" name="Email" type="email" required />
                               
                            </><div className='grid grid-cols-2 gap-[30px] w-full'>
                                    <CustomInput label="Pitch Max (Number of Players)" name="Pitch Max (Number of Players)" type="text" required />
                                    <CustomInput label="Pitch Size (M)" name="Pitch Size (M)" type="tel" required />
                                    <CustomInput label="Time Frame" name="Time Framer" type="tel" required />
                                </div></>
                        )}

                        {step === 3 && (
                            <>
                                {/* <CustomInput label="Email Address" name="email" type="email" required /> */}
                                <div className="flex flex-col 2xl:flex-row gap-3">
                                    <CustomInput
                                        label="Tier"
                                        name="Tier"
                                        type="select"

                                        options={[
                                            { label: '1', value: '1' },
                                            { label: '2', value: '2' },
                                            { label: '3', value: '3' },

                                        ]}
                                        placeholder="Select "

                                    />
                                    <CustomInput
                                        label="Pricing Option"
                                        name="Pricing Option"
                                        type="select"

                                        options={[
                                            { label: '#100,000', value: '#100,000' },
                                            { label: '#200,000', value: '#200,000' },
                                            { label: '#300,000', value: '#300,000' },

                                        ]}
                                        placeholder="Select "

                                    />
                                </div>
                                <div className="flex flex-col 2xl:flex-row gap-3">
                                    <CustomInput label="Payment per hour" placeholder="# xxxx.xx" name="Payment per hour" type="text" required />
                                    <CustomInput label="Payment per person (monthly)" placeholder="# xxx.xx" name="payment per person (monthly)" type="text" required />
                                </div>
                                <div>
                                <h1>Company Account Details</h1>
                                    <div className="flex flex-col mt-[15px] 2xl:flex-row gap-3">

                                        <CustomInput label="Bank" placeholder="Bank Name" name="Bank" type="text" required />
                                        <CustomInput label="Account Number" placeholder="12***34" name="Account Number" type="text" required />
                                    </div>
                                </div>
                            </>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-primary text-[#007745] py-3 px-4 rounded-md hover:bg-primary-dark transition duration-200 shadow-xl"
                        >
                            {step < 3 ? 'Next' : 'Create Account'}
                        </button>
                    </form>
                </div>
            </div>
        </AdminAuthLayout>
    )
}

export default AdminSignUp
