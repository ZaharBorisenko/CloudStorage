"use client"
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from '@firebase/firestore';
import { app } from '@/firebaseConfig';
import Link from 'next/link';
import { FileType } from '@/app/(dashboard)/(routes)/file-preview/[fileId]/page';

function FileView({params}: {params: {fileId:string}}) {
  const db = getFirestore(app)
  const [fileInfo, setFileInfo] = useState<FileType | null>(null);
  console.log(fileInfo);
  const getFileInfo = async () => {
    const docRef = doc(db, 'uploadedFile', params.fileId);
    const docSnap = await getDoc(docRef);

    //@ts-ignore
    if (docSnap.exists()) setFileInfo(docSnap.data());
  };
  useEffect(() => {
    params.fileId&&getFileInfo();
  }, []);
  return (
    <div>
      <h1>ваш файл</h1>
      <button onClick={()=> window.open(fileInfo?.fileUrl)}>Скачать файл ёбаный</button>
    </div>
  )
}
export default FileView;
