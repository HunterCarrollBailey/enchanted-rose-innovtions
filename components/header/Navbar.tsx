"use client";
import BaseComponentProps from "@/components/BaseComponent";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import NavBarLink from "@/components/header/NavBarLink";

interface NavBarProps extends BaseComponentProps {
  brand?: string;
}

const Navbar = (props: NavBarProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);
  return (
    <nav
      className={`sticky top-0 flex w-full flex-col rounded-b-2xl bg-slate-800/70 p-4 text-slate-200 shadow-md shadow-cyan-400 backdrop-blur md:flex-row md:py-0`}
    >
      <div className="flex items-center justify-around">
        <h1 className="text-xl font-bold text-slate-200">{props.brand}</h1>
        <FaBars
          className="text-xl md:invisible"
          role="button"
          onClick={toggleNav}
        />
      </div>
      <ul
        className={`flex w-full flex-col justify-start overflow-hidden transition-all duration-700 ease-in md:ml-auto md:w-auto md:flex-row ${navOpen ? "max-h-screen opacity-100 md:max-h-fit md:opacity-100" : "max-h-0 opacity-0 md:max-h-fit md:opacity-100"}`}
      >
        <NavBarLink href={"/"} text={"Home"} toggle={toggleNav} />
        <NavBarLink href={"/about"} text={"About"} toggle={toggleNav} />
        <NavBarLink href={"/acolyte"} text={"Acolyte"} toggle={toggleNav} />
        <NavBarLink href={"/blog"} text={"Blog"} toggle={toggleNav} />
      </ul>
    </nav>
  );
};
export default Navbar;
