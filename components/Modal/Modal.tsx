'use client';
import React, { FC, useEffect, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

type props = {
  children: React.ReactNode;
};
export const Modal: FC<props> = ({ children }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true)
    },8000)
  }, []);

  return (
    <div
      onClick={() => setOpenModal(false)}
      className={`${!openModal && 'hidden'} cursor-pointer fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white w-[600px] flex justify-center mx-auto py-3 rounded-lg text-center relative cursor-default'>
        <IoCloseSharp size={40} className="absolute right-4 top-4 cursor-pointer" onClick={() => setOpenModal(false)}/>
        {children}
      </div>
    </div>
  );
};
