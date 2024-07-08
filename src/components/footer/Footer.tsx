'use client';

import Link from "next/link";
import logo from "../../../public/images/logo_ufps.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#424242] text-gray-400 py-8 sm:py-12 mt-auto w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex items-center">
          <Image
            alt="University Logo"
            className="h-32"
            height={60}
            src={logo}
            style={{
              aspectRatio: "120/40",
              objectFit: "cover",
            }}
            width={120}
          />
        </div>
        <div className="space-y-2">
          <h4 className="text-red-500 font-medium">About</h4>
          <ul className="space-y-1">
            <li>
              <Link className="hover:text-gray-200" href="#">
                About the University
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                History
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Leadership
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-red-500 font-medium">Programs</h4>
          <ul className="space-y-1">
            <li>
              <Link className="hover:text-gray-200" href="#">
                Undergraduate
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Graduate
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Online
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-red-500 font-medium">Contact</h4>
          <ul className="space-y-1">
            <li>
              <Link className="hover:text-gray-200" href="#">
                Admissions
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Contact Us
              </Link>
            </li>
            <li>
              <a className="hover:text-gray-200" href="#">
                +1 (234) 567-890
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="#">
                info@university.edu
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 text-center">
        <p className="text-sm">© 2024 Universidad Francisco de Paula Santander. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
