'use client';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from '@firebase/firestore';
import { app } from '@/firebaseConfig';
import Link from 'next/link';
import { FileType } from '@/app/(dashboard)/(routes)/file-preview/[fileId]/page';
import { Logo } from '@/components';
import { FileItem } from '@/app/file/_components/FileItem/FileItem';

function FileView({ params }: { params: { fileId: string } }) {
  const db = getFirestore(app);
  const [fileInfo, setFileInfo] = useState<FileType | null>(null);
  const getFileInfo = async () => {
    const docRef = doc(db, 'uploadedFile', params.fileId);
    const docSnap = await getDoc(docRef);

    //@ts-ignore
    if (docSnap.exists()) setFileInfo(docSnap.data());
  };
  useEffect(() => {
    params.fileId && getFileInfo();
  }, []);
  return (
    <div className="flex justify-center items-center mt-32">
      <div>
        <div className="flex justify-center"><Logo /></div>
        {/*<button onClick={()=> window.open(fileInfo?.fileUrl)}>Скачать файл ёбаный</button>*/}
        <FileItem file={fileInfo}/>
      </div>
    </div>
  );
}

export default FileView;
