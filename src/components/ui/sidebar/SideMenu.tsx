"use client";

import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export const SideMenu = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
      )}

      {isSideMenuOpen && (
       
        <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" onClick={closeMenu}>
            
        </div>
      )}

      <nav className={
        clsx("fixed p-5 right-0 top-0 w-[500px] h-screen bg-blue-600 z-20 shadow-2xl transform transition-all duration-300",
            {
                "translate-x-full" : !isSideMenuOpen
            }
        )

      }>
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        <Link
          href={"/"}
          className="flex item-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        ></Link>
        <div className="flex flex-col gap-4 mt-16">
          <Link
            href="/"
            className="text-white text-lg p-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="text-white text-lg p-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/services"
            className="text-white text-lg p-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Servicios
          </Link>
          <Link
            href="/contact"
            className="text-white text-lg p-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Contacto
          </Link>
        </div>
      </nav>
    </div>
  );
};
