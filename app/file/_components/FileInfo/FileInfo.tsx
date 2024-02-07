
export const FileInfo = ({title,text}: {title:string, text:string}) => {
  return (
    <div className="mt-3 border-b-2 flex justify-between items-center px-3">
      <h3 className="text-lg md:text-xl font-semibold text-black">{title}</h3>
      <p className="break-words text-gray-500 text-sm md:text-base">{text}</p>
    </div>
  );
};
