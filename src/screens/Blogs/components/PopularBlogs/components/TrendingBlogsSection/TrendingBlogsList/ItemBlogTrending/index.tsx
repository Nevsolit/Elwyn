import { memo } from "react";
import { BlogPost } from "~/core/types";
import "./styles.scss";
import { Link } from "react-router-dom";
import PATHS from "~/core/constants/path";

type ItemBlogTrendingProps = {
    dataTrending: BlogPost;
};

const ItemBlogTrending: React.FC<ItemBlogTrendingProps> = (props) => {
    return (
        <Link to={`/${PATHS.BLOG}/${props.dataTrending.id}`} className="item-blog-trending__container">
            <img
                src={props.dataTrending?.sections[0]?.images[0]?.url}
                alt={props?.dataTrending?.title}
                className="item-blog-trending__container__image"
            />
            <div className="item-blog-trending__container__content">
                <h2>{props?.dataTrending?.title}</h2>
                <p>{props?.dataTrending?.sections[0]?.contents[0]}</p>
            </div>
        </Link>
    );
};

export default memo(ItemBlogTrending);
