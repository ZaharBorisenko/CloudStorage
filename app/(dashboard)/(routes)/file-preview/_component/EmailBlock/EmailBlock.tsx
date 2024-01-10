import { Input } from '@/ui';
import { useState } from 'react';
import { Label } from '@/components';

export const EmailBlock = () => {
  const [email, setEmail] = useState<string>('');
  return (
    <div>
      <div className="mt-10">
        <Label>Отправить файл по email</Label>
        <div className="mt-2">
          <Input
            disabled={false}
            value={email}
            copy={false}
            setValue={setEmail}
            placeholder='Введите email'
          />
        </div>
        <button className="w-full bg-[#0083ff] rounded-lg mt-5 py-3 text-lg text-white">Отправить email</button>
      </div>
    </div>
  );
};
