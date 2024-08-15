import BassComponentProps from "@/app/components/BaseComponent";
import Link from "next/link";
interface NavBarLinkProps extends BassComponentProps {
    href: string;
    text: string;
    toggle?: () => void;
}
const NavBarLink = (props: NavBarLinkProps) => {
    return (
        <li className="m-2 py-2 px-5 rounded-2xl hover:bg-slate-700">
            <Link href={props.href} onClick={props.toggle}>{props.text}</Link>
        </li>
    )
}
export default NavBarLink;