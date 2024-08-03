import { memo } from "react";

import "./styles.scss";
import { Filter } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeadBlogs: React.FC = memo(() => {
    const [t] = useTranslation("global");

    return (
        <div className="head_blogs__container">
            <div className="head_blogs__container__input">
                <input type="text" placeholder={t("blogs.placeholder-search")} />
                <button className="btn__default">{t("blogs.search")}</button>
            </div>
            <button className="btn__default">
                <Filter size={24} />
            </button>
        </div>
    );
});

export default HeadBlogs;
