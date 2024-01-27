'use client';
import { FC, useState } from 'react';
import { IconType } from 'react-icons';
import { toast } from 'react-toastify';

type props = {
  disabled: boolean;
  value: string;
  setValue?: (value: string) => void;
  placeholder?: string;
  icon?: IconType;
  icon2?: IconType;
};
export const Input: FC<props> = ({
  disabled,
  value,
  setValue,
  placeholder,
  icon,
  icon2,
}) => {
  const [iconActive, setIconActive] = useState<boolean>(false);
  const handleIcon = () => {
    setIconActive(true);
    navigator.clipboard.writeText(value);
    toast.success('Ссылка скопирована в буфер обмена', {
      autoClose: 1500,
      position: 'top-center',
    });
  };
  return (
    <div className='relative'>
      <input
        placeholder={placeholder}
        onChange={e => setValue && setValue(e.target.value)}
        className='border-2 w-full py-2 px-3 rounded-lg outline-blue-500'
        value={value}
        disabled={disabled}
      />
      <button
        className='absolute right-2 top-2 cursor-pointer'
        onClick={() => handleIcon()}
      >
        {!iconActive
          ? icon && icon({ size: 26, color: '#0083ff' })
          : icon2 && icon2({ size: 26, color: '#0083ff' })}
      </button>
    </div>
  );
};
