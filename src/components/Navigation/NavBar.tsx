// components/Navbar.tsx
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Navbar: React.FC = () => {
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
        <Link href="/auth">
          <FaUserCircle className="cursor-pointer" />
        </Link>
        <MdDarkMode className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
