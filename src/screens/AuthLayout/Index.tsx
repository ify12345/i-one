import React, { ReactNode } from 'react'
import ball from '@/assets/images/g8.png'
import Footer2 from '@/components/Footer2'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex signin-container flex-col min-h-screen">
      {/* Main content area that will grow and push footer down */}
      <div className="flex flex-col xl:flex-row flex-grow w-full">
        {/* Left Side - Image Section */}
        <div className="hidden xl:flex xl:w-1/2 bg-[#F0FFF9] flex-col">
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <img
              className="w-full h-full max-w-[890px] object-contain"
              src={ball}
              alt="Football"
              style={{ maxHeight: '60vh' }}
            />
          </div>

          <div className="px-[20px] flex flex-col items-center w-full justify-center text-center md:px-[50px] pb-[20px] md:pb-[50px]">
            <h1 className="text-[18px] md:text-[22px] lg:text-[25px] font-[600] mb-2 md:mb-3">
              Simplifying 5-A-Side Football Bookings and Team Management
            </h1>
            <p className="text-[14px] md:max-w-[500px] md:text-[16px] lg:text-[17px] text-[#4D5351]">
              Find a game, book a session, join a team, and track your stats
              with i-One.
            </p>
          </div>
        </div>

        {/* Right Side - Form Content */}
        <div className="w-full xl:w-1/2 flex flex-col">
          {/* Scrollable content area */}
          <div className="flex-grow overflow-y-auto">{children}</div>
        </div>
      </div>

      {/* Footer - always at bottom */}
      <Footer2 />
    </div>
  )
}

export default AuthLayout
