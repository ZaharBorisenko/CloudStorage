import { Input } from '@/ui';
import { FC, useState } from 'react';
import { Label } from '@/components';
import { toast } from 'react-toastify';

type propsType = {
  sendEmail: () => void,
  email: string,
  setEmail: (email: string) => void,
}
export const EmailBlock:FC<propsType> = ({sendEmail, email,setEmail}) => {
  const handleSendEmail = () => {
    try {
      sendEmail()
      toast.success('Файл успешно отправлен по почте!', {position:'top-center', autoClose: 1500,})
    }catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <div className="mt-10">
        <Label>Отправить файл по email</Label>
        <div className="mt-2">
          <Input
            disabled={false}
            value={email}
            setValue={setEmail}
            placeholder='Введите email'
          />
        </div>
        <button
          onClick={() => handleSendEmail()}
          className="w-full bg-[#0083ff] rounded-lg mt-5 py-3 text-lg text-white">
          Отправить email
        </button>
      </div>
    </div>
  );
};
