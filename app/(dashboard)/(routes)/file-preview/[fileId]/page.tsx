'use client';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from '@firebase/firestore';
import { app } from '@/firebaseConfig';
import Image from 'next/image';
import { Input } from '@/ui';
import { PreviewImg } from '@/app/(dashboard)/(routes)/file-preview/_component/PreviewImg/PreviewImg';
import { Label } from '@/components';
import { CheckedPassword } from '@/app/(dashboard)/(routes)/file-preview/_component/CheckedPassword/CheckedPassword';
import { EmailBlock } from '@/app/(dashboard)/(routes)/file-preview/_component/EmailBlock/EmailBlock';

export interface FileType {
  fileName: string;
  fileSize: number;
  fileType: string;
  fileUrl: string;
  id: string;
  password: string;
  shortUrl: string;
  userEmail: string;
  userName: string;
}

export default function FilePreview({
  params,
}: {
  params: { fileId: string };
}) {
  const db = getFirestore(app);
  const [fileInfo, setFileInfo] = useState<FileType | any>();
  console.log(fileInfo);
  const getFileInfo = async () => {
    const docRef = doc(db, 'uploadedFile', params.fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) setFileInfo(docSnap.data());
  };

  useEffect(() => {
    params.fileId && getFileInfo();
  }, []);
  return (
    <div className='mt-20'>
      {fileInfo ? (
        <div className='max-w-[800px] mx-auto items-center flex gap-x-10 flex-wrap sm:flex-nowrap'>
          <div className='w-full'>
            <PreviewImg fileInfo={fileInfo} />
          </div>

          <div className='w-full'>
            <div>
              <Label>Short Url</Label>
              <Input
                disabled={true}
                copy={true}
                value={fileInfo.shortUrl}
              />
            </div>

            <div className='mt-10'>
              <CheckedPassword/>
            </div>

            <div>
              <EmailBlock/>
            </div>

          </div>
        </div>
      ) : (
        <div>загрузка</div>
      )}
    </div>
  );
}
