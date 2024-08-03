import "./styles.scss";

type ItemLearnAboutProps = {
    type?: "default" | "small";
};

const ItemLearnAbout: React.FC<ItemLearnAboutProps> = ({ type = "default" }) => {
    const styleItem =
        type === "small" ? "item__learn_about__container__small_image" : "item__learn_about__container__image";

    return (
        <div className={"item__learn_about__container"}>
            <div className={styleItem}></div>
        </div>
    );
};

export default ItemLearnAbout;
