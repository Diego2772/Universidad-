"use client"
import { FaUsers, FaUserGraduate, FaPencilRuler, FaSuitcase, FaBars } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex h-10 w-full shrink-0 items-center px-3 md:px-6 bg-[#aa1916] z-50">
      <div className="flex w-full justify-between items-center">
        <div className="hidden lg:flex">
        <nav className="flex gap-6 text-sm font-normal md:flex-row md:items-center md:gap-5 md:text-xs lg:gap-6 text-white">
            <Link href="https://ww2.ufps.edu.co/universidad/perfiles/aspirantes/952" className="flex items-center gap-2 text-sm font-normal md:text-xs text-white" prefetch={false}>
              <FaUsers className="h-4 w-4 text-white" />
              Aspirantes
            </Link>
            <Link href="https://ww2.ufps.edu.co/universidad/perfiles/estudiantes/953" className="flex items-center gap-2 text-sm font-normal md:text-xs text-white" prefetch={false}>
              <FaBookOpenReader className="h-4 w-4 text-white" />
              Estudiantes
            </Link>
            <Link href="https://ww2.ufps.edu.co/universidad/perfiles/egresados/954" className="flex items-center gap-2 text-sm font-normal md:text-xs text-white" prefetch={false}>
              <FaUserGraduate className="h-4 w-4 text-white" />
              Graduados
            </Link>
            <Link href="https://docentes.ufps.edu.co/" className="flex items-center gap-2 text-sm font-normal md:text-xs text-white" prefetch={false}>
              <FaPencilRuler className="h-4 w-4 text-white" />
              Docentes
            </Link>
            <Link href="#" className="flex items-center gap-2 text-sm font-normal md:text-xs text-white" prefetch={false}>
              <FaSuitcase className="h-4 w-4 text-white" />
              Empresarios
            </Link>
          </nav>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            className="rounded-md bg-gray-100 p-2 text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
          {isOpen && (
            <div className="absolute top-20 left-0 right-0 z-50 bg-white shadow-lg dark:bg-gray-950">
              <nav className="flex flex-col">
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-3 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  <FaUsers className="h-5 w-5 text-black dark:text-white" />
                  Aspirantes
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-3 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  <FaBookOpenReader className="h-5 w-5 text-black dark:text-white" />
                  Estudiantes
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-3 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  <FaUserGraduate className="h-5 w-5 text-black dark:text-white" />
                  Graduados
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-3 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  <FaPencilRuler className="h-5 w-5 text-black dark:text-white" />
                  Docentes
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-3 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  <FaSuitcase className="h-5 w-5 text-black dark:text-white" />
                  Empresarios
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
