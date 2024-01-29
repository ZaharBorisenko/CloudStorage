import { FileType } from '@/app/(dashboard)/(routes)/file-preview/[fileId]/page';

export const FileItem = ({ file }: { file: FileType | null }) => {
  console.log(file);
  return (
    <div className='shadow-md mt-10 rounded-lg'>
      <div className='px-5 py-[30px]'>
        <h1 className='text-center'>
          Пользователь
          <span className='text-[#0083ff] font-bold'> {file?.userName} </span>
          поделился с вами файлом:
        </h1>
      </div>
    </div>
  );
};
