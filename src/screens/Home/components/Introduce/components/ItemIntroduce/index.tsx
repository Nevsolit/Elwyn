import { BlogPost } from "~/core/types";
import "./styles.scss";
import { formatTime } from "~/core/utils";
import { Link } from "react-router-dom";
import PATHS from "~/core/constants/path";

type ItemIntroduceProps = {
    data?: BlogPost;
};

const ItemIntroduce: React.FC<ItemIntroduceProps> = (props) => {
    if (!props.data) {
        return (
            <div className="item_introduce__container">
                <div className="item_introduce__container__image"></div>
            </div>
        );
    }

    return (
        <Link to={`${PATHS.BLOG}/${props.data?.id}`} className="item_introduce__container">
            <div className="item_introduce__container__image">
                <img src={props.data.sections[0].images[0]?.url} alt={props.data?.title} />
            </div>
            <div className="item_introduce__container__content flex-column">
                <h1>{props.data?.title}</h1>
                <p>{formatTime(props.data?.timeCreated)}</p>
            </div>
        </Link>
    );
};

export default ItemIntroduce;
