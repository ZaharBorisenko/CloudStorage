import Image from 'next/image';
import { FileType } from '@/app/(dashboard)/(routes)/file-preview/[fileId]/page';

export const PreviewImg = ({fileInfo}: {fileInfo:FileType}) => {
  return (
    <div className='border-2 rounded-lg w-full'>
      <div className='flex justify-center'>
        <Image
          className='rounded-lg my-10'
          src={fileInfo?.fileUrl}
          alt=''
          width={180}
          height={150}
        />
      </div>
      <div className='break-all w-[200px] text-center mx-auto mb-10'>
        <h3 className='font-bold mb'>{fileInfo?.fileName}</h3>
        <div>
          <p className='text-gray-500'>
            {fileInfo?.fileType} |{' '}
            {(fileInfo?.fileSize / 1024 / 1024).toFixed(3)} MB
          </p>
        </div>
      </div>
    </div
    >
  );
};
