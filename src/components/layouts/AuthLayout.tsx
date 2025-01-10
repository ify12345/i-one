import * as React from 'react';
import authImg from '@/assets/images/auth.png'

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="overflow-x-hidden w-full m-0">
            <div id="app">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                  
                    <div className="flex flex-col py-20 px-5 lg:px-0 items-center relative">
                        <div className="w-full max-w-[450px] bg-white shadow-md rounded-lg p-8">
                            {children}
                        </div>
                    </div>

                   
                    <div className="relative h-full hidden lg:block">
                        <div className="absolute inset-0">
                            <img 
                                className="w-full h-full object-cover" 
                                src={authImg} 
                                alt="ISO Access" 
                            />
                        </div>
                    </div>
                </div>
            </div>

    
            <script src="https://checkout.stripe.com/checkout.js"></script>
            <script src="https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>

            <script>
                {`
                document.addEventListener('DOMContentLoaded', () => {
                    const menuBtn = document.getElementById('menu-btn');
                    const sideMenu = document.getElementById('side-menu');
                    const closeBtn = document.getElementById('close-btn');

                    // Open the side menu
                    menuBtn.addEventListener('click', () => {
                        sideMenu.classList.remove('hidden');
                    });

                    // Close the side menu
                    closeBtn.addEventListener('click', () => {
                        sideMenu.classList.add('hidden');
                    });

                    // Close the side menu when clicking outside
                    window.addEventListener('click', (e) => {
                        if (e.target !== menuBtn && !sideMenu.contains(e.target)) {
                            sideMenu.classList.add('hidden');
                        }
                    });
                });
                `}
            </script>

            {/* Environment-dependent script rendering */}
            {process.env.NODE_ENV === 'development' ? (
                <script src="/js/app.js"></script>
            ) : (
                <script src="/js/app.js"></script>
            )}
            {/* You can remove the above script block if you are handling scripts differently or if it's not relevant in React */}
            {/* Add any additional scripts from other components here if necessary. */}
        </div>
    );
};

export default AuthLayout;