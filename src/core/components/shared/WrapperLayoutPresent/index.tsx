import "./styles.scss";

type WrapperLayoutPresentProps = {
    children: React.ReactNode;
    type: "default" | "row" | "long-short";
};

const WrapperLayoutPresent: React.FC<WrapperLayoutPresentProps> = ({ children, type = "default" }) => {
    const stylePresent =
        type === "row"
            ? "wrapper_layout_present__container--row"
            : type === "long-short"
            ? "wrapper_layout_present__container--long_short"
            : "";

    return <div className={stylePresent}>{children}</div>;
};

export default WrapperLayoutPresent;
