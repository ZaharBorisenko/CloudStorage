"use client"
import { FileType } from '@/app/(dashboard)/(routes)/file-preview/[fileId]/page';
import { MdUploadFile } from 'react-icons/md';
import { InputPassword } from '@/app/(dashboard)/(routes)/file-preview/_component/CheckedPassword/InputPassword';
import { useState } from 'react';

export const FileItem = ({ file }: { file: FileType | null }) => {
  const [passwordUser, setPasswordUser] = useState('');
  console.log(passwordUser);
  console.log(file);
  return (
    <div className='shadow-md mt-10 rounded-lg'>
      <div className='px-5 pt-[20px] text-center'>
        <h1 className='text-center text-lg lg:text-xl 2xl:text-2xl mb-2'>
          Пользователь
          <span className='text-[#0083ff] font-bold'>
            {' '}
            {file?.userName}{' '}
          </span>
          поделился с вами файлом:
        </h1>

        <p className='text-sm text-gray-500 sm:text-base'>
          Информация о файле:
        </p>
      </div>

      <div className='flex justify-center mt-5'>
        <div>
          <div className='hidden md:block'>
            <MdUploadFile color={'#0083ff'} size={100} />
          </div>
          <div className='block md:hidden'>
            <MdUploadFile color={'#0083ff'} size={70} />
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-8'>
        <div>
          <p className='font-semibold text-base sm:text-lg text-gray-500 text-center '>
            {file?.fileName} ┊ {file?.fileType} ┊{' '}
            {file &&
              Math.round(file?.fileSize / (1024 * 1024)).toFixed(
                0,
              )}{' '}
            Мб
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div>
          {file?.password ? (
            <InputPassword password={passwordUser} setPassword={setPasswordUser} />
          ) : (
            <div className="text-gray-500 font-semibold text-base md:text-lg">Файл без пароля, скачивание доступно сразу!</div>
          )}

          <div className="flex justify-center mt-3 mb-7">
            <button
              className="bg-[#0083ff] disabled:bg-gray-500 px-3 py-2 rounded-lg md:px-5 md:py-3 text-base md:text-lg font-semibold disabled:text-gray-800 text-white"
              disabled={file?.password !== passwordUser}
              onClick={()=> window.open(file?.fileUrl)}>
              Скачать файл
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
