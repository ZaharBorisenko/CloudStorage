'use client';
import { Button } from '@/ui';
import { Logo } from '@/components';
import { useAuth, UserButton } from '@clerk/nextjs';

export const Header = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className='py-5 flex items-center justify-between'>
      <Logo />
      <div>
        {
          isSignedIn ? <UserButton afterSignOutUrl="/"/> : <Button text={'Войти'} href='/upload' />
        }
      </div>
    </div>
  );
};
