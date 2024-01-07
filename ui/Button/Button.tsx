import Link from 'next/link';

export const Button = ({
  text,
  href,
}: {
  text: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className='bg-[#0083ff] px-3 py-1 text-white font-medium rounded-lg md:px-5 md:py-2 sm:text-xl'
    >
      {text}
    </Link>
  );
};
