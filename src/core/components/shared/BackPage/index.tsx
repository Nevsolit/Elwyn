import { ChevronLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./styles.scss";
import { memo } from "react";

type BackPageProps = {
    type?: "detail" | "default";
    background?: "primary" | "secondary";
};

const BackPage: React.FC<BackPageProps> = ({ type = "default", background = "primary" }) => {
    const naviagte = useNavigate();

    const handleBack = () => {
        naviagte(-1);
    };

    return (
        <button
            onClick={handleBack}
            className={`group__center ${type === "detail" && "back_page__detail"} bg-${background} ${
                background === "primary" ? "text-secondary" : "text-white"
            }`}
        >
            {type === "default" ? <ChevronLeft size={24} className="text-tertiary" /> : <X size={24} />}
        </button>
    );
};

export default memo(BackPage);
