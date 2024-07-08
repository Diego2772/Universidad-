"use client";

import { secondNavbarData } from "./Navbar.data";

const SecondNavbar = () => {
  return (
    <div className="bg-[#424242] text-white ">
      <ul className="flex justify-evenly items-center gap-2 text-xs">
        {secondNavbarData.map((item) => (
          <li key={item.id} className="px-3 py-7 cursor-pointer ">
            <p >
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondNavbar;
