import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialaised font-bold`}>
            OnlineStore
          </span>
          <span> | Icesi </span>
        </Link>
      </div>
      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/deporte/"
        >
          Deporte
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/hogar/"
        >
          Hogar
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/automotor/"
        >
          Automotor
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/mascotas/"
        >
          Mascotas
        </Link>
      </div>
      {/* Iconos */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
            <IoSearchOutline className="w-5 h-5"/>
        </Link>
        <Link href="/cart" className="mx-2">
           <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white ">
                3 
            </span>
            <IoCartOutline className="w-5 h-5"/>
           </div>
        </Link>
        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">Menu</button>
      </div>
    </nav>
  );
};
