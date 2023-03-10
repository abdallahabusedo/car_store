import React from "react";

export default function Header() {
  return (
    <header className="absolute z-[99] w-full p-[60px]">
      <div className="flex items-center justify-between">
        <div className="font-black tracking-[2px] text-white">CAR SHOP.</div>
        <nav>
          <ul className="flex m-0 p-0">
            {["discover", "products", "solutions", "reach"].map(
              (lin, index) => {
                return (
                  <li className="mx-[60px] my-0" key={index}>
                    <a className="capitalize no-underline text-white" href="/">
                      {lin}
                    </a>
                  </li>
                );
              }
            )}
            <li className="btn">
              <a
                className=" bg-[#23232a] text-white font-semibold px-6 py-4 rounded-[10px] capitalize no-underline"
                href="/"
              >
                order
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
