import "./styles.scss";

type WrapperLayoutPresentProps = {
    children: React.ReactNode;
    type: "default" | "row" | "long-short";
    colums?: number;
    gap?: number;
};

const WrapperLayoutPresent: React.FC<WrapperLayoutPresentProps> = ({ children, gap = 4, colums, type = "default" }) => {
    const stylePresent =
        type === "row"
            ? "wrapper_layout_present__container--row"
            : type === "long-short"
            ? "wrapper_layout_present__container--long_short"
            : "";

    return (
        <div className={`${stylePresent} gap-${gap} ${colums ? `md:grid-cols-${colums}` : "md:grid-cols-3"}`}>
            {children}
        </div>
    );
};

export default WrapperLayoutPresent;
