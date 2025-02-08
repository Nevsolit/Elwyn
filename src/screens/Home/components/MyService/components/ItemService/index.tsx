import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ResourcesPost } from "~/core/types";
import "./styles.scss";
import { memo } from "react";

type ItemServiceProps = {
    data?: ResourcesPost;
};

const ItemService: React.FC<ItemServiceProps> = (props) => {
    if (!props.data) {
        return (
            <div className="item_introduce__container ">
                <div className="item_introduce__container__image"></div>
            </div>
        );
    }

    return (
        <div className="item_introduce__container">
            <div className="item_introduce__container__image">
                <img src={props?.data?.imageUrl || ""} alt={props?.data?.title || ""} />
                <div className="item_introduce__container__content">
                    <span>{props?.data?.note || ""}</span>
                    <h3>{props?.data?.title || ""}</h3>
                    <Link
                        className="item_introduce__container__content__link"
                        target="_blank"
                        to={props?.data?.link || ""}
                    >
                        {props?.data?.buttonLabel || ""}
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default memo(ItemService);
