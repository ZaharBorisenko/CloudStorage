import { MdOutlineCloudUpload } from 'react-icons/md';
import { ChangeEvent, useState } from 'react';
import {
  FilePreview,
  ProgressBar,
} from '@/app/(dashboard)/(routes)/upload/_components';
import { Button } from '@/ui';
import { toast } from 'react-toastify';

export const UploadForm = ({
  uploadBtnClick,
  progress,
}: {
  uploadBtnClick: (file: File) => void;
  progress: number;
}) => {
  const [file, setFile] = useState<File | null>(null)!;
  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const validImageTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/raw',
      'image/psd',
      'image/tiff',
      'image/svg'
    ];
    const uploadsFile = e.target.files[0];
    if (validImageTypes.includes(uploadsFile.type)) {
      setFile(uploadsFile);
    }else {
      toast.warning('Извините, сейчас для загрузки доступны только изображения',
        {position: "top-center", autoClose: 3000}
      )
    }
  };
  const handleDeleteFile = () => {
    setFile(null);
  };
  return (
    <div>
      <div className='flex items-center justify-center px-3 lg:px-0 max-w-[800px] xl:w-[800px]'>
        <label
          form='dropzone-file'
          className='flex flex-col items-center justify-center w-full h-64 border-4 border-blue-400 border-dashed
        rounded-lg cursor-pointer bg-blue-100 transition duration-300 hover:bg-blue-200'
        >
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <div className='mb-4 animate-bounce'>
              <MdOutlineCloudUpload color={'#0083ff'} size={50} />
            </div>
            <p className='mb-2 text-sm lg:text-lg text-gray-500 dark:text-gray-400 text-center'>
              <span className='text-[#0083ff] font-bold'>
                Нажмите{' '}
              </span>
              на область или
              <span className='text-[#0083ff] font-bold'>
                {' '}
                Перетащите{' '}
              </span>{' '}
              файлы для загрузки
            </p>
          </div>
          <input
            id='dropzone-file'
            type='file'
            className='hidden'
            onChange={e => handleUploadFile(e)}
          />
        </label>
      </div>

      <div>
        {progress !== 100 && (
          <div>
            {file && (
              <div className='px-3'>
                <FilePreview
                  file={file}
                  handleDeleteFile={handleDeleteFile}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {progress !== 100 && (
        <div>
          {progress <= 0 ? (
            <div className='flex justify-center mt-10'>
              <button
                onClick={() => uploadBtnClick(file!)}
                disabled={!file}
                className='bg-[#0083ff] px-3 py-1 text-white font-medium rounded-lg md:px-5
          md:py-2 sm:text-xl disabled:bg-gray-500'
              >
                Загрузить
              </button>
            </div>
          ) : (
            <div className='mt-10'>
              <ProgressBar progress={progress} />
            </div>
          )}
        </div>
      )}

      {progress === 100 && (
        <div className='text-center mt-4'>
          <p className='mb-4 text-2xl font-bold'>
            Загрузка завершена!
          </p>
        </div>
      )}
    </div>
  );
};
