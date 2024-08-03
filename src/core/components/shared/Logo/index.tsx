import { memo } from "react";
import { Link } from "react-router-dom";
import SVGS from "~/assets/svgs";

import PATHS from "~/core/constants/path";

type LogoProps = {
    size?: "small" | "medium" | "large";
    color?: "white" | "black";
};

const Logo: React.FC<LogoProps> = memo(({ size = "medium", color = "black" }) => {
    const sizeLogo = size === "small" ? "w-[42px]" : size === "medium" ? "w-[52px]" : "w-[64px]";

    return (
        <Link to={PATHS.HOME}>
            <img src={color === "white" ? SVGS.LogoWhite : SVGS.Logo} alt="Logo Elwyn" className={`${sizeLogo}`} />
        </Link>
    );
});

export default Logo;
