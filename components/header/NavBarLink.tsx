"use client";
import BassComponentProps from "@/components/BaseComponent";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarLinkProps extends BassComponentProps {
  href: string;
  text: string;
  toggle?: () => void;
}

const NavBarLink = (props: NavBarLinkProps) => {
  const pathname = usePathname();
  return (
    <li className="group m-2 flex flex-col rounded-2xl px-5 py-2 md:hover:bg-slate-700 md:hover:bg-transparent">
      <Link
        href={props.href}
        onClick={props.toggle}
        className={`${pathname == props.href ? "font-bold text-cyan-400" : ""}`}
      >
        {props.text}
      </Link>
      <div
        className={`h-1 w-0 rounded-full bg-cyan-400 transition-all duration-700 ease-in-out md:group-hover:w-full`}
      ></div>
    </li>
  );
};
export default NavBarLink;
