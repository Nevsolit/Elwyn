import { memo } from "react";
import { ProjectsEntity } from "~/core/types";
import "./styles.scss";
import { formatTime } from "~/core/utils";
import { Link } from "react-router-dom";
import PATHS from "~/core/constants/path";
import { useTranslation } from "react-i18next";

const ItemMyProject: React.FC<ProjectsEntity> = (props) => {
    const { t } = useTranslation("global");
    return (
        <div className="item_project__container">
            <span>{formatTime(props?.timeCreated)}</span>
            <h3>{props?.title}</h3>
            <Link className="item_project__container__link" to={`/${PATHS.PROJECT}/${props.id}`}>
                {t("project.post.view-detail")}
            </Link>
            <img src={props?.sections[0]?.images[0].url || ""} alt={props?.title} />
        </div>
    );
};

export default memo(ItemMyProject);
