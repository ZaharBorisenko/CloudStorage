'use client';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from '@firebase/firestore';
import { app } from '@/firebaseConfig';
import { useEffect, useState } from 'react';
import { FileType } from '@/app/(dashboard)/(routes)/file-preview/[fileId]/page';
import { useUser } from '@clerk/nextjs';
import { FileInfo } from '@/app/file/_components/FileInfo/FileInfo';
import Link from 'next/link';
import SkeletonFiles from '@/components/Skeleton/SkeletonFiles';

export default function Files() {
  const db = getFirestore(app);
  const user = useUser();
  const userName = user.user?.fullName;
  const [userFiles, setUserFiles] = useState<FileType[]>([]);

  const getUserFiles = async () => {
    if (userName) {
      const q = query(
        collection(db, 'uploadedFile'),
        where('userName', '==', userName),
      );

      try {
        const filesRef = await getDocs(q);
        const filesData = filesRef.docs.map(
          doc => doc.data() as FileType,
        );
        setUserFiles(filesData);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    }
  };

  useEffect(() => {
    user && getUserFiles();
  }, [userName]);

  function shortenString(originalString: string) {
    if (originalString.length > 12) {
      return originalString.slice(0, 12) + '...';
    }
    return originalString;
  }

  console.log(userFiles);

  return (
    <div>
      <div className='text-center mt-10'>
        <h1 className='text-lg md:text-2xl lg:text-3xl font-bold'>
          Мои файлы
        </h1>
        <h2 className='text-base font-medium md:text-lg text-gray-500'>
          Всего файлов:{' '}
          <span className='text-black font-extrabold'>
            {userFiles.length}
          </span>
        </h2>
      </div>

      {userFiles.length > 0 ? (
        <div className='flex flex-wrap justify-between max-w-[900px] gap-y-3 mx-auto mt-8'>
          {userFiles.map(file => (
            <div
              key={file.id}
              className='w-[32%] py-5 pt-3 pb-10 shadow shadow-gray-300'
            >
              <div className='text-center'>
                <FileInfo
                  title='FileName:'
                  text={shortenString(file.fileName)}
                />
                <FileInfo title='FileType:' text={file.fileType} />
                <FileInfo
                  title='FileSize:'
                  text={
                    (file.fileSize / (1024 * 1024)).toFixed(2) + 'Mb'
                  }
                />
                <div className='mt-10'>
                  <Link
                    target='_blank'
                    className='bg-orange-500 rounded-lg px-2 py-4 text-base md:text-lg font-medium text-gray-100'
                    href={`/file/${file.id}`}
                  >
                    Просмотр файла
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center text-center mx-auto">
          <SkeletonFiles/>
        </div>
      )}
    </div>
  );
}
