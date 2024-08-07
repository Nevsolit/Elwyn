import { BlogPost } from "~/core/types";
import "./styles.scss";
import { Link } from "react-router-dom";
import PATHS from "~/core/constants/path";
import { memo } from "react";

type ItemGoalsProps = {
    className?: string;
    data?: BlogPost;
};

const ItemGoals: React.FC<ItemGoalsProps> = (props) => {
    if (!props.data) {
        return <div className={`item__goals__container ${props.className}`} />;
    }

    return (
        <Link to={`${PATHS.BLOG}/${props.data?.id}`} className={`item__goals__container ${props.className}`}>
            {props?.data?.sections[0]?.images[0].url && (
                <img src={props?.data?.sections[0]?.images[0].url} alt={props?.data?.title} />
            )}
        </Link>
    );
};

export default memo(ItemGoals);
