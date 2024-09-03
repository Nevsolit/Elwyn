import { Link } from "react-router-dom";
import "./styles.scss";
import PATHS from "~/core/constants/path";
import { BlogPost } from "~/core/types";
import { memo } from "react";
import { formatTime } from "~/core/utils";
import { useTranslation } from "react-i18next";

type ItemBlogsProps = {
    data: BlogPost;
};

const ItemBlogs: React.FC<ItemBlogsProps> = (props) => {
    const [t] = useTranslation("global");

    const images =
        props.data.sections[0].images.length > 0
            ? props.data.sections[0].images[0].url
            : "https://i.pinimg.com/736x/3d/89/12/3d8912781b539883a0b18274238df8e2.jpg";

    return (
        <Link to={`/${PATHS.BLOG}/${props.data.id}`} className="item__blogs__container">
            <div className="item__blogs__container__image">
                <img src={images} alt={props.data.title} />
            </div>
            <div className="item__blogs__container__content flex-column">
                <h1>{props.data.title}</h1>
                <p>
                    {props?.data?.timeUpdated
                        ? `${t("blogs.update-at")}: ${formatTime(props.data.timeUpdated)}`
                        : formatTime(props.data.timeCreated)}
                </p>
            </div>
        </Link>
    );
};

export default memo(ItemBlogs);
