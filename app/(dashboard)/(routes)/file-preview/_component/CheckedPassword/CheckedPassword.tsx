'use client';
import { useState } from 'react';
import { Input } from '@/ui';

export const CheckedPassword = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
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
          <Input
            placeholder="Введите пароль..."
            disabled={false}
            value={password}
            setValue={setPassword}
            copy={false}
          />
          <button className="mt-2 bg-[#0083ff] py-1 px-2 rounded-lg text-white text-lg">Сохранить</button>
        </div>
      )}
    </div>
  );
};
