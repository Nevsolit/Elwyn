import { BlogPost } from "~/core/types";
import "./styles.scss";
import { Link } from "react-router-dom";
import PATHS from "~/core/constants/path";

type ItemLearnAboutProps = {
    type?: "default" | "small";
    data?: BlogPost;
};

const ItemLearnAbout: React.FC<ItemLearnAboutProps> = ({ type = "default", data }) => {
    const styleItem =
        type === "small" ? "item__learn_about__container__small_image" : "item__learn_about__container__image";

    if (!data) {
        return (
            <div className={"item__learn_about__container"}>
                <div className={styleItem} />
            </div>
        );
    }

    return (
        <Link to={`${PATHS.BLOG}/${data?.id}`} className={"item__learn_about__container"}>
            <div className={styleItem}>
                <img src={data.sections[0].images[0]?.url} alt={data?.title} />
            </div>
        </Link>
    );
};

export default ItemLearnAbout;
