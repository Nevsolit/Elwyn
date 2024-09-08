import { memo } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import PATHS from "~/core/constants/path";
import { BlogPost } from "~/core/types";
import "./styles.scss";
import { formatTime } from "~/core/utils";

type ItemShareLifeProps = {
    data: BlogPost;
};

const ItemShareLife: React.FC<ItemShareLifeProps> = ({ data }) => {
    const [t] = useTranslation("global");

    return (
        <Link to={`/${PATHS.SHARE_LIFE}/${data?.id}`} className="item-share-life__container ">
            <img
                src={data?.sections[0]?.images[0]?.url}
                alt={data?.title}
                className="item-share-life__container__image"
            />
            <div className="item-share-life__container__content">
                <h3>{data?.title}</h3>
                <p>
                    {data?.timeUpdated
                        ? `${t("blogs.update-at")} ${formatTime(data?.timeUpdated)}`
                        : formatTime(data?.timeCreated)}
                </p>
            </div>
        </Link>
    );
};

export default memo(ItemShareLife);
