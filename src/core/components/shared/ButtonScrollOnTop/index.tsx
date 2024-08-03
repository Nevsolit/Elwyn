import { ArrowUp } from "lucide-react";

import "./styles.scss";
import { useScroll } from "~/core/hooks";

const ButtonScrollOnTop: React.FC = () => {
    const scrollThreshold = useScroll(100);

    const handleScrollOnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!scrollThreshold) {
        return null;
    }

    return (
        <button onClick={handleScrollOnTop} className="button_scroll_on_top__container fade-in">
            <ArrowUp size={24} />
        </button>
    );
};

export default ButtonScrollOnTop;
