import { AiOutlineMenu } from 'react-icons/ai';
import { UserButton } from '@clerk/nextjs';
import React from 'react';
import { Logo } from '@/components';

export const Navbar = ({
  openSidebar,
  setOpenSidebar,
}: {
  setOpenSidebar: (openSidebar: boolean) => void;
  openSidebar: boolean;
}) => {
  return (
    <div className='flex items-center justify-between md:justify-end border-b-2 py-3 px-3'>
      <div className='md:hidden'>
        <AiOutlineMenu
          className="cursor-pointer"
          size={40}
          onClick={() => setOpenSidebar(!openSidebar)}
        />
      </div>
      <div className='md:hidden'>
        <Logo />
      </div>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};
