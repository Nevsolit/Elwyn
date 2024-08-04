import { HTMLProps, memo } from "react";
import "./styles.scss";

const SearchBarCustom: React.FC<HTMLProps<HTMLInputElement>> = (props) => {
    return (
        <div className="search_bar__container__input">
            <input {...props} />
        </div>
    );
};

export default memo(SearchBarCustom);
