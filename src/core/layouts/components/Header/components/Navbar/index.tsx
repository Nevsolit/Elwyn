import { Menu, X } from "lucide-react";
import { memo, useEffect, useState } from "react";

import { Logo } from "~/core/components";
import { useCancel, useResize } from "~/core/hooks";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import { navLink } from "~/core/constants";

const NavBar: React.FC = memo(() => {
    const [showMenu, setShowMenu] = useState(false);
    const { toggle } = useCancel(setShowMenu);
    const isAbove1024 = useResize(1024);
    const dataNavLink = navLink();

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
                <Menu className="text-tertiary" />
            </button>
            <div className={navBarStyle} onClick={toggle}>
                <div className={`${isAbove1024 ? "" : "drawer__content slide-in-left"}`}>
                    <div className="drawer__content__head flex-between">
                        <Logo />
                        <button>
                            <X />
                        </button>
                    </div>
                    <nav className={` drawer__content__nav  ${isAbove1024 ? "flex-row" : "flex-column"}`}>
                        {dataNavLink.map((navLink, index) => (
                            <NavLink
                                key={`navlink-${index}`}
                                to={navLink.to}
                                className={({ isActive }) =>
                                    isActive
                                        ? "drawer__content__nav__link nav__link__active"
                                        : "drawer__content__nav__link"
                                }
                            >
                                {navLink.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
});

export default NavBar;
