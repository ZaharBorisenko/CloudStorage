'use client';
import { Header, Info } from '@/components';
import { Button } from '@/ui';
import { useAuth } from '@clerk/nextjs';
import { InfoBlock } from '@/components/Info/InfoBlock';

export default function Home() {
  const { isSignedIn } = useAuth();
  return (
    <div className='max-w-screen-xl mx-auto px-3'>
      <Header />
      <div className='mt-5 lg:mt-20 lg:flex items-center'>
        <div>
          <h1 className='text-3xl text-center mx-auto lg:text-start sm:text-5xl'>
            <span className='font-bold text-[#0083ff]'>Cloud</span> -
            безопасное <br /> карманное облако <br /> для ваших файлов
          </h1>
          <p className='text-[#293553] text-base text-center mt-6 lg:text-start sm:text-2xl'>
            Храните и обменивайтесь файлами, <br /> не беспокоясь о
            сохранности.
          </p>

          <div className='hidden sm:flex sm:justify-center mt-6 lg:block'>
            <Button
              text={`${isSignedIn ? 'Перейти в облако' : 'Начать'}`}
              href='/upload'
            />
          </div>
        </div>

        <img
          src='/phones-preview.png'
          className='w-[400px] mx-auto lg:w-[500px]'
          alt=''
        />
      </div>

      <div>
        <Info />
      </div>
    </div>
  );
}
