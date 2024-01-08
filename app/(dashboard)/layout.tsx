import React from 'react';
import { Navbar, SideNav } from '@/components';

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div>
      <div className='hidden md:block h-full flex-col fixed inset-y-0 z-50 md:w-72'>
        <SideNav />
      </div>

      <div className='md:ml-72'>
        <Navbar/>
        {children}
      </div>
    </div>
  );
};

export default Layout;
