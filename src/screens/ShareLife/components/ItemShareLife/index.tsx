import { ArrowRight } from "lucide-react";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { BlogPost } from "~/core/types";
import "./styles.scss";
import PATHS from "~/core/constants/path";

type ItemShareLifeProps = {
    data: BlogPost;
};

const ItemShareLife: React.FC<ItemShareLifeProps> = ({ data }) => {
    const [t] = useTranslation("global");

    const renderDate = useMemo(() => {
        const date = new Date(data?.timeUpdated ? data.timeUpdated : data?.timeCreated);
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        const month = months[date.getUTCMonth()]; // Lấy tháng (dạng viết tắt)
        const year = date.getUTCFullYear(); // Lấy năm
        const day = date.getUTCDate(); // Lấy ngày

        return (
            <div className="item-share-life__container__time">
                <p>{month}</p>
                <span>{year}</span>
                <h1>{day}</h1>
            </div>
        );
    }, []);

    return (
        <div className="item-share-life__container ">
            {renderDate}
            <Link to={`/${PATHS.BLOG}/${data?.id}`} className="item-share-life__container__image">
                <img src={data?.sections[0].images[0].url} alt={data?.title} />
            </Link>
            <div className="item-share-life__container__content">
                <Link to={`/${PATHS.BLOG}/${data?.id}`}>
                    <h1>{data?.title} </h1>
                </Link>
                <p className="item-share-life__container__content__description">{data?.sections[0].contents}</p>
                <hr className="bg-gray-200" />
                <Link to={`/${PATHS.BLOG}/${data?.id}`} className="item-share-life__container__content__link">
                    <p>{t("share-life.view-detail")}</p>
                    <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default memo(ItemShareLife);
