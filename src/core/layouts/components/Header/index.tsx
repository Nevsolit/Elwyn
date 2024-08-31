import "./styles.scss";
import NavBar from "./components/Navbar";
import { useScroll } from "~/core/hooks";
import { memo, useCallback, useEffect, useState } from "react";
import { getDetailCollection } from "~/core/services";
import log from "~/core/utils/log";
import Logo from "./components/Logo";
import { HeaderSettings } from "~/core/types";

const Header: React.FC = () => {
    const activeScroll = useScroll(200);
    const [header, setHeader] = useState<HeaderSettings>();

    const handleGetHeader = useCallback(async () => {
        try {
            const result = (await getDetailCollection("settings", "header")) as HeaderSettings;
            if (result) {
                setHeader(result);
            }
        } catch (error) {
            log("error", "Header not found");
        }
    }, []);

    useEffect(() => {
        handleGetHeader();
    }, []);

    return (
        // bg-white shadow-sm fade-in
        <header className={`header__container ${activeScroll && ""}`}>
            <div className="header__container__wrapper flex-between">
                <Logo url={header?.logoUrl} />
                <NavBar header={header as HeaderSettings} />
            </div>
        </header>
    );
};

export default memo(Header);
