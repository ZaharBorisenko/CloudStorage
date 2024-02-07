'use client';
import { TbUpload, TbFiles } from 'react-icons/tb';
import { Logo } from '@/components';
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';

export const SideNav = ({setOpenSidebar}: {setOpenSidebar: (openSidebar: boolean) => void;}) => {
  const [activeLink, setActiveLink] = useState(0);
  const menuList = [
    {
      id: 1,
      name: 'Загрузить',
      icon: TbUpload,
      path: '/upload',
    },
    {
      id: 2,
      name: 'Файлы',
      icon: TbFiles,
      path: '/files',
    },
    // {
    //   id: 3,
    //   name: 'Обновить',
    //   icon: GrUpdate,
    //   path: '/upgrade',
    // },
  ];

  return (
    <div className='pt-5 border-r-2 shadow-sm'>
      <div className='border-b-2 mb-5 px-3 flex items-center gap-x-3'>
        <Logo />
        <AiOutlineClose className="md:hidden cursor-pointer" size={30} onClick={() => setOpenSidebar(false)}/>
      </div>
      <div>
        {menuList.map((list, index) => (
          <Link key={list.id} href={list.path}>
            <div
              onClick={() => {
                setActiveLink(index);
                setOpenSidebar(false)
              }}
              className={`hover:bg-gray-100 py-5 px-3 transition duration-100 cursor-pointer rounded
            ${activeLink === index ? 'bg-blue-100' : null}
            `}
            >
              <div className='flex items-center gap-x-2'>
                <div>{list.icon({ size: 30, color: '#0083ff' })}</div>
                <h2>{list.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
