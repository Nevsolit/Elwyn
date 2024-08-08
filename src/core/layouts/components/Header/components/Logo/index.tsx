import { memo } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

import PATHS from "~/core/constants/path";

type LogoProps = {
    url?: string;
};

const Logo: React.FC<LogoProps> = memo(({ url }) => {
    return (
        <Link to={PATHS.HOME}>
            <img src={url} alt="Elwyn studio" className="logo__container" />
        </Link>
    );
});

export default Logo;
