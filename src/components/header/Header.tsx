"use client";

import Image from "next/image";
import logo from "../../../public/images/logo_ufps.png";
import logoIng from "../../../public/images/LOGO_ING_ELECTROMECANICA.png"

const Header = () => {
  return (
    <div className="bannerImage p-7">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center justify-center sm:justify-start">
          <Image src={logoIng} alt="Logo Ingeniería Electromecánica" width={160} height={160} />
        </div>
        <div className="flex items-center justify-center mt-5 sm:mt-0">
          <Image src={logo} alt="Logo UFPS" width={160} height={160} />
        </div>
      </div>
    </div>
  );
};

export default Header;
