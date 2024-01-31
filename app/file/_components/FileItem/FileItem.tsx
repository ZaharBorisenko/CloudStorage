'use client';
import { FileType } from '@/app/(dashboard)/(routes)/file-preview/[fileId]/page';
import { MdUploadFile } from 'react-icons/md';
import { InputPassword } from '@/app/(dashboard)/(routes)/file-preview/_component/CheckedPassword/InputPassword';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';

export const FileItem = ({ file }: { file: FileType | null }) => {
  const user = useUser();
  const userName = user.user?.fullName;
  const [passwordUser, setPasswordUser] = useState<string>('');
  const [openViewFile, setOpenViewFile] = useState<boolean>(false);
  const handleDownloadFile = () => {
    if (userName !== file?.userName) {
      if (file?.password === passwordUser) {
        window.open(file?.fileUrl);
      } else if (passwordUser.length === 0) {
        toast.error('Введите пароль указанный в email!', {
          position: 'top-center',
          autoClose: 2000,
        });
      } else {
        toast.error('Неправильный пароль!', {
          position: 'top-center',
          autoClose: 2000,
        });
      }
    }else {
      window.open(file?.fileUrl);
    }
  };

  return (
    <div className='shadow-md mt-10 pb-5 rounded-lg px-3'>
      <div className='px-5 pt-[20px] text-center'>
        {userName !== file?.userName && (
          <h1 className='text-center text-lg lg:text-xl 2xl:text-2xl mb-2'>
            Пользователь
            <span className='text-[#0083ff] font-bold'>
              {' '}
              {file?.userName}{' '}
            </span>
            поделился с вами файлом:
          </h1>
        )}

        <p className='text-sm text-gray-500 sm:text-base'>
          Информация о файле:
        </p>
      </div>

      {userName !== file?.userName ? (
        <div className='flex justify-center mt-5'>
          {!openViewFile ? (
            <div>
              <div>
                <div className='hidden md:block animate-bounce'>
                  <MdUploadFile color={'#0083ff'} size={100} />
                </div>
                <div className='block md:hidden'>
                  <MdUploadFile color={'#0083ff'} size={70} />
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={file ? file?.fileUrl : ''}
              alt='file'
              width={100}
              height={100}
              className='pointer-events-none'
            />
          )}
        </div>
      ) : (
        <div className='flex justify-center'>
          <Image
            src={file ? file?.fileUrl : ''}
            alt='file'
            width={100}
            height={100}
            className='pointer-events-none'
          />
        </div>
      )}

      <div className='flex justify-center mt-8'>
        <div>
          <p className='font-semibold text-base sm:text-lg text-gray-500 text-center '>
            {file?.fileName} ┊ {file?.fileType} ┊{' '}
            {file && (file.fileSize / (1024 * 1024)).toFixed(2)} Мб
          </p>
        </div>
      </div>

      <div>
        <div className='flex justify-center'>
          <div>
            {userName !== file?.userName && (
              <div>
                {file?.password ? (
                  <InputPassword
                    password={passwordUser}
                    setPassword={setPasswordUser}
                  />
                ) : (
                  <div className='text-gray-500 font-semibold text-base md:text-lg'>
                    Файл без пароля, скачивание доступно сразу!
                  </div>
                )}
              </div>
            )}

            <div className='flex justify-center mt-3 mb-4'>
              {
                userName !== file?.userName ?
                  <button
                    className={`${file?.password !== passwordUser ? 'bg-gray-500' : 'bg-[#0083ff]'} px-3 py-2 rounded-lg md:px-5 md:py-3 text-base md:text-lg font-semibold disabled:text-gray-800 text-white`}
                    onClick={() => handleDownloadFile()}
                  >
                    Скачать файл
                  </button>
                  :
                  <button
                    className={`bg-[#0083ff] px-3 py-2 rounded-lg md:px-5 md:py-3 text-base md:text-lg font-semibold disabled:text-gray-800 text-white`}
                    onClick={() => handleDownloadFile()}
                  >
                    Скачать файл
                  </button>
              }
            </div>
          </div>
        </div>
      </div>

      {userName !== file?.userName && (
        <div
          onClick={() => setOpenViewFile(!openViewFile)}
          className='text-center text-sm md:text-lg cursor-pointer'
        >
          {!openViewFile && (
            <p className=''>
              <span className='text-[#0083ff] font-semibold'>
                Нажмите
              </span>{' '}
              чтобы просмотреть файл
            </p>
          )}
          {openViewFile && (
            <p className=''>
              <span className='text-[#0083ff] font-semibold'>
                Нажмите
              </span>{' '}
              чтобы закрыть файл
            </p>
          )}
        </div>
      )}
    </div>
  );
};
