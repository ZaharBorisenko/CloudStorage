"use client"
import React, { useState } from 'react';
import { Navbar, SideNav } from '@/components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  return (
    <div>
      <div className={`bg-white md:block h-full flex-col fixed inset-y-0 z-50 md:w-72
      ${!openSidebar ? 'left-[-300px] md:left-0' : 'left-0'}
      `}>
        <SideNav setOpenSidebar={setOpenSidebar} />
      </div>

      <div className='md:ml-72'>
        <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/>
        {children}
      </div>
    </div>
  );
};

export default Layout;
