import { FC } from 'react';
import { FaRegCopy } from 'react-icons/fa';

type props = {
  disabled: boolean;
  value: string;
  copy: boolean;
  setValue?: (value: string) => void;
  placeholder?: string;
};
export const Input: FC<props> = ({
  disabled,
  value,
  copy,
  setValue,
  placeholder,
}) => {
  return (
    <div className='relative'>
      <input
        placeholder={placeholder}
        onChange={e => setValue && setValue(e.target.value)}
        className='border-2 w-full py-2 px-3 rounded-lg outline-blue-500'
        value={value}
        disabled={disabled}
      />
      {copy && (
        <button className='absolute right-2 top-2 cursor-pointer'>
          <FaRegCopy size={26} color='#0083ff' />
        </button>
      )}
    </div>
  );
};
