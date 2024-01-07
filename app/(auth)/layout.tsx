import React from 'react';
import { Header } from '@/components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gradient-to-r from-[#D3CCE3] to-[#E9E4F0] overflow-hidden h-screen'>
      <div className='max-w-screen-xl mx-auto px-3'>
        <Header />
        <div className='flex justify-center items-center mt-20'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
