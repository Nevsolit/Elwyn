import { Menu, X } from "lucide-react";
import { memo, useEffect, useState } from "react";

import { useCancel, useResize, useScroll } from "~/core/hooks";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import { HeaderSettings } from "~/core/types";

type NavBarProps = {
    header: HeaderSettings;
};

const NavBar: React.FC<NavBarProps> = memo((props) => {
    const [showMenu, setShowMenu] = useState(false);
    const { toggle } = useCancel(setShowMenu);
    const isAbove1024 = useResize(1024);
    const activeScroll = useScroll(200);

    const navBarStyle = isAbove1024
        ? "nav_bar__container__navLink"
        : `${showMenu ? "nav_bar__container__drawer" : "hidden"}`;

    useEffect(() => {
        if (isAbove1024) {
            setShowMenu(false);
        }
    }, [isAbove1024]);

    return (
        <div className="nav_bar__container">
            <button className="center-items nav_bar__container__btn_menu" onClick={toggle}>
                <Menu className="text-gray-700" />
            </button>
            <div className={navBarStyle} onClick={toggle}>
                <div className={`${isAbove1024 ? "" : "drawer__content slide-in-left"}`}>
                    <div className="drawer__content__head flex-between">
                        {/* <Logo /> */}
                        <button>
                            <X />
                        </button>
                    </div>
                    <nav className={` drawer__content__nav  ${isAbove1024 ? "flex-row" : "flex-column"}`}>
                        {props.header?.navLinks.map((navLink) => {
                            if (!navLink.isActive) return null;

                            return (
                                <NavLink
                                    key={navLink.id}
                                    to={navLink.url}
                                    className={({ isActive }) =>
                                        isActive
                                            ? `drawer__content__nav__link nav__link__active ${
                                                  activeScroll ? "text-tertiary" : "text-gray-700 "
                                              }`
                                            : `drawer__content__nav__link ${
                                                  activeScroll ? "text-tertiary" : "text-gray-700 "
                                              }`
                                    }
                                >
                                    {navLink.title}
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
});

export default NavBar;
