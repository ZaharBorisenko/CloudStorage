import { GiCheckedShield } from "react-icons/gi";
import { MdOutlineAccessTime } from "react-icons/md";

export const InfoBlock = () => {

  const infoList = [
    {
      id: 1,
      title: "Безопасное управление ссылками",
      text: "Вы сами создаете пароль для ваших файлов и делитесь ими",
      icon: GiCheckedShield
    },
    {
      id: 1,
      title: "Ваши данные всегда под рукой",
      text: "Доступ к вашим файлам с любого устройства и в любое время",
      icon: MdOutlineAccessTime
    },
  ]

  return (
    <div className="flex justify-center lg:justify-start">
      <div >
        <h1 className='text-2xl'>
          Cloud -
          <span className='text-[#0083ff]'>
            <br />
            это
          </span>
        </h1>
        <div className="mt-5 md:flex md:items-center md:gap-x-2">
          {
            infoList.map((list,index) => (
              <div key={index} className="mb-10">
                {list.icon({ size: 60, color: '#0083ff'})}
                <div className="text-[#293553] md:max-w-[250px]">
                  <h3 className="text-base font-semibold mt-2 mb-2">{list.title}</h3>
                  <p className="text-sm">{list.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
