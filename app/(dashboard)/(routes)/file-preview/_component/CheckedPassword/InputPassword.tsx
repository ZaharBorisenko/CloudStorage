import React, { FC, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type props = {
  password: string;
  setPassword: (password: string) => void;
};
export const InputPassword: FC<props> = ({
  password,
  setPassword,
}) => {
  const [openPassword, setOpenPassword] = useState(false);
  return (
    <div className='relative'>
      <input
        type={`${!openPassword ? 'password' : 'text'}`}
        value={password}
        onChange={e => setPassword(e.target.value)}
        className='border-2 w-full py-2 px-3 rounded-lg outline-blue-500'
      />
      <button
        onClick={() => setOpenPassword(!openPassword)}
        className='absolute right-2 top-2 cursor-pointer'
      >
        {!openPassword ? (
          <FaEye size={28} color={'0083ff'} />
        ) : (
          <FaEyeSlash size={28} color={'0083ff'} />
        )}
      </button>
    </div>
  );
};
