import { FaCloudDownloadAlt } from 'react-icons/fa';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-x-1'>
      <div className='md:hidden'>
        <FaCloudDownloadAlt size={30} color='#0083ff' />
      </div>
      <div className='hidden md:block'>
        <FaCloudDownloadAlt size={40} color='#0083ff' />
      </div>
      <p className='text-2xl font-bold md:text-3xl text-[#1B466A]'>
        <span className='font-black text-[#0083ff]'>Cloud</span>
        Storage
      </p>
    </Link>
  );
};
