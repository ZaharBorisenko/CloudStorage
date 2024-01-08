
export const ProgressBar = ({progress}: {progress:number}) => {
  return (
    <div>
      <div className="w-full mx-auto h-[10px] rounded-[10px] bg-[#E7E7E7]">
        <div
          style={{width: `${progress.toFixed(0)}%`}}
          className={`h-full rounded-[10px] bg-[#0083ff] transition-width duration-500 ease-out`}></div>
      </div>
      <p className="mt-3 text-[22px] text-center text-[#000012] font-medium">{progress}%</p>
    </div>
  );
};
