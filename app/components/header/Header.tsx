import BaseComponentProps from '@/app/components/BaseComponent';
interface HeaderProps extends BaseComponentProps {}

const Header = (props: HeaderProps) => {
    return (
        <header className={`${props.adlClasses}`}>
            {props.children}
        </header>
    );
}

export default Header;