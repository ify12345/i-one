import React from 'react';
import Header from '../Header';
import Footer2 from '../Footer2';
import ioneBg from '../../assets/images/ione-bg.png';
import Homepage from '@/screens/Homepage';

// Define props interface
interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden m-0">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full ">
        {/* <div
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ioneBg})` }}
        >
          {children}
        </div> */}
        <Homepage />
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default HomeLayout;