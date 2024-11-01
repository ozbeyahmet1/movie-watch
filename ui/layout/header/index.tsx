import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import data from "../../ui-en.json";
import Logo from "../logo";
interface HeaderItem {
  name: string;
  url: string;
}
export default function Header() {
  return (
    <header className="fixed top-0 p-4 lg:p-10 w-full flex items-center justify-between">
      <Logo />
      <nav className="items-center space-x-4 divide-x-[1px] divide-white hidden lg:flex">
        {data.header.nav.map((item: HeaderItem) => (
          <Link key={item.name} href={item.url} className="px-5 uppercase hover:text-lime duration-300 cursor-pointer">
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center">
        <div className="flex items-center divide-x-[1px]">
          <div className="px-3">
            <IoIosSearch />
          </div>
          <div className="flex items-center space-x-2 px-3">
            <p>
              <BiWorld fill="#B0DC00" />
            </p>
            <p>EN</p>
          </div>
        </div>
        <button className="uppercase px-3 border-lime border-[1px] border-solid rounded-full hover:bg-lime hover:text-black duration-300">
          Sign In
        </button>
      </div>
    </header>
  );
}
