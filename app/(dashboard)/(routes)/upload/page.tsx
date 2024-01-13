'use client';
import { UploadForm } from '@/app/(dashboard)/(routes)/upload/_components';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from '@firebase/storage';
import { app } from '@/firebaseConfig';
import { useEffect, useState } from 'react';
import { doc, getFirestore, setDoc } from '@firebase/firestore';
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '@/utils/generateRandomString';
import { useRouter } from 'next/navigation';

export default function Upload() {
  const [docId, setDocId] = useState<string | null>(null);
  const [uploadComplete, setUploadComplete] = useState(false);
  const db = getFirestore(app);
  const router = useRouter()
  const { user } = useUser();
  const [progress, setProgress] = useState<number>(0);
  const storage = getStorage(app);

  const saveInfo = async (file: File, fileUrl: any) => {
    const documentId = generateRandomString();
    setDocId(documentId)
    await setDoc(doc(db, 'uploadedFile', documentId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      password: '',
      id: documentId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + '/' + documentId,
    });
  };

  const uploadBtnClick = (file: File) => {
    const storageReference = ref(
      storage,
      `upload-files/${file.name}`,
    );
    const uploadTask = uploadBytesResumable(
      storageReference,
      file,
      // @ts-ignore
      file.type,
    );

    uploadTask.on('state_changed', snapshot => {
      const progress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      const progressFixed = progress.toFixed(0);
      setProgress(+progressFixed);

      progress === 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          saveInfo(file, downloadURL);
          setUploadComplete(true)
        });
    });
  };
  console.log(`docIdState:${docId}`);
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        router.push(`/file-preview/${docId}`)
      },2000)
    }
  }, [uploadComplete]);

  return (
    <div>
      <h1 className='text-center mt-10 max-w-3xl text-lg font-medium mx-auto lg:text-2xl'>
        Начните
        <span className='text-[#0083ff] font-bold'> загружать </span>
        файлы и
        <span className='text-[#0083ff] font-bold'> делиться </span>
        ими
      </h1>
      <div className='flex justify-center mt-20'>
        <UploadForm
          uploadBtnClick={uploadBtnClick}
          progress={progress}
        />
      </div>
    </div>
  );
}
