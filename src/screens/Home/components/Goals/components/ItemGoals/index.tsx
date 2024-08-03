import "./styles.scss";

type ItemGoalsProps = {
    className?: string;
};

const ItemGoals: React.FC<ItemGoalsProps> = (props) => {
    return <div className={`item__goals__container ${props.className}`}>1</div>;
};

export default ItemGoals;
