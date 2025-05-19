import logo from '@/assets/images/footer-logo.png';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 

// Define navigation item type
interface NavItem {
  id: number;
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'Schedule', href: '/schedule' },
  { id: 3, name: 'Tournament', href: '/tournament' },
  { id: 4, name: 'Profile', href: '/profile' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                i-<span className="text-primary">o</span>ne
              </h1>
            </NavLink>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item: NavItem) => (
              <NavLink
                key={item.id}
                to={item.href}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive ? 'text-black font-extrabold border-b-2 border-primary' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item: NavItem) => (
            <NavLink
              key={item.id}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }: { isActive: boolean }) =>
                `text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-primary' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;