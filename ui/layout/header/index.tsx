"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import data from "../../ui-en.json";
import Logo from "../logo";

/**
 * Interface for navigation items in the header.
 * @interface
 */
interface HeaderItem {
  /**
   * @property {string} name - The display name of the navigation item.
   */
  name: string;

  /**
   * @property {string} url - The URL to navigate to when the item is clicked.
   */
  url: string;
}

/**
 * Header component that includes the site logo, navigation links,
 * a search icon, language selection, and a sign-in button.
 *
 * @component
 * @returns {JSX.Element} The rendered header component
 */
export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-[9999] top-0 p-4 lg:p-10 w-full flex items-center justify-between transition-colors duration-300 ${
        isScrolled ? "bg-black bg-opacity-80" : "bg-transparent"
      }`}>
      <Logo />

      {/* Navigation links for large screens */}
      <nav className="items-center space-x-4 divide-x-[1px] divide-white hidden lg:flex">
        {data.header.nav.map((item: HeaderItem) => (
          <Link key={item.name} href={item.url} className="px-5 uppercase hover:text-lime duration-300 cursor-pointer">
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center">
        {/* Search and language selector */}
        <div className="flex items-center divide-x-[1px]">
          <div className="px-3">
            <IoIosSearch />
          </div>
          <div className="flex items-center space-x-2 px-3">
            <BiWorld fill="#B0DC00" />
            <p>EN</p>
          </div>
        </div>

        {/* Sign In button */}
        <button className="uppercase px-3 border-lime border-[1px] border-solid rounded-full hover:bg-lime hover:text-black duration-300">
          Sign In
        </button>
      </div>
    </header>
  );
}
