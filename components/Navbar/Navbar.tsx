import { AiOutlineMenu } from 'react-icons/ai';
import { UserButton } from '@clerk/nextjs';
import React from 'react';
import { Logo } from '@/components';

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between md:justify-end border-b-2 py-3 px-3">
      <div className="md:hidden"><AiOutlineMenu size={40}/></div>
      <div className="md:hidden"><Logo/></div>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};
