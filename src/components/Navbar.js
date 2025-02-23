import React from "react";
import { LuBell } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-[#13274F] text-white flex p-5 justify-between items-center">
      <div className="uppercase tracking-widest text-2xl font-semibold first-letter:text-[#00ffff]">
        hours
      </div>
      <div>
        <ul className="flex text-base gap-5 font-thin items-center">
          <li className="cursor-pointer hover:border-b-2 hover:border-b-[#00ffff] hover:border-b-2 hover:border-b-[#00ffff]">
            Dashboard
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-b-[#00ffff]">
            Projects
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-b-[#00ffff]">
            Team
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-b-[#00ffff]">
            Clients
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-b-[#00ffff]">
            Time
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-b-[#00ffff]">
            Reports
          </li>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <div className="relative">
          <LuBell />
          <div className="size-1 bg-red-500 rounded-full absolute top-0 right-1"></div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img
              alt="user profile pic"
              src="https://picsum.photos/200/200"
              className="size-10 rounded-full"
            />
          </div>
          <div className="flex gap-2 items-center text-base font-thin">
            <p>Mario</p>
            <div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
