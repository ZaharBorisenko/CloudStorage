'use client';
import { useState } from 'react';
import { doc, getFirestore, updateDoc } from '@firebase/firestore';
import { app } from '@/firebaseConfig';
import { toast } from 'react-toastify';
import { InputPassword } from '@/app/(dashboard)/(routes)/file-preview/_component/CheckedPassword/InputPassword';

export const CheckedPassword = ({ fileId }: { fileId: string }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const db = getFirestore(app);
  const onSavePassword = async () => {
    const docRef = doc(db, 'uploadedFile', fileId);
    try {
      await updateDoc(docRef, {
        password,
      });
      toast.success('Пароль изменён', {
        autoClose: 1500,
        position: 'top-center',
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <label className='flex items-center gap-x-4'>
        <input
          className='w-6 h-6 rounded-lg ml-1'
          type='checkbox'
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
        <p>Включить пароль?</p>
      </label>

      {checked && (
        <div className='mt-3'>

          <InputPassword password={password} setPassword={setPassword}/>

          <button
            onClick={() => onSavePassword()}
            className='mt-2 bg-[#0083ff] py-1 px-2 rounded-lg text-white text-lg'
          >
            Сохранить
          </button>
        </div>
      )}
    </div>
  );
};
