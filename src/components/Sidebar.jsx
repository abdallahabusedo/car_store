import Link from "next/link";
import React from "react";

function Sidebar() {
  const colors = [
    {
      color: "#f15946",
      href: "#car1",
    },
    {
      color: "#571ec1",
      href: "#car2",
    },
    {
      color: "#636567",
      href: "#car3",
    },
    {
      color: "#F7F48B",
      href: "#car4",
    },
    {
      color: "#FFCD60",
      href: "#car5",
    }
  ];
  return (
    <div>
      <ul className="absolute top-[250px] left-5 bg-white list-none flex flex-col gap-2 shadow-[rgba(74,79,97,0.25)_0px_13px_27px_-5px,rgba(74,79,97,0.3)_0px_8px_16px_-8px] my-[50px] px-[5px] py-[3px] rounded-[50px] ">
        {colors.map((c, index) => {
          return (
            <Link href={c.href} key={index}>
              <li
                style={{ backgroundColor: c.color }}
                className="w-[45px] h-[45px] flex items-center justify-center z-[1] cursor-pointer transition-all duration-200 ease-[ease-in-out] relative mb-4 rounded-[50px] border-4 border-solid border-white last:mb-0 hover:scale-[1.4]"
              ></li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
