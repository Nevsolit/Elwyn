import { memo } from "react";

import "./styles.scss";
import { Filter } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeadProjects: React.FC = memo(() => {
    const { t } = useTranslation("global");

    return (
        <div className="head_projects__container">
            <div className="head_projects__container__input">
                <input type="text" placeholder={t("projects.placeholder-search")} />
                <button className="btn__default">{t("projects.search")}</button>
            </div>
            <button className="btn__default">
                <Filter size={24} />
            </button>
        </div>
    );
});

export default HeadProjects;
