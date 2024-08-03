import { memo } from "react";
import "./styles.scss";

type WrapperSectionProps = {
    children: React.ReactNode;
    title?: React.ReactNode;
    type?: "default" | "detail";
};

const WrapperSection: React.FC<WrapperSectionProps> = ({ children, title, type = "default" }) => {
    return (
        <section className="wrapper__section__container">
            <div
                className={`wrapper__section__container__wrapper flex-column ${type === "detail" && "detail__section"}`}
            >
                {title && title}
                {children}
            </div>
        </section>
    );
};

export default memo(WrapperSection);
