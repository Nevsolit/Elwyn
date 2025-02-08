import { ArrowRight } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";
import { ResourcesPost } from "~/core/types";
import "./styles.scss";

type ItemServicesProps = {
    data?: ResourcesPost;
    layout?: boolean;
};

const ItemServices: React.FC<ItemServicesProps> = (props) => {
    const layout = props.layout ? "item_services__container" : "item_services__container__v2";

    if (!props.data) {
        return (
            <div className={layout}>
                <div className={`${layout}__image`}></div>
            </div>
        );
    }

    return (
        <div className={layout}>
            <div className={`${layout}__image`}>
                <img src={props?.data?.imageUrl} alt={props?.data?.title} />
                <span>{props?.data?.note}</span>
            </div>
            <div className={`${layout}__content`}>
                <h1>{props?.data?.title}</h1>
                <div className={`${layout}__content__account`}>
                    <img
                        src="https://i.pinimg.com/736x/e7/79/3a/e7793a171299c3fe23e6bc7f87431480.jpg"
                        alt="Võ Ngọc Min Kiên"
                    />
                    <p>Ngoc Min (Nevwyn)</p>
                </div>
                <Link
                    to={props?.data?.link || ""}
                    target="_blank"
                    className={`${layout}__content__button ${
                        props?.layout ? "button__default" : "button__default__v2"
                    }`}
                >
                    {props?.data?.buttonLabel}
                    <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default memo(ItemServices);
