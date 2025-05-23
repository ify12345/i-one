/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, ReactNode, useEffect } from 'react';
import logo from '@/assets/images/footer-logo.png';
import ioneBg from '../../assets/images/ione-bg.png';
import Footer2 from '../Footer2';
import { useNavigate } from 'react-router-dom';


interface HomeLayoutProps {
  children: ReactNode;
  activeNavId?: number; // Optional prop to override automatic route detection
}

interface NavItem {
  id: number;
  name: string;
  path: string; // Path for navigation
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children, activeNavId }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>('');
  const [activeId, setActiveId] = useState<number>(1); // Default to Home

  // Navigation items
  const navigation: NavItem[] = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Schedule', path: '/schedule' },
    { id: 3, name: 'Tournament', path: '/tournament' },
    { id: 4, name: 'Profile', path: '/profile' },
  ];

  // Detect current path on component mount and window location changes
  useEffect(() => {
    // Get current path
    const path = window.location.pathname;
    setCurrentPath(path);

    // Find matching navigation item
    const matchingItem = navigation.find(item => {
      // Exact match for home
      if (item.path === '/' && path === '/') return true;

      // For other routes, check if the path starts with the navigation path
      // This handles both exact matches and nested routes
      if (item.path !== '/' && path.startsWith(item.path)) return true;

      return false;
    });

    // If found, set the active ID
    if (matchingItem) {
      setActiveId(matchingItem.id);
    } else {
      setActiveId(0); // No match, don't highlight any item
    }
  }, []);


  useEffect(() => {
    if (activeNavId !== undefined) {
      setActiveId(activeNavId);
    }
  }, [activeNavId]);


  const handleNavClick = (path: string) => {

    window.location.href = path;
    setIsMobileMenuOpen(false);
  };
  const navigate = useNavigate();


  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden m-0">

      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex-shrink-0">
              <div onClick={() => handleNavClick('/')} className="cursor-pointer">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                  i-<span className="text-primary">o</span>ne
                </h1>
              </div>
            </div>

            {
              activeNavId  ? <button onClick={() => navigate(-1)}>Back</button> : (
                <div className="hidden md:flex md:items-center md:space-x-8">
                  {navigation.map((item: NavItem) => (
                    <div
                      key={item.id}
                      onClick={() => handleNavClick(item.path)}
                      className={` hover:text-primary font-medium px-3 py-2 transition-colors duration-200 cursor-pointer ${activeId === item.id ? 'text-black font-extrabold border-b-2 border-primary' : 'text-gray-400'
                        }`}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )
            }

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

        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item: NavItem) => (
              <div
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={` hover:text-primary block px-3 py-2 text-base font-medium cursor-pointer ${activeId === item.id ? 'text-primary' : 'text-gray-400'
                  }`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 py-8  HomeBackground">
        {children}
      </main>

      <Footer2 />
    </div>
  );
};

export default HomeLayout;