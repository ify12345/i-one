import React, { ReactNode } from 'react'
import ball from '@/assets/images/illust.png'
import Footer2 from '@/components/Footer2'

interface RoleLayoutProps {
  children: ReactNode
}

const RoleLayout: React.FC<RoleLayoutProps> = ({ children }) => {
  return (
    <div className="flex signin-container flex-col min-h-screen">
      {/* Main content area that will grow and push footer down */}
      <div className="flex flex-col xl:flex-row flex-grow w-full">
        {/* Left Side - Image Section */}
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

export default RoleLayout
