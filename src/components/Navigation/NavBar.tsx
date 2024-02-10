"use client";

import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import ThemeContext from "@/context/themeContext";
import { useContext } from "react";

const Navbar: React.FC = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <nav className="py-10 px-4 container mx-auto text-xl flex flex-wrap items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="font-black text-[#F27405]">
          LifaGuestHouse
        </Link>
      </div>

      <div className="flex-grow"></div>
      <ul className="flex items-center space-x-16">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Contacts</Link>
        </li>
      </ul>

      <div className="w-8"></div>

      <div className="flex items-center space-x-4">
        <li className="flex items-center">
          <Link href="/auth">
            <FaUserCircle className="cursor-pointer" />
          </Link>
        </li>
        <li className="ml-2" style={{ listStyle: "none" }}>
          {darkTheme ? (
            <MdOutlineLightMode
              className="cursor-pointer"
              onClick={() => {
                setDarkTheme(false);
                localStorage.removeItem("guesthouse-theme");
              }}
            />
          ) : (
            <MdDarkMode
              className="cursor-pointer"
              onClick={() => {
                setDarkTheme(true);
                localStorage.setItem("guesthouse-theme", "true");
              }}
            />
          )}
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
