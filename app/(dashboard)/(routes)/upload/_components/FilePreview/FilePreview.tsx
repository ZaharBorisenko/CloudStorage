import Image from 'next/image';
import { IoClose } from "react-icons/io5";
import { ToolTip } from '@/components/ToolTip/ToolTip';

export const FilePreview = ({
  file,
  handleDeleteFile,
}: {
  file: File;
  handleDeleteFile: () => void;
}) => {
  return (
    <div className='border-2 py-2 mt-4 pr-4 rounded-lg flex gap-x-6 sm:gap-x-0 sm:justify-between items-center'>

      <div className="flex items-center gap-x-2">
        <Image src='/file.png' alt='file' width={50} height={50} />

        <div>
          <h3 className='font-bold text-lg'>{file.name}</h3>
          <p className='text-gray-500 text-base'>
            {' '}
            {file.type} / {(file.size / 1024 / 1024).toFixed(2)}MB
          </p>
        </div>
      </div>

      <div>
        <ToolTip tooltip="удалить">
          <button
            onClick={handleDeleteFile}
            className="cursor-pointer hover:bg-blue-100 transition duration-200 rounded-lg"
          >
            <IoClose size={30}/>
          </button>
        </ToolTip>
      </div>
    </div>
  );
};
