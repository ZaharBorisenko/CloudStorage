import Image from 'next/image';

export const FilePreview = ({file}: {file:File}) => {
  return (
    <div className='mt-10 flex items-center gap-x-4'>
      <Image src="/file.png" alt="file" width={50} height={50} />

      <div>
        <p>{file.name}</p>
        <p> {file.type} / {(file.size/1024 / 1024).toFixed(2)}MB</p>
      </div>
    </div>
  );
};
