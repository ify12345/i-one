/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import logo from '@/assets/images/footer-logo.png';
import ioneBg from '../../assets/images/ione-bg.png';
import Footer2 from '../Footer2';

// Import screens
import Homepage from '@/screens/Homepage';
import Schedule from '@/screens/schedule';
import Tournaments from '@/screens/tournaments';
import Profile from '@/screens/profile';


interface NavItem {
  id: number;
  name: string;
  component: React.ReactNode;
}

const HomeLayout: React.FC = () => {
  // State to keep track of active screen
  const [activeScreenId, setActiveScreenId] = useState<number>(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Navigation with components
  const navigation: NavItem[] = [
    { id: 1, name: 'Home', component: <Homepage /> },
    { id: 2, name: 'Schedule', component: <Schedule /> },
    { id: 3, name: 'Tournament', component: <Tournaments /> },
    { id: 4, name: 'Profile', component: <Profile /> },
  ];

  // Function to render the active component based on current activeScreenId
  const renderActiveComponent = () => {
    const activeItem = navigation.find(item => item.id === activeScreenId);
    return activeItem ? activeItem.component : <Homepage />;
  };

  // Handle navigation click
  const handleNavClick = (id: number) => {
    setActiveScreenId(id);
    setIsMobileMenuOpen(false); // Close mobile menu when an item is clicked
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden m-0">
      {/* Header (integrated) */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <div onClick={() => handleNavClick(1)} className="cursor-pointer">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                  i-<span className="text-primary">o</span>ne
                </h1>
              </div>
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item: NavItem) => (
                <div
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer ${
                    activeScreenId === item.id ? 'text-black font-extrabold border-b-2 border-primary' : ''
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item: NavItem) => (
              <div
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                  activeScreenId === item.id ? 'text-primary' : ''
                }`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {renderActiveComponent()}
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default HomeLayout;