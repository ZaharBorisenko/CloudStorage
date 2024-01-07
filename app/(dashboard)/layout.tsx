import React from 'react';
import { UserButton } from '@clerk/nextjs';
import { SideNav } from '@/components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='h-full flex -col fixed inset-y-0 z-50'>
        <SideNav />
      </div>

      <div className='ml-72'>
        <UserButton afterSignOutUrl='/' />
        {children}
      </div>
    </div>
  );
};

export default Layout;
