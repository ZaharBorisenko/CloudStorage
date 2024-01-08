import { FaCloudDownloadAlt } from 'react-icons/fa';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-x-1'>
      <FaCloudDownloadAlt size={30} color='#0083ff' />
      <p className='text-3xl font-bold text-[#1B466A]'>
        <span className='font-black text-[#0083ff]'>Cloud</span>
        Storage
      </p>
    </Link>
  );
};
