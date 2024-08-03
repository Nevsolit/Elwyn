import "./styles.scss";
import NavBar from "./components/Navbar";
import { Logo } from "~/core/components";
import { useScroll } from "~/core/hooks";

const Header: React.FC = () => {
    const activeScroll = useScroll(200);

    return (
        <header className={`header__container ${activeScroll && "bg-white fade-in"}`}>
            <div className="header__container__wrapper flex-between">
                <Logo color="white" />
                <NavBar />
            </div>
        </header>
    );
};

export default Header;
