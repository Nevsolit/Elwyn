import { memo } from "react";
import "./styles.scss";

const Loading: React.FC = () => {
    return (
        <div className="loading__container">
            <div className="typing-indicator">
                <div className="typing-circle"></div>
                <div className="typing-circle"></div>
                <div className="typing-circle"></div>
                <div className="typing-shadow"></div>
                <div className="typing-shadow"></div>
                <div className="typing-shadow"></div>
            </div>
        </div>
    );
};

export default memo(Loading);
