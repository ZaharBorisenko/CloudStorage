'use client';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';

export const CookiesModal = () => {
  const [closeModalCookie, setCloseModalCookie] = useState<boolean>(true);

  const closeCookie = () => {
    setCloseModalCookie(false)
    localStorage.setItem('cookieModal', 'true');

  }
  return (
    <div>
      {closeModalCookie && (
        <div className='fixed left-1/2 bottom-5 transform -translate-x-1/2 max-w-[700px] bg-gray-200 px-7 py-4 text-sm md:text-xl rounded-lg'>
          <div
            onClick={() => closeCookie()}
            className="absolute top-[-15px] bg-white cursor-pointer right-[-15px] p-1 rounded-lg">
            <CgClose size={30}/>
          </div>
          <div className='flex items-center gap-x-8'>
            <p className='font-semibold'>
              Сайт использует{' '}
              <span className='text-[#0083ff]'>cookie</span> - без них
              ничего не работает
            </p>
            <button
              onClick={() => closeCookie()}
              className='bg-orange-500 rounded-lg text-sm md:text-lg px-3 py-2 text-white font-semibold'
            >
              Хорошо
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
