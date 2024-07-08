"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Button from "@/components/ui/Button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaBars } from "react-icons/fa";
import ticgo from "../../../public/images/menu_conticgo.jpg";
import { links } from "./Navbar.data"; // Importar los enlaces

export default function Component() {
  return (
    <header className="flex h-20 md:h-20 w-full shrink-0 items-center px-4 md:px-6 bg-[#424242]">
      <Link href="/" className="mr-6 flex items-center h-full p-0 m-0 text-white" prefetch={false}>
        <p>Inicio</p>
        <span className="sr-only">Inicio</span>
      </Link>
    
      <Link href="https://ww2.ufps.edu.co/ufps_conticgo" className="mr-6 flex items-center h-full p-0 m-0" prefetch={false}>
        <img 
          src={ticgo.src} // URL de la imagen
          alt="Acme Inc"
          className="h-full object-contain p-0 m-0" // Ajusta el alto de la imagen al del navbar
        />
        <span className="sr-only">Acme Inc</span>
      </Link>
      
      <nav className="hidden lg:flex bg-[#424242] flex-grow overflow-hidden">
        <ul className="flex items-center gap-4 flex-wrap text-sm md:text-xs lg:text-sm">
          {links.map((link, index) => (
            <li key={index}>
              {link.submenu ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="inline-flex h-9 items-center justify-center rounded-md bg-[#424242] px-4 py-2 text-sm md:text-xs lg:text-sm font-medium text-white transition-colors hover:bg-gray-600 focus:bg-gray-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    {link.name}
                    <MdOutlineKeyboardArrowDown className="ml-2 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {link.sublinks.map((sublink, subIndex) => (
                      <div key={subIndex}>
                        {sublink.sublink.map((sublinkItem, subItemIndex) => (
                          <DropdownMenuItem key={subItemIndex}>
                            <Link href={sublinkItem.link} prefetch={false}>
                              {sublinkItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#424242] px-4 py-2 text-sm md:text-xs lg:text-sm font-medium text-white transition-colors hover:bg-gray-600 focus:bg-gray-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="ml-auto lg:hidden">
            <FaBars className="h-6 w-6 text-white" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col gap-4 py-6 bg-[#424242]">
           
            <nav className="grid gap-2">
              <Link
                href="/"
                className="flex w-full items-center py-2 text-lg font-semibold text-white"
                prefetch={false}
              >
                Inicio
              </Link>
              {links.map((link, index) => (
                <div key={index}>
                  {link.submenu ? (
                    <Collapsible>
                      <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold text-white [&[data-state=open]>svg]:rotate-90">
                        {link.name}
                        <MdOutlineKeyboardArrowRight className="ml-auto h-5 w-5 transition-all text-white" />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="pl-4">
                          {link.sublinks.map((sublink, subIndex) => (
                            <div key={subIndex} className="pt-2">
                              {sublink.sublink.map((sublinkItem, subItemIndex) => (
                                <Link
                                  key={subItemIndex}
                                  href={sublinkItem.link}
                                  className="block text-sm text-white"
                                  prefetch={false}
                                >
                                  {sublinkItem.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link
                      href="#"
                      className="flex w-full items-center py-2 text-lg font-semibold text-white"
                      prefetch={false}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
