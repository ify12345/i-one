import React, { useState } from 'react'
import RoleLayout from '../RoleLayout/Index'
import BallSvg from '@/assets/svg/BallSvg'
import CalendarSvg from '@/assets/svg/CalendarSvg'
import { Link, useNavigate } from 'react-router-dom'

const roleOptions = [
  {
    key: 'player',
    title: 'As a Player',
    description:
      'Perfect for those who just want to play and find teams without managing matches!',
    icon: <BallSvg />,
    isOwner: false,
  },
  {
    key: 'organizer',
    title: 'As an Organizer / Admin',
    description:
      'Ideal for those who want to organize games schedule and recruit players!',
    icon: <CalendarSvg />,
    isOwner: true,
  },
]

const Role = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>('')
  const navigate = useNavigate()
  const handleContinue = () => {
    const currentRole = roleOptions.find(role => role.key === selectedRole)
    const isOwner = currentRole?.isOwner ?? false

    console.log('Submitting with isOwner:', isOwner)
    navigate('/register', { state: { owner: isOwner } })
  }

  return (
    <RoleLayout>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="md:max-w-[490px] p-4 sm:p-6 md:p-0 w-full">
          <h1 className="text-[24px] sm:text-[28px] w-full text-left md:text-[36px] lg:text-[44px] font-extrabold">
            i-<span className="text-primary">o</span>ne
          </h1>

          <div className="md:mt-[65px] mt-[40px] flex flex-col gap-[30px] md:gap-[68px]">
            <div>
              <h2 className="md:text-[36px] text-[20px] font-[800]">
                How Do You Want to Join?
              </h2>
              <p className="md:text-[16px] text-[12px] text-[#9F9F9F]">
                Choose your role for the best experience in the app!
              </p>
            </div>

            <div className="flex flex-col gap-[20px]">
              {roleOptions.map(role => (
                <div
                  key={role.key}
                  onClick={() =>
                    setSelectedRole(selectedRole === role.key ? null : role.key)
                  }
                  className={`w-full border rounded-[10px] cursor-pointer ${selectedRole === role.key ? 'border-[#00FF94]' : 'border-[#CED3D0]'}`}
                >
                  <div className="flex gap-[8px] p-[16px] items-start">
                    <div>{role.icon}</div>
                    <div className="flex-1 flex flex-col gap-[4px] max-w-[398px]">
                      <p className="text-[16px] leading-[20px]">{role.title}</p>
                      <p className="text-[12px]">{role.description}</p>
                    </div>
                    <div>
                      <label className="flex items-center cursor-pointer gap-2">
                        <input
                          type="radio"
                          name="role"
                          className="hidden"
                          checked={selectedRole === role.key}
                          readOnly
                        />
                        <span
                          className={`radio-container w-4 h-4 rounded-full border ${selectedRole === role.key ? 'border-[#00FF94]' : 'border-[#AAAAAA]'} flex items-center justify-center`}
                        >
                          <span
                            className={`inner-circle w-2 h-2 rounded-full ${selectedRole === role.key ? 'bg-[#00FF94]' : ''}`}
                          ></span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="w-full bg-primary text-[#007745] py-3 px-4 rounded-md shadow-lg hover:bg-primary-dark transition duration-200 mt-4 sm:mt-6 mb-4 focus:outline-none focus:ring-0"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="w-full flex items-center gap-[2px] text-[14px] sm:text-[16px] justify-center">
            Have an Account?{' '}
            <Link className="underline font-bold" to={'/sign-in'}>
              {' '}
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </RoleLayout>
  )
}

export default Role
